import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl;

  // Task 1 → Add default pageNo
  if (url.pathname === "/Lab22-Page") {
    return NextResponse.redirect(
      new URL("/Lab22-Page/0", request.url)
    );
  }

  // Task 2 & 3 → Auth check
  if (url.pathname.startsWith("/Lab24/dashboard")) {
    const tokenCookie = request.cookies.get("token");

    // No token → redirect login
    if (!tokenCookie) {
      return NextResponse.redirect(new URL("/Lab24/login", request.url));
    }

    // Parse token expiry (simple simulation)
    const tokenData = JSON.parse(tokenCookie.value);
    const now = Date.now();

    // Expired → issue new token
    if (tokenData.expiry < now) {
      const response = NextResponse.next();

      const newToken = JSON.stringify({
        value: "new-token",
        expiry: now + 60 * 60 * 1000, // 1 hour
      });

      response.cookies.set("token", newToken);
      return response;
    }
  }

  if (url.pathname.startsWith("/Lab24/dashboard")) {
    const tokenCookie = request.cookies.get("token");
    // Task 2: No token → redirect to login
    if (!tokenCookie) {
      return NextResponse.redirect(
        new URL("/Lab24/login", request.url)
      );
    }

    try {
      // Parse token
      const tokenData = JSON.parse(tokenCookie.value);
      const now = Date.now();
      // Task 3: Token expired → create a new token 
      if (tokenData.expiry < now) {
        const response = NextResponse.next();

        const newToken = JSON.stringify({
          value: "new-token",
          expiry: now + 60 * 60 * 1000, // 1 hour
        });
        response.cookies.set("token", newToken, {
          httpOnly: true,
          path: "/",
        });
        return response;
      }
      // Token is valid
      return NextResponse.next();

    } catch (error) {
      // Invalid token → redirect to login
      return NextResponse.redirect(
        new URL("/Lab24/login", request.url)
      );
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/Lab24/dashboard/:path*"],
};