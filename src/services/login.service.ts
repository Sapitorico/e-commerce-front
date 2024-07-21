import customAxios from "@middlewares/axios.instance";

export const loginService = async (email: string, password: string) => {
  try {
    const response = await customAxios.post("/auth/login", {
      email,
      password,
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error };
  }
};
