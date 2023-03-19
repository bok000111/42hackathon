import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { axiosRemoveSlot } from "../../api/axios";
import {
  AlertMessageState,
  myInfoState,
  OpenedSlotsState,
  ScheduleBackToggleState,
  ScheduleToggleState,
  SelectedSubjectState,
  SubjectDescriptionState,
} from "../../Atom";
import customHooks, { convertToLectureTime } from "../../hooks";
import { ITimeData } from "../../interface";
import { getMonday } from "../ScheduleModal.tsx/ScheduleHooks";

function calDate(start: number) {
  const mon = getMonday();
  mon.setMinutes(start * 15);
  return `${mon.getFullYear() % 100}.${
    mon.getMonth() < 9 ? "0" + (mon.getMonth() + 1) : mon.getMonth()
  }.${mon.getDate() < 10 ? "0" + mon.getDate() : mon.getDate()}`;
}

const MentorRightSide = ({ data }: { data: ITimeData[] }) => {
  const slots = useRecoilValue(OpenedSlotsState);
  const myInfo = useRecoilValue(myInfoState);
  const myData = slots.filter((data) => data.mentor.login === myInfo.login);
  const setScheduleToggle = useSetRecoilState(ScheduleToggleState);
  const setScheduleBackToggle = useSetRecoilState(ScheduleBackToggleState);
  const subject = useRecoilValue(SelectedSubjectState);
  const description = useRecoilValue(SubjectDescriptionState);
  const setSlots = useSetRecoilState(OpenedSlotsState);
  const setAlertMessage = useSetRecoilState(AlertMessageState);

  const { openAlert } = customHooks();

  const addSchedule = () => {
    if (subject.length === 0) {
      setAlertMessage("Choose Subject!");
      openAlert();
      return;
    }
    if (description.length === 0) {
      setAlertMessage("Write Description!");
      openAlert();
      return;
    }
    setScheduleBackToggle(true);
    setScheduleToggle(true);
  };

  const onClickRemove = (id: number) => {
    async function getData() {
      const { slots } = await axiosRemoveSlot(myInfo.token, id);
      setSlots(slots);
    }
    getData();
  };

  return (
    <>
      <HeaderContainer>Schedule</HeaderContainer>
      <SubHeaderContainer>
        <SubHeaderLeftContainer>
          <span>Choose time</span>
          <AddButton onClick={addSchedule} />
        </SubHeaderLeftContainer>
        <CountContainer>{myData.length}건</CountContainer>
      </SubHeaderContainer>
      <ReservationContainer>
        <ReserveFrame>
          <Data val={10}>Date</Data>
          <Data val={30}>Subject</Data>
          <Data val={10}>Cur</Data>
          <Data val={30}>Time</Data>
          <Data val={5}></Data>
        </ReserveFrame>
        <ReserveDataContainer>
          {myData.map((info, idx) => (
            <ReserveData key={idx}>
              <Data val={10}>{calDate(info.start)}</Data>
              <Data val={30}>{info.subject}</Data>
              <Data val={10}>
                [{info.curr} / {info.max}]
              </Data>
              <Data val={30}>
                {convertToLectureTime(info.start, info.end).split(" ")[0]}
                <br />
                {convertToLectureTime(info.start, info.end)
                  .split(" ")
                  .slice(1)
                  .join(" ")}
              </Data>
              <Data val={5}>
                <RemoveButton onClick={() => onClickRemove(info.id)} />
              </Data>
            </ReserveData>
          ))}
        </ReserveDataContainer>
      </ReservationContainer>
      <Button>Close</Button>
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
  justify-content: space-around;
  align-items: center;
  background: var(--main-color);
  color: white;
  height: 35px;
`;
const ReserveData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

const ReserveDataContainer = styled.div`
  width: 100%;
  height: 360px;
  overflow: auto;
  font-size: 0.9rem;
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
