import { defineConfig } from "auth-astro";
import { AccessDenied } from "@auth/core/errors";
import CredentialProvider from "@auth/core/providers/credentials";
import { loginService } from "@services/login.service";

export const authOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      credentials: {},
      authorize: async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;
        const res = await loginService(email, password);
        if (res.success) {
          const user = res.data.user;
          const token = res.data.token;
          return { user: user, token: token };
        }
        return Promise.reject(new Error("Authentication failed"));
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (typeof user !== "undefined") {
        return user;
      }
      return { ...token };
    },
    async session({ session, token }) {
      const user = Object.keys(token).reduce((p, c) => {
        if (c !== "iat" && c !== "exp" && c !== "jti" && c !== "token") {
          return { ...p, [c]: token[c] };
        } else {
          return p;
        }
      }, {});
      return {
        ...user,
        token: token.token,
      };
    },
  },
};

export default defineConfig({ ...authOptions });
