import styled from "@emotion/styled";
import Background from "../components/common/Background";
import MainComponent from "../components/MainComponent";
import { CommonContainer, Logo } from "../Styles";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  backgorundToggleState,
  CurrentMentorInfoState,
  MenteeScheduleToggleState,
  MentorInfoBackToggleState,
  MentorInfoToggleState,
  mentorToggleState,
  ScheduleBackToggleState,
  ScheduleToggleState,
} from "../Atom";
import customHooks from "../hooks";
import MentorModal from "../components/MentorModal.tsx/MentorModal";
import ScheduleModal from "../components/ScheduleModal.tsx/ScheduleModal";
import MentorInfoModal from "../components/MentorInfoModal/MentorInfoModal";
import MenteeSchedule from "../components/ScheduleModal.tsx/MenteeSchedule";

const MainPage = () => {
  const backgroundToggle = useRecoilValue(backgorundToggleState);
  const mentorToggle = useRecoilValue(mentorToggleState);
  const scheduleToggle = useRecoilValue(ScheduleToggleState);
  const scheduleBackToggle = useRecoilValue(ScheduleBackToggleState);
  const mentorInfoToggle = useRecoilValue(MentorInfoToggleState);
  const mentorInfoBackToggle = useRecoilValue(MentorInfoBackToggleState);
  const currentMentorInfo = useRecoilValue(CurrentMentorInfoState);
  const menteeScheduleToggle = useRecoilValue(MenteeScheduleToggleState);

  const { closeSetMentoring, closeScheduleBack, closeMentorInfo } =
    customHooks();
  const scheduleBackOff = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeScheduleBack();
  };
  return (
    <CommonContainer>
      <MainComponent />
      <Background />
      <Logo width={190} height={130} />
      {mentorToggle && <MentorModal />}
      {backgroundToggle && <BackgroundContainer onClick={closeSetMentoring} />}
      {scheduleToggle && <ScheduleModal />}
      {scheduleBackToggle && <BackgroundContainer onClick={scheduleBackOff} />}
      {menteeScheduleToggle && <MenteeSchedule />}
      {mentorInfoToggle && <MentorInfoModal info={currentMentorInfo} />}
      {mentorInfoBackToggle && (
        <BackgroundContainer onClick={closeMentorInfo} />
      )}
    </CommonContainer>
  );
};

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
`;

export default MainPage;
