import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  OpenedSlotsState,
  ScheduleBackToggleState,
  ScheduleToggleState,
  SelectedSubjectState,
  SubjectDescriptionState,
} from "../../Atom";
import { ITimeData } from "../../interface";
import { getMonday } from "../ScheduleModal.tsx/ScheduleHooks";

function calDate(start: number) {
  const mon = getMonday();
  mon.setMinutes(start * 15);
  return `${mon.getFullYear() % 100}.${
    mon.getMonth() < 9 ? "0" + (mon.getMonth() + 1) : mon.getMonth()
  }.${mon.getDate() < 10 ? "0" + mon.getDate() : mon.getDate()}`;
}

function calTime(start: number, end: number) {
  const mon = getMonday;
}

const MentorRightSide = ({ data }: { data: ITimeData[] }) => {
  const slots = useRecoilValue(OpenedSlotsState);
  const setScheduleToggle = useSetRecoilState(ScheduleToggleState);
  const setScheduleBackToggle = useSetRecoilState(ScheduleBackToggleState);
  const subject = useRecoilValue(SelectedSubjectState);
  const description = useRecoilValue(SubjectDescriptionState);
  const addSchedule = () => {
    if (subject.length === 0) {
      alert("subject 골라주세요");
      return;
    }
    if (description.length === 0) {
      alert("description 작성해주세요");
      return;
    }
    setScheduleBackToggle(true);
    setScheduleToggle(true);
  };

  console.log("slots", slots);
  return (
    <>
      <HeaderContainer>Schedule</HeaderContainer>
      <SubHeaderContainer>
        <SubHeaderLeftContainer>
          <span>Choose time</span>
          <AddButton onClick={addSchedule} />
        </SubHeaderLeftContainer>
        <CountContainer>{data.length}건</CountContainer>
      </SubHeaderContainer>
      <ReservationContainer>
        <ReserveFrame>
          <Data val={20}>Date</Data>
          <Data val={35}>Subject</Data>
          <Data val={5}>Max</Data>
          <Data val={30}>Time</Data>
          <Data val={5}></Data>
        </ReserveFrame>
        <ReserveDataContainer>
          {slots
            .filter(
              (slot) => slot.mentor.login === localStorage.getItem("login")
            )
            .map((info, idx) => (
              <ReserveData key={idx}>
                <Data val={20}>{calDate(info.start)}</Data>
                <Data val={35}>{info.subject}</Data>
                <Data val={5}>{info.max}</Data>
                <Data val={30}>{info.time}</Data>
                <Data val={5}>
                  <RemoveButton />
                </Data>
              </ReserveData>
            ))}
        </ReserveDataContainer>
      </ReservationContainer>
      <Button>Submit</Button>
    </>
  );
};

const CountContainer = styled.div`
  margin-right: 5px;
`;

const SubHeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  width: 350px;
  height: 70px;
  background: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 45px;
  margin-left: 100px;
  font-size: 2rem;
  font-weight: bold;
  color: var(--white-color);
  cursor: pointer;
`;

const RemoveButton = styled.div`
  width: 25px;
  height: 25px;
  background-image: url("/assets/remove.png");
  background-size: 100% 100%;
  cursor: pointer;
`;

const Data = styled.div<{ val: number }>`
  width: ${({ val }) => `${val}%`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReserveFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--main-color);
  color: white;
  height: 35px;
`;
const ReserveData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 1.2rem;
`;

const ReserveDataContainer = styled.div`
  width: 100%;
  height: 360px;
  overflow: auto;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`;

const ReservationContainer = styled.div`
  margin-right: 25px;
  border-radius: 10px;
  margin-top: 15px;
  height: 400px;
  width: 550px;
  overflow: hidden;
  border: 1px solid var(--main-color);
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`;

const AddButton = styled.div`
  width: 25px;
  height: 25px;
  background-image: url("/assets/addButton.png");
  background-size: 100% 100%;
  margin-left: 15px;
  cursor: pointer;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--main-color);
  margin-top: 35px;
  padding-right: 25px;
`;

const HeaderContainer = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--main-color);
  margin-top: 10px;
`;

export default MentorRightSide;
