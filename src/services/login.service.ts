import { loginAddapter } from "@adapters/login.adapter";
import customAxios from "@middlewares/axios.instance";

export const loginService = async (email: string, password: string) => {
  return customAxios
    .post("/auth/login", {
      email,
      password,
    })
    .then((res) => {
      return loginAddapter(res.data);
    });
};
