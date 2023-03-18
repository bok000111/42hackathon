import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { axiosGetAllSlots } from "../../api/axios";
import {
  CurrentCircleInfoState,
  FilterInfoState,
  myInfoState,
  OpenedSlotsState,
} from "../../Atom";
import { circleInfo } from "../../hooks";
import { IMentorInfo, ISlotInfo } from "../../interface";
import MentorCard from "./MentorCard";

function convertData(list: ISlotInfo[], login: string) {
  const map = list.reduce((acc: any, cur: ISlotInfo) => {
    if (cur.mentor.login !== login) {
      if (!acc[cur.mentor.login]) {
        acc[cur.mentor.login] = {};
        acc[cur.mentor.login].intra = cur.mentor.login;
        acc[cur.mentor.login].subjects = [];
        acc[cur.mentor.login].image = cur.mentor.image;
        acc[cur.mentor.login].level = cur.mentor.level;
        acc[cur.mentor.login].good = cur.mentor.total_feedback;
        acc[cur.mentor.login].coalition = cur.mentor.coa;
      }
      acc[cur.mentor.login].subjects.push(cur.subject);
    }
    return acc;
  }, {});

  return Object.keys(map).map((name) => ({
    intra: name,
    ...map[name],
  }));
}

function filteringList(
  list: any,
  curCircle: string,
  filter: string
): IMentorInfo[] {
  if (curCircle === "ALL" && !filter) return list;
  if (filter) {
    return list.filter(
      (info: any) =>
        info.subjects.join("!@#$%").includes(filter) ||
        info.intra.includes(filter)
    );
  }
  return list.filter(
    (info: any) =>
      info.subjects.filter((subject: string) =>
        circleInfo[curCircle].includes(subject)
      ).length
  );
}

const MentorList = () => {
  const [slotList, setSlotList] = useRecoilState(OpenedSlotsState);
  const { token, login } = useRecoilValue(myInfoState);
  const currentCircleInfo = useRecoilValue(CurrentCircleInfoState);
  const filterInfo = useRecoilValue(FilterInfoState);
  console.log(circleInfo);
  console.log(currentCircleInfo);
  console.log(convertData(slotList, login));
  useEffect(() => {
    async function getData() {
      const response = await axiosGetAllSlots(
        token || localStorage.getItem("token")
      );
      setSlotList(response.slots);
    }
    getData();
  }, []);
  return (
    <MentorListContainer>
      {slotList &&
        filteringList(
          convertData(slotList, login),
          currentCircleInfo,
          filterInfo
        ).map((info, idx) => (
          <MentoCardContainer key={idx}>
            <MentorCard info={info} />
          </MentoCardContainer>
        ))}
    </MentorListContainer>
  );
};

const MentoCardContainer = styled.div`
  width: 100%;
  height: 355px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MentorListContainer = styled.div`
  width: 100%;
  height: 710px;
  background: var(--lightgray-color);
  margin-top: 30px;
  border-top-left-radius: 20px;
  box-shadow: 0px 0px 200px 5px rgba(0, 0, 0, 0.33);
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  justify-items: stretch;
`;

export default MentorList;
