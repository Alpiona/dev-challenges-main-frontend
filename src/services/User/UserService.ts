import client from "@/client/api";
import {
  LogInData,
  LogInParams,
  SignUpUserData,
  SignUpUserParams,
} from "./UserTypes";

const logIn = (data: LogInParams) =>
  client.post<LogInData>("/api/users/log-in", data);

const signUp = async (data: SignUpUserParams) =>
  client.post("/api/users", data);

const logOut = async (token: string) =>
  client.delete("/api/users/log-out", {
    headers: { Authorization: `Bearer ${token}` },
  });

const getSession = async (token: string) =>
  client.get<SignUpUserData>("/api/users", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const UserService = {
  logIn,
  signUp,
  logOut,
  getSession,
};
