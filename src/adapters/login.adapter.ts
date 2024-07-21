import type { ApiUser, User, UserData } from "@models/auth.model";

export const loginAddapter = (data: UserData<ApiUser>): UserData<User> => {
  const { user, token } = data;
  return {
    token: token,
    user: {
      id: user.id,
      full_name: user.full_name,
      username: user.username,
      email: user.email,
      phone_number: user.phone_number,
    },
  };
};
