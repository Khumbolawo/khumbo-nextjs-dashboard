//configuring next-auth for the app
import type { NextAuthConfig } from 'next-auth';
import { signIn } from 'next-auth/react';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
  //specify pages to direct users to our sign in page instead of the default next-auth one
  pages: {
    signIn: '/login',
  },
  //tools for preventing users from accessing dashboard unless logged in
  callbacks: {
    //authorized callback verifies authentication to a page via next middleware
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; //code redirects unauthorized users to log in page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [Credentials({})], //an array where you list different login options. Credentials provider allows logins using name and password
} satisfies NextAuthConfig;
