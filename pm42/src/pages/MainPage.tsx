import styled from "@emotion/styled";
import Background from "../components/common/Background";
import MainComponent from "../components/MainComponent";
import { CommonContainer, Logo } from "../Styles";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  AlertBackToggleState,
  AlertMessageState,
  AlertToggleState,
  backgroundToggleState,
  CurrentMentorInfoState,
  EndIndexState,
  FeedbackBackToggleState,
  FeedbackToggleState,
  MenteeNumberState,
  MenteeScheduleBackToggleState,
  MenteeScheduleToggleState,
  MentorInfoBackToggleState,
  MentorInfoToggleState,
  mentorToggleState,
  MyInfoBackToggleState,
  MyInfoToggleState,
  RecordsBackToggle,
  RecordsToggle,
  ScheduleBackToggleState,
  ScheduleToggleState,
  SelectedSubjectState,
  StartIndexState,
  SubjectDescriptionState,
} from "../Atom";
import customHooks from "../hooks";
import MentorModal from "../components/MentorModal.tsx/MentorModal";
import ScheduleModal from "../components/ScheduleModal.tsx/ScheduleModal";
import MentorInfoModal from "../components/MentorInfoModal/MentorInfoModal";
import MenteeSchedule from "../components/ScheduleModal.tsx/MenteeSchedule";
import MyInfoModal from "../components/MyInfo/MyInfoModal";
import Alert from "../components/common/Alert";
import Feedback from "../components/Feedback/Feedback";
import RecordsModal from "../components/Records/RecordsModal";

const MainPage = () => {
  const backgroundToggle = useRecoilValue(backgroundToggleState);
  const mentorToggle = useRecoilValue(mentorToggleState);
  const scheduleToggle = useRecoilValue(ScheduleToggleState);
  const scheduleBackToggle = useRecoilValue(ScheduleBackToggleState);
  const mentorInfoToggle = useRecoilValue(MentorInfoToggleState);
  const mentorInfoBackToggle = useRecoilValue(MentorInfoBackToggleState);
  const currentMentorInfo = useRecoilValue(CurrentMentorInfoState);
  const menteeScheduleToggle = useRecoilValue(MenteeScheduleToggleState);
  const menteeScheduleBackToggle = useRecoilValue(
    MenteeScheduleBackToggleState
  );
  const alertToggle = useRecoilValue(AlertToggleState);
  const alertBackToggle = useRecoilValue(AlertBackToggleState);
  const myInfoToggle = useRecoilValue(MyInfoToggleState);
  const myInfoBackToggle = useRecoilValue(MyInfoBackToggleState);
  const alertMessage = useRecoilValue(AlertMessageState);
  const feedbackToggle = useRecoilValue(FeedbackToggleState);
  const feedbackBackToggle = useRecoilValue(FeedbackBackToggleState);
  const recordsToggle = useRecoilValue(RecordsToggle);
  const recordsBackToggle = useRecoilValue(RecordsBackToggle);
  const setSubject = useSetRecoilState(SelectedSubjectState);
  const setDescription = useSetRecoilState(SubjectDescriptionState);
  const setMenteeNumber = useSetRecoilState(MenteeNumberState);
  const setStart = useSetRecoilState(StartIndexState);
  const setEnd = useSetRecoilState(EndIndexState);

  const {
    closeSetMentoring,
    closeScheduleBack,
    closeMentorInfo,
    closeMenteeSchedule,
    closeMyInfoModal,
    closeAlert,
    closeRecords,
  } = customHooks();
  const scheduleBackOff = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeScheduleBack();
    setSubject("");
    setDescription("");
    setMenteeNumber(1);
    setStart(-1);
    setEnd(-1);
  };
  return (
    <CommonContainer>
      <MainComponent />
      <Background />
      <Logo width={190} height={130} />
      {mentorToggle && <MentorModal />}
      {backgroundToggle && (
        <BackgroundContainer zIndex={2} onClick={closeSetMentoring} />
      )}
      {menteeScheduleBackToggle && (
        <BackgroundContainer zIndex={3} onClick={closeMenteeSchedule} />
      )}
      {scheduleToggle && <ScheduleModal />}
      {scheduleBackToggle && (
        <BackgroundContainer zIndex={3} onClick={scheduleBackOff} />
      )}
      {menteeScheduleToggle && <MenteeSchedule />}
      {mentorInfoToggle && <MentorInfoModal info={currentMentorInfo} />}
      {mentorInfoBackToggle && (
        <BackgroundContainer zIndex={2} onClick={closeMentorInfo} />
      )}
      {myInfoBackToggle && (
        <BackgroundContainer zIndex={2} onClick={closeMyInfoModal} />
      )}
      {myInfoToggle && <MyInfoModal />}
      {alertBackToggle && (
        <BackgroundContainer onClick={closeAlert} zIndex={4} />
      )}
      {alertToggle && <Alert msg={alertMessage} />}
      {feedbackBackToggle && <BackgroundContainer zIndex={2} />}
      {feedbackToggle && <Feedback />}
      {recordsToggle && <RecordsModal />}
      {recordsBackToggle && (
        <BackgroundContainer zIndex={3} onClick={closeRecords} />
      )}
    </CommonContainer>
  );
};

const BackgroundContainer = styled.div<{ zIndex: number }>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: ${({ zIndex }) => zIndex};
`;

export default MainPage;
