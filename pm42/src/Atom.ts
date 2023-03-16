import { atom } from "recoil";

export const mentorToggleState = atom({
  key: "mentoToggle",
  default: true,
});

export const backgorundToggleState = atom({
  key: "backgroundToggle",
  default: true,
});

export const ScheduleToggleState = atom({
  key: "scheduleToggle",
  default: true,
});

export const ScheduleBackToggleState = atom({
  key: "schduleBackToggle",
  default: true,
});
