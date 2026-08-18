import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is required.",
        },
        { status: 400 }
      );
    }

    // Check whether the email already exists in Supabase Auth.
    const { data, error } =
      await supabaseAdmin.auth.admin.listUsers({
        page: 1,
        perPage: 1000,
      });

    if (error) {
      console.error("Error checking existing user:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Failed to verify account availability.",
        },
        { status: 500 }
      );
    }

    const existingUser = data.users.find(
      (user) => user.email?.trim().toLowerCase() === email
    );

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error:
            "An account with this email already exists. Please sign in instead.",
        },
        { status: 409 }
      );
    }

    // Email is available for registration.
    return NextResponse.json({
      success: true,
    });
  } catch (err: unknown) {
    console.error("Registration account check error:", err);

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}