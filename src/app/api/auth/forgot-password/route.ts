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

    const { data, error } =
      await supabaseAdmin.auth.admin.listUsers({
        page: 1,
        perPage: 1000,
      });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to verify the account. Please try again.",
        },
        { status: 500 }
      );
    }

    const existingUser = data.users.find(
      (user) => user.email?.trim().toLowerCase() === email
    );

    if (!existingUser) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This email is not registered. Please create an account first.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process your request. Please try again.",
      },
      { status: 500 }
    );
  }
}