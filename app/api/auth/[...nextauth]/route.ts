import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

// Define the authOptions inside the route file
const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  // Optional: You can add callbacks, session, etc., here
};

const handler = NextAuth(authOptions);

// Ensure correct export for App Router
export const GET = handler;
export const POST = handler;
