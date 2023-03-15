import { useSetRecoilState } from "recoil";
import { backgorundToggleState, mentorToggleState } from "./Atom";

function customHooks() {
  const setBackgroundToggle = useSetRecoilState(backgorundToggleState);
  const setMentorToggle = useSetRecoilState(mentorToggleState);

  const result: any = {};

  result["closeToggle"] = () => {
    setBackgroundToggle(false);
    setMentorToggle(false);
  };

  return result;
}

export default customHooks;
