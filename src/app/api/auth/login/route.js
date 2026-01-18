import { NextResponse } from "next/server";
import { MOCK_USER } from "@/lib/mockDb";
import { setAuthCookie } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate credentials against mock user
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      // Set authentication cookie
      await setAuthCookie({ email });

      return NextResponse.json({
        success: true,
        message: "Login successful",
        user: { email },
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
