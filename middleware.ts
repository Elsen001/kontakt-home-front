import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /ru ilə başlayan bütün yolları /-ə yönləndir
  if (pathname.startsWith("/ru")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// middleware hansı yollar üçün işləyəcək
export const config = {
  matcher: ["/ru/:path*"],
};