// Authentication utility functions
// This handles cookie-based authentication

import { cookies } from "next/headers";

// Secret key for signing tokens (in production, use environment variable)
const AUTH_COOKIE_NAME = "auth-token";

// Check if user is authenticated
export async function isAuthenticated() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get(AUTH_COOKIE_NAME);
  return !!authToken;
}

// Set authentication cookie
export async function setAuthCookie(userData) {
  const cookieStore = await cookies();
  // In production, you'd create a proper JWT token here
  const token = Buffer.from(JSON.stringify(userData)).toString("base64");

  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return token;
}

// Remove authentication cookie
export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

// Get current user from cookie
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get(AUTH_COOKIE_NAME);

  if (!authToken) return null;

  try {
    const userData = JSON.parse(
      Buffer.from(authToken.value, "base64").toString()
    );
    return userData;
  } catch (error) {
    return null;
  }
}
