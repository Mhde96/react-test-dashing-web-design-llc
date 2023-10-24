import { UserType } from "../types/data/UserType";

export const LoginApi = async (
  username: string,
  password: string
): Promise<UserType> => {
  try {
    const response = await fetch(`mock/users.json`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const users: UserType[] = await response.json();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      return user;
    } else {
      return { email: "", id: 0, password: "", phone: "", username: "" };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error so the caller can handle it.
  }
};