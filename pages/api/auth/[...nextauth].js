import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await prisma.person.findFirst({
          where: { email: credentials.email },
        });

        if (!user) {
          return null;
        }

        const isValidPassword = user.password === credentials.password;

        if (!isValidPassword) {
          return null;
        }

        return user;
      }
    })
  ],
  callbacks:{
    async session({session, token, userInfo}) {
      const user = await prisma.person.findFirst({
        where: { email: session.user.email },
      });
      session.user = user;
      return session;
    },
    async redirect(url, baseUrl){
      return '/sellerAccount';
    },
  },

}
export default NextAuth(authOptions)

