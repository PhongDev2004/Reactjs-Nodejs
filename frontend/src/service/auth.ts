import { IUser } from "src/interfaces/User";
import instance from "./api";

export const loginUser = async (user: IUser) => {
  try {
    const { data } = await instance.post("/auth/login", user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (user: IUser) => {
  try {
    const { data } = await instance.post("/auth/register", user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const checkPermissionUser = async (user: IUser) => {};
