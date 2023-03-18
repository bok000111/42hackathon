import { useSetRecoilState } from "recoil";
import {
  backgorundToggleState,
  MenteeScheduleBackToggleState,
  MenteeScheduleToggleState,
  MentorInfoBackToggleState,
  MentorInfoToggleState,
  mentorToggleState,
  ScheduleBackToggleState,
  ScheduleToggleState,
  SelectedSubjectIndexState,
} from "./Atom";
import { getMonday } from "./components/ScheduleModal.tsx/ScheduleHooks";

function customHooks() {
  const setBackgroundToggle = useSetRecoilState(backgorundToggleState);
  const setMentorToggle = useSetRecoilState(mentorToggleState);
  const setScheduleToggle = useSetRecoilState(ScheduleToggleState);
  const setScheduleBackToggle = useSetRecoilState(ScheduleBackToggleState);
  const setMentorInfoToggle = useSetRecoilState(MentorInfoToggleState);
  const setMentorInfoBackToggle = useSetRecoilState(MentorInfoBackToggleState);
  const setMenteeScheduleToggle = useSetRecoilState(MenteeScheduleToggleState);
  const setSelectedSubjectIndex = useSetRecoilState(SelectedSubjectIndexState);
  const setMenteeScheduleBackToggle = useSetRecoilState(
    MenteeScheduleBackToggleState
  );

  const closeSetMentoring = () => {
    setBackgroundToggle(false);
    setMentorToggle(false);
  };

  const closeMentorInfo = () => {
    setMentorInfoBackToggle(false);
    setMentorInfoToggle(false);
  };

  const openMentorInfo = () => {
    setMentorInfoBackToggle(true);
    setMentorInfoToggle(true);
    setSelectedSubjectIndex(0);
  };

  const closeScheduleBack = () => {
    setScheduleToggle(false);
    setScheduleBackToggle(false);
    setMenteeScheduleToggle(false);
  };

  const openMenteeSchedule = () => {
    setMenteeScheduleToggle(true);
    setMenteeScheduleBackToggle(true);
  };

  const closeMenteeSchedule = () => {
    setMenteeScheduleBackToggle(false);
    setMenteeScheduleToggle(false);
  };

  return {
    closeSetMentoring,
    closeScheduleBack,
    closeMentorInfo,
    openMentorInfo,
    openMenteeSchedule,
    closeMenteeSchedule,
  };
}

export function convertToLectureTime(start: number, end: number) {
  const mon = getMonday();
  const startDate = new Date(mon),
    endDate = new Date(mon);
  startDate.setMinutes(start * 15), endDate.setMinutes((end + 1) * 15);
  const sM = startDate.getMonth() + 1,
    sD = startDate.getDate();
  const sH = startDate.getHours(),
    sMin = startDate.getMinutes();
  const eH = endDate.getHours(),
    eMin = endDate.getMinutes();
  return `${sM < 10 ? "0" + sM : sM}.${sD < 10 ? "0" + sD : sD} ${
    sH < 12 ? "AM" : "PM"
  } ${sH % 12 === 0 ? 12 : sH % 12 < 10 ? "0" + (sH % 12) : sH % 12}:${
    sMin < 10 ? "0" + sMin : sMin
  } ~ ${eH < 12 ? "AM" : "PM"} ${
    eH % 12 === 0 ? 12 : eH % 12 < 10 ? "0" + (eH % 12) : eH % 12
  }:${eMin < 10 ? "0" + eMin : eMin}`;
}

export default customHooks;

interface ICircle {
  [key: string]: string;
}
export const circleInfo: ICircle = {
  "Circle 0": ["Libft"].join(","),
  "Circle 1": ["ft_printf", "get_next_line", "Born2beroot"].join(","),
  "Circle 2": [
    "so_long",
    "FdF",
    "fract-ol",
    "minitalk",
    "pipex",
    "push_swap",
  ].join(","),
  "Circle 3": ["Philosophers", "minishell"].join(","),
  "Circle 4": [
    "miniRT",
    "cub3d",
    "NetPractice",
    "CPP 00",
    "CPP 01",
    "CPP 02",
    "CPP 03",
    "CPP 04",
  ].join(","),
  "Circle 5": [
    "Inception",
    "ft_irc",
    "webserv",
    "CPP 05",
    "CPP 06",
    "CPP 07",
    "CPP 08",
    "CPP 09",
  ].join(","),
  "Circle 6": ["ft_transcendence"].join(","),
};
