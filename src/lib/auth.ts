import { User } from "@prisma/client";
import type { Awaitable, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.email,
        } as Awaitable<User>;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token}) => {
      //console.log("session callback", {session, token});
      return {
        ...session,
        user: {
          email: token.email,
          sub: token.sub,
        }
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        //console.log("JWT callback", {token, user});
        if (user.email === process.env.ADMIN_EMAIL) {
          token.userRole = "admin";
        }
        else if (user.email === process.env.WIFE_EMAIL) {
          token.userRole = "wife";
        }
        else {
          token.userRole = "user";
        }
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
        };
      }
      return token;
    },
  },
};

