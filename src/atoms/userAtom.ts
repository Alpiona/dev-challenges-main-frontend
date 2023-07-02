import { atom } from "recoil";

export interface UserState {
  name: string;
}

export const userState = atom<UserState | null>({
  key: "userState",
  default: null,
});
