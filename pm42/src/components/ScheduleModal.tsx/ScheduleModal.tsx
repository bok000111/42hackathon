import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { axiosAddSlot } from "../../api/axios";
import {
  EndIndexState,
  MenteeNumberState,
  myInfoState,
  OpenedSlotsState,
  SelectedSubjectState,
  StartIndexState,
  SubjectDescriptionState,
} from "../../Atom";
import customHooks from "../../hooks";
import {
  checkTimeOver,
  createDateInfo,
  getDayInfoList,
  getMonday,
  getTimeStamp,
  getWeekInfo,
} from "./ScheduleHooks";
import Select from "./Select";

const calIdx = (idx: number) => 96 * (idx % 7) + Math.floor(idx / 7);

const ScheduleModal = () => {
  const ref = useRef(null);
  const mon = getMonday();
  const [start, setStart] = useRecoilState(StartIndexState);
  const [end, setEnd] = useRecoilState(EndIndexState);
  const [subject, setSubject] = useRecoilState(SelectedSubjectState);
  const [description, setDescription] = useRecoilState(SubjectDescriptionState);
  const [menteeNumber, setMenteeNumber] = useRecoilState(MenteeNumberState);
  const { token, login } = useRecoilValue(myInfoState);
  const [slots, setSlots] = useRecoilState(OpenedSlotsState);
  const { closeScheduleBack } = customHooks();
  const myData = slots.filter((data) => data.mentor.login === login);

  const onConfirm = () => {
    if (start === -1 || end === -1) {
      alert("select time");
      return;
    }
    async function getData() {
      const response = await axiosAddSlot(
        start,
        end,
        subject,
        login,
        menteeNumber,
        description,
        token || localStorage.getItem("token")
      );
      setSubject("");
      setDescription("");
      setMenteeNumber(1);
      setStart(-1);
      setEnd(-1);
      setSlots(response.slots);
    }
    getData();
    closeScheduleBack();
  };
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    if (
      e.currentTarget.classList.contains("disabled") ||
      e.currentTarget.classList.contains("onReserved")
    )
      return;
    if (start === -1) {
      e.currentTarget.classList.add("blockActive");
      setStart(Number(e.currentTarget.dataset.idx));
      return;
    }
    if (Number(e.currentTarget.dataset.idx) === start) {
      e.currentTarget.classList.remove("blockActive");
      setStart(-1);
      const target = e.currentTarget.parentElement as HTMLElement;
      target.childNodes.forEach((node: any) => {
        node.classList.remove("blockActive");
      });
      return;
    }
    const i = Math.min(start, Number(e.currentTarget.dataset.idx)),
      j = Math.max(start, Number(e.currentTarget.dataset.idx));

    const target = e.currentTarget.parentElement as HTMLElement;
    let flag = 0;
    target.childNodes.forEach((node: any) => {
      const t = Number(node.dataset.idx);
      if (t >= i && t <= j && node.classList.contains("onReserved")) flag = 1;
    });
    if (flag) {
      alert("중간에 뭐 있음");
      return;
    }
    target.childNodes.forEach((node: any) => {
      const t = Number(node.dataset.idx);
      if (t >= i && t <= j) node.classList.add("blockActive");
      else node.classList.remove("blockActive");
    });
    setStart(i);
    setEnd(j);
  };

  useEffect(() => {
    const target = ref.current as unknown as HTMLElement;
    const onReserved = myData.map((info) => [info.start, info.end]);
    target.childNodes.forEach((node: any) => {
      const t = Number(node.dataset.idx);
      onReserved.forEach(([x, y]) => {
        if (t >= x && t <= y) node.classList.add("onReserved");
      });
    });
    if (start !== -1 && end !== -1) {
      const onReserved = myData.map((info) => [info.start, info.end]);
      target.childNodes.forEach((node: any) => {
        const t = Number(node.dataset.idx);
        onReserved.forEach(([x, y]) => {
          if (t >= x && t <= y) node.classList.add("onReserved");
        });
        if (t >= start && t <= end) node.classList.add("blockActive");
        else node.classList.remove("blockActive");
      });
    }
    //return () => {
    //  setStart(-1);
    //  setEnd(-1);
    //  setSubject("");
    //  setDescription("");
    //  setMenteeNumber(1);
    //};
  }, []);
  return (
    <ScheduleModalContainer>
      <InfoContainer>
        <WeekInfo>{getWeekInfo(getMonday())}</WeekInfo>
        <ButtonContainer>
          <MemberIcon />
          <Select />
          <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
        </ButtonContainer>
      </InfoContainer>
      <CalendarContainer>
        <DayInfoContainer>
          {getDayInfoList().map((info, idx) => (
            <DayInfo key={idx}>{info}</DayInfo>
          ))}
        </DayInfoContainer>
        <TimeSectionContainer>
          <TimeInfoContainer>
            <TimeStampContainer>
              {new Array(96).fill(0).map((_, idx) => (
                <TimeStamp>{getTimeStamp(mon, idx * 15)}</TimeStamp>
              ))}
            </TimeStampContainer>
          </TimeInfoContainer>
          <TimeBlockContainer ref={ref}>
            {new Array(96 * 7).fill(0).map((_, idx) => {
              const i = calIdx(idx);
              return (
                <TimeBlock
                  key={idx}
                  onClick={onClick}
                  className={`${
                    Math.floor(idx / 7) % 2 === 0 ? "odd" : "even"
                  } ${checkTimeOver(createDateInfo(mon, i)) ? "" : "disabled"}`}
                  data-idx={i}
                >
                  {idx}
                </TimeBlock>
              );
            })}
          </TimeBlockContainer>
        </TimeSectionContainer>
      </CalendarContainer>
    </ScheduleModalContainer>
  );
};

