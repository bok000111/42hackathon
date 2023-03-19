import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { axiosGetMatchList } from "../../api/axios";
import { myInfoState, OpenedSlotsState } from "../../Atom";
import { ISlotInfo } from "../../interface";
import { HeaderContainer } from "../../Styles";
import { getMonday } from "../ScheduleModal.tsx/ScheduleHooks";
import createMatchIndex from "./createMatchIndex";

function calDate(start: number) {
  const temp = new Date(start * 1000);
  return temp;
}

function convertData(slots: ISlotInfo[], login: string) {
  return slots.map((slot) => ({
    type: slot.mentor.login === login ? "mentor" : "mentee",
    subject: slot.subject,
    time: calDate(slot.start),
    id: slot.id,
    target:
      slot.mentor.login === login
        ? slot.mentees.split(" ")
        : [slot.mentor.login],
  }));
}

const MatchList = () => {
  const { login } = useRecoilValue(myInfoState);
  const slots = useRecoilValue(OpenedSlotsState).filter(
    (slot) =>
      (slot.mentor.login === login && slot.mentees !== "") ||
      slot.mentees.includes(login)
  );
  const data = convertData(slots, login);
  return (
    <MatchListContainer>
      <HeaderContainer>Mentor</HeaderContainer>
      <MatchInfoContainer>
        {data.map((info, idx) => createMatchIndex(info, idx, data.length))}
      </MatchInfoContainer>
    </MatchListContainer>
  );
};

const MatchInfoContainer = styled.div`
  margin-top: 15px;
  padding-left: 10px;
  width: 100%;
  height: 200px;
  overflow-y: auto;
  font-size: 1rem;
  & > div {
    margin-top: 5px;
  }

  & > div:last-child {
    margin-bottom: 15px;
  }
`;

const MatchListContainer = styled.div`
  width: 360px;
  height: 270px;
  background: white;
  overflow: hidden;
  margin-top: 30px;
`;

export default MatchList;
