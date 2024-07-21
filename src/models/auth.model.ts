export interface user {
  id: string;
  full_name: string;
  username: string;
  email: string;
  phone_number: string;
  updated_at: string;
  created_at: string;
}

declare module "@auth/core/types" {
  interface Session {
    user: user;
    token: string;
  }
}
