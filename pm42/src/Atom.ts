import { atom } from "recoil";
import { IMentorInfo, ISlotInfo } from "./interface";

export const mentorToggleState = atom({
  key: "mentoToggle",
  default: false,
});

export const myInfoState = atom({
  key: "myInfo",
  default: {
    token: "",
    image: "",
    login: "",
    level: "",
    coa: "",
    projects: "",
    description: "",
    total_feedback: 0,
  },
});

export const backgorundToggleState = atom({
  key: "backgroundToggle",
  default: false,
});

export const ScheduleToggleState = atom({
  key: "scheduleToggle",
  default: false,
});

export const MenteeScheduleBackToggleState = atom({
  key: "menteeScheduleBackToggle",
  default: false,
});

export const MenteeScheduleToggleState = atom({
  key: "menteeScheduleToggle",
  default: false,
});

export const ScheduleBackToggleState = atom({
  key: "schduleBackToggle",
  default: false,
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

export const MentorInfoToggleState = atom({
  key: "mentorInfoToggle",
  default: false,
});

export const MentorInfoBackToggleState = atom({
  key: "mentorInfoBackToggle",
  default: false,
});

export const CurrentMentorInfoState = atom<IMentorInfo>({
  key: "currentMentorInfo",
  default: {
    intra: "inshin",
    level: 999,
    good: 10000,
    subjects: ["ft_transcendence"],
    image: "",
    coalition: "gon",
    description: "",
  },
});

export const CurrentSubjectInfoState = atom<{ subject: string; info: any }>({
  key: "currentSubjectInfoState",
  default: {
    subject: "",
    info: [],
  },
});

export const SelectedSubjectStateOnMenotrInfo = atom<{
  subject: string;
  info: any;
}>({
  key: "selectedSubjectOnMentorInfo",
  default: {
    subject: "",
    info: [],
  },
});

export const OpenedSlotsState = atom<ISlotInfo[]>({
  key: "openedSlots",
  default: [],
});

export const SelectedSubjectInfoState = atom({
  key: "selectedSubjectInfo",
  default: {
    subject: "",
    info: [],
  },
});

export const SelectedSubjectIndexState = atom({
  key: "selectedSubjectIndex",
  default: 0,
});

export const CurrentCircleInfoState = atom({
  key: "currentCircleInfo",
  default: "ALL",
});

export const FilterInfoState = atom({
  key: "filterInfo",
  default: "",
});

export const MyInfoToggleState = atom({
  key: "myInfoToggle",
  default: false,
});

export const MyInfoBackToggleState = atom({
  key: "MyInfoBackToggle",
  default: false,
});

export const AlertToggleState = atom({
  key: "alertToggle",
  default: false,
});

export const AlertBackToggleState = atom({
  key: "alertBackToggle",
  default: false,
});

export const AlertMessageState = atom({
  key: "alertMessage",
  default: "",
});

export const FeedbackToggleState = atom({
  key: "feedbackToggle",
  default: false,
});

export const FeedbackBackToggleState = atom({
  key: "feedbackBackToggle",
  default: false,
});
