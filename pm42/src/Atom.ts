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

export const StartIndexState = atom({
  key: "startIndex",
  default: -1,
});

export const EndIndexState = atom({
  key: "endIndex",
  default: -1,
});

export const MenteeNumberState = atom({
  key: "menteeNumber",
  default: 1,
});

export const SelectedSubjectState = atom({
  key: "selectedSubject",
  default: "",
});

export const SubjectDescriptionState = atom({
  key: "subjectDescription",
  default: "",
});
