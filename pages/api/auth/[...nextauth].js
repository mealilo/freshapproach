import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
//import {PrismaAdapter} from '@next-auth/prisma-adapter';
//import {PrismaClient} from '@prisma/client';

export const authOptions = {
     //adapter: PrismaAdapter(prisma),
    // Configure one or more authentication providers
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
    /*callbacks:{
        jwt: async () => {},
        session: () => {}
    }, 
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    },*/ 
  }
  
  export default NextAuth(authOptions)


/*
const options = {
    providers: [
        GoogleProvider({
            clientId: "process.env.GOOGLE_CLIENT_ID",
            clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
        }),
        Email({
            server:{
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth:{
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            form: process.env.EMAIL_FROM,
        })
        
    ],
    /* database:{
        type:"sqlite",
        database: ":memory:",
        synchronize: true,
    } 
};
export default (req,res) => NextAuth(req,res,options);
/*
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  //Override the default sign in page
  secret: process.env.NEXTAUTH_SECRET,

  page:{
    signIn:"/auth/signin",
  }
}

export default NextAuth(authOptions)*/