import { atom } from "recoil";

export const mentorToggleState = atom({
  key: "mentoToggle",
  default: true,
});

export const backgorundToggleState = atom({
  key: "backgroundToggle",
  default: true,
});
