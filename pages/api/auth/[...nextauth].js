import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }), 
      CredentialsProvider({
        name: "Credentials",
        credentials:{
            username: {label:"Email", type: "text", placeholder: "Enter your email"},
            password: {label: "Password", type: "Create your password"},
          
        },
       
        async authorize(credentials, req) {
            const user = {id: "1", name: "J Smith", email:"jsmith@example.com"}
            if(user){
                return user
            } else {
                return null
            }
        }
      }) 
    ],
    pages:{
      signIn:"/signIn",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
      async redirect(url, baseUrl){
        return '/sellerAccount'; 
      },
    },
  
  }
  
  export default NextAuth(authOptions)


