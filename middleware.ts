//importing authconfig object into a Middleware file
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

//function exports a configuration for the middle
//the routes & objects in the matcher are protected from the middleware to not interfere with API handlers and image files for performance
export const config  = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}