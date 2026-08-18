import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

/**
 * Centralized registry of all private routes.
 * Requires authentication. Nested paths are automatically protected.
 */
export const PROTECTED_ROUTES = [
  "/dashboard",
  "/profile",
  "/mock-test",
  "/study-material",
  "/complete-profile",
];

/**
 * Public authentication and recovery routes.
 * These routes are accessible without authentication.
 */
export const PUBLIC_AUTH_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

/**
 * Guest-only routes.
 * Authenticated users are redirected away from these routes.
 */
export const GUEST_ONLY_ROUTES = [
  "/login",
  "/register",
];

/**
 * Checks whether a pathname matches a configured route
 * or one of its nested paths.
 */
function isMatchingRoute(
  pathname: string,
  routes: string[]
): boolean {
  return routes.some(
    (route) =>
      pathname === route ||
      pathname.startsWith(`${route}/`)
  );
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Synchronize Supabase session and retrieve
  // authenticated/profile information.
  const {
    supabaseResponse,
    claims,
    isProfileCompleted,
    profileError,
  } = await updateSession(request);

  const isAuthenticated = !!claims;

  // Classify the current route.
  const isProtectedRoute = isMatchingRoute(
    pathname,
    PROTECTED_ROUTES
  );

  const isGuestOnlyRoute = isMatchingRoute(
    pathname,
    GUEST_ONLY_ROUTES
  );

  const isCompleteProfileRoute =
    isMatchingRoute(
      pathname,
      ["/complete-profile"]
    );

  // RULE 1:
  // Unauthenticated user attempting to access
  // a protected route.
  if (
    isProtectedRoute &&
    !isAuthenticated
  ) {
    const redirectUrl =
      request.nextUrl.clone();

    redirectUrl.pathname = "/login";
    redirectUrl.search = "";

    redirectUrl.searchParams.set(
      "redirect",
      pathname
    );

    const redirectResponse =
      NextResponse.redirect(redirectUrl);

    // Preserve refreshed Supabase cookies.
    supabaseResponse.cookies
      .getAll()
      .forEach((cookie) => {
        redirectResponse.cookies.set(
          cookie.name,
          cookie.value,
          cookie
        );
      });

    return redirectResponse;
  }

  // RULE 2:
  // Authenticated user with an incomplete profile
  // must complete the profile before accessing
  // other protected application routes.
  //
  // /complete-profile is excluded to prevent
  // a redirect loop.
  if (
    isAuthenticated &&
    isProfileCompleted === false &&
    isProtectedRoute &&
    !isCompleteProfileRoute
  ) {
    const redirectUrl =
      request.nextUrl.clone();

    redirectUrl.pathname =
      "/complete-profile";

    redirectUrl.search = "";

    const redirectResponse =
      NextResponse.redirect(redirectUrl);

    // Preserve refreshed Supabase cookies.
    supabaseResponse.cookies
      .getAll()
      .forEach((cookie) => {
        redirectResponse.cookies.set(
          cookie.name,
          cookie.value,
          cookie
        );
      });

    return redirectResponse;
  }

  // RULE 3:
  // Authenticated user with a completed profile
  // should not access the Complete Profile page.
  if (
    isAuthenticated &&
    isProfileCompleted === true &&
    isCompleteProfileRoute
  ) {
    const redirectUrl =
      request.nextUrl.clone();

    redirectUrl.pathname = "/dashboard";
    redirectUrl.search = "";

    const redirectResponse =
      NextResponse.redirect(redirectUrl);

    // Preserve refreshed Supabase cookies.
    supabaseResponse.cookies
      .getAll()
      .forEach((cookie) => {
        redirectResponse.cookies.set(
          cookie.name,
          cookie.value,
          cookie
        );
      });

    return redirectResponse;
  }

  // RULE 4:
  // Authenticated users attempting to access
  // login/register.
  //
  // Completed profile → Dashboard
  // Incomplete profile → Complete Profile
  if (
    isGuestOnlyRoute &&
    isAuthenticated
  ) {
    const redirectUrl =
      request.nextUrl.clone();

    redirectUrl.pathname =
      isProfileCompleted === true
        ? "/dashboard"
        : "/complete-profile";

    redirectUrl.search = "";

    const redirectResponse =
      NextResponse.redirect(redirectUrl);

    // Preserve refreshed Supabase cookies.
    supabaseResponse.cookies
      .getAll()
      .forEach((cookie) => {
        redirectResponse.cookies.set(
          cookie.name,
          cookie.value,
          cookie
        );
      });

    return redirectResponse;
  }

  // RULE 5:
  // If the profile query failed, don't make a
  // profile-completion decision based on unknown data.
  //
  // The request is allowed to continue so the
  // application can handle the error appropriately.
  if (
    isAuthenticated &&
    profileError
  ) {
    console.error(
      "Profile lookup failed in proxy:",
      profileError
    );
  }

  // RULE 6:
  // Public or valid authenticated request.
  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};