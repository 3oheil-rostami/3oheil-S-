import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const cookies = request.cookies.getAll();
	console.log(cookies);
}
export const config = {
	matcher: "/user/*",
};
