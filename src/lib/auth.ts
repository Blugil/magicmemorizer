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
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token}) => {
      console.log("session callback", {session, token});
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
    //async redirect({ url, baseUrl }) {
    //  //console.log({url, baseUrl});
    //  
    //  // Allows relative callback URLs
    //  //if (url.startsWith("/")) return `${baseUrl}${url}`
    //  // Allows callback URLs on the same origin
    //  //else if (new URL(url).origin === baseUrl) return url
    //  return baseUrl 
    //}
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login"
  },
};

