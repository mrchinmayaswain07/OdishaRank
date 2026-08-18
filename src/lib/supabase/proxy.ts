import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet, headers) {
          // Update request cookies so downstream Server Components
          // receive the refreshed session.
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          // Recreate the response with the updated request cookies.
          supabaseResponse = NextResponse.next({
            request,
          });

          // Send refreshed cookies back to the browser.
          cookiesToSet.forEach(
            ({ name, value, options }) => {
              supabaseResponse.cookies.set(
                name,
                value,
                options
              );
            }
          );

          // Preserve Supabase cache/security headers.
          if (headers) {
            Object.entries(headers).forEach(
              ([key, value]) => {
                supabaseResponse.headers.set(
                  key,
                  value
                );
              }
            );
          }
        },
      },
    }
  );

  // Verify the JWT and retrieve authenticated claims.
  const {
    data: claimsData,
    error,
  } = await supabase.auth.getClaims();

  // Authentication failure means there is no valid
  // authenticated user.
  if (error) {
    return {
      supabaseResponse,
      claims: null,
      isProfileCompleted: null,
      profileError: null,
    };
  }

  const claims = claimsData?.claims ?? null;

  // No authenticated user.
  if (!claims?.sub) {
    return {
      supabaseResponse,
      claims: null,
      isProfileCompleted: null,
      profileError: null,
    };
  }

  // Get the authenticated user's profile completion state.
  // The user ID comes from the authenticated JWT claims.
  const {
    data: profile,
    error: profileError,
  } = await supabase
    .from("profiles")
    .select("is_profile_completed")
    .eq("user_id", claims.sub)
    .maybeSingle();

  return {
    supabaseResponse,
    claims,
    isProfileCompleted:
      profile?.is_profile_completed ?? false,
    profileError: profileError?.message ?? null,
  };
}