import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const id = request.nextUrl.pathname;

  let link: string | null = null;

  await fetch(`${request.nextUrl.origin}/api/redirectLink${id}`).then(
    async (res) => {
      if (res.status === 200) {
        link = (await res.json()) as string;
      } else {
        link = null;
      }
    }
  );

  if (!link) {
    return NextResponse.next();
  }

  return NextResponse.redirect(link);
}

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico).*)",
};