const TimeBlock = styled.div`
  height: 40px;
  border-right: 1px solid var(--gray-color);
  &.odd {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &.even {
    border-bottom: 1px solid var(--gray-color);
  }
  &.disabled {
    background: var(--lightgray-color) !important;
    cursor: not-allowed;
  }
  &.onReserved {
    background: pink;
    cursor: not-allowed;
  }
  &.active {
    background: var(--sub-color);
  }
  &.blockActive {
    background: var(--sub-color);
  }
  cursor: grab;
`;

const TimeBlockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: 87.5%;
`;

const TimeStampContainer = styled.div`
  width: 100%;
`;

const TimeSectionContainer = styled.div`
  width: 100%;
  height: 546px;
  display: flex;
  overflow-y: scroll;
`;

const TimeStamp = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--gray-color);
  color: var(--main-color);
  cursor: grab;
  &.disabled {
    background: var(--lightgray-color);
    cursor: not-allowed;
  }

  &:nth-child(2n) {
    border-bottom: 1px solid var(--gray-color);
  }
  &:nth-child(2n + 1) {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

const TimeInfo = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  &:nth-child(2n + 1) {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &:nth-child(2n) {
    border-bottom: 1px solid var(--gray-color);
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

const TimeInfoContainer = styled.div`
  display: flex;
  height: 545px;
  width: 12.5%;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 5px;
  }
`;

const DayInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 1.2rem;
  font-weight: bold;
  width: 12.5%;
  &:last-of-type {
    width: 2%;
  }
`;

const DayInfoContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-color);
`;

const CalendarContainer = styled.div`
  width: 900px;
  height: 600px;
  border: 1px solid var(--main-color);
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
`;

const ConfirmButton = styled.div`
  width: 110px;
  height: 45px;
  background: var(--main-color);
  border-radius: 10px;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;
`;

const MemberIcon = styled.div`
  width: 30px;
  height: 30px;
  background: url("/assets/member.png");
  background-size: 100% 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const WeekInfo = styled.div`
  color: var(--main-color);
  font-size: 2.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  align-items: center;
  margin: 50px auto;
`;

const ScheduleModalContainer = styled.div`
  width: 1000px;
  height: 800px;
  position: absolute;
  border-radius: 20px;
  left: calc(50% - 500px);
  top: calc(50% - 400px);
  background: var(--white-color);
  z-index: 4;
`;

export default ScheduleModal;
