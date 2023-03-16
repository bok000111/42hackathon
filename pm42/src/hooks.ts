import { useSetRecoilState } from "recoil";
import {
  backgorundToggleState,
  mentorToggleState,
  ScheduleBackToggleState,
  ScheduleToggleState,
} from "./Atom";

function customHooks() {
  const setBackgroundToggle = useSetRecoilState(backgorundToggleState);
  const setMentorToggle = useSetRecoilState(mentorToggleState);
  const setScheduleToggle = useSetRecoilState(ScheduleToggleState);
  const setScheduleBackToggle = useSetRecoilState(ScheduleBackToggleState);

  const closeBackground = () => {
    setBackgroundToggle(false);
    setMentorToggle(false);
  };

  const closeScheduleBack = () => {
    setScheduleToggle(false);
    setScheduleBackToggle(false);
  };

  return {
    closeBackground,
    closeScheduleBack,
  };
}

export default customHooks;
