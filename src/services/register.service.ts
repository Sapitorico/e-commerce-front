import customAxios from "@middlewares/axios.instance";
import type { NewUser } from "@models/register.model";

export const registerService = async (newUser: NewUser) => {
  return customAxios.post("/auth/register", newUser);
};
