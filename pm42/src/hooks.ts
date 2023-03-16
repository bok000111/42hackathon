import { useSetRecoilState } from "recoil";
import {
  backgorundToggleState,
  MentorInfoBackToggleState,
  MentorInfoToggleState,
  mentorToggleState,
  ScheduleBackToggleState,
  ScheduleToggleState,
} from "./Atom";

function customHooks() {
  const setBackgroundToggle = useSetRecoilState(backgorundToggleState);
  const setMentorToggle = useSetRecoilState(mentorToggleState);
  const setScheduleToggle = useSetRecoilState(ScheduleToggleState);
  const setScheduleBackToggle = useSetRecoilState(ScheduleBackToggleState);
  const setMentorInfoToggle = useSetRecoilState(MentorInfoToggleState);
  const setMentorInfoBackToggle = useSetRecoilState(MentorInfoBackToggleState);

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
  };

  const closeScheduleBack = () => {
    setScheduleToggle(false);
    setScheduleBackToggle(false);
  };

  return {
    closeSetMentoring,
    closeScheduleBack,
    closeMentorInfo,
    openMentorInfo,
  };
}

export default customHooks;
