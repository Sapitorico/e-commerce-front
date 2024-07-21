export interface ApiResponse<T> {
  code: string;
  data: T;
  message: string;
  success: boolean;
}

export interface UserData<T = User | ApiUser> {
  token: string;
  user: T;
}

export interface ApiUser {
  id: string;
  full_name: string;
  username: string;
  email: string;
  phone_number: string;
  user_type: string;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id: string;
  full_name: string;
  username: string;
  email: string;
  phone_number: string;
}

export const EmptyUser: User = {
  id: "",
  full_name: "",
  username: "",
  email: "",
  phone_number: "",
};

declare module "@auth/core/types" {
  interface Session {
    user: User;
    token: string;
  }
}
