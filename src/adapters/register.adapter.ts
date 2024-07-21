import type { NewUser } from "@models/register.model";

export const registerAddapter = (formData: FormData): NewUser => {
  return {
    full_name: formData.get("full_name") as string,
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    phone_number: formData.get("phone_number") as string,
    password: formData.get("password") as string,
  };
};
