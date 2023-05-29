import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      //profile(profile) {
      //  return {
      //    id
      //    // Return all the profile information you need.
      //    // The only truly required field is `id`
      //    // to be able identify the account when added to a database
      //  }
      //},
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      console.log(session, token, user)
      return session // The return type will match the one returned in `useSession()`
    },
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
};

