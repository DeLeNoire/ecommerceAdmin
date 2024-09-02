
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  // Optional: You can add callbacks, session, etc., here
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // For App Router

