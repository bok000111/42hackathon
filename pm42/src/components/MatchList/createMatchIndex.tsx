import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { axiosJoinLecture, axiosRemoveSlot } from "../../api/axios";
import { myInfoState, OpenedSlotsState } from "../../Atom";
import { IMentor } from "../../interface";

const createLink = (name: string) =>
  `https://profile.intra.42.fr/users/${name}`;

const createTimeStamp = (time: Date) => {
  let result = Math.floor((time.getTime() - new Date().getTime()) / 1000 / 60);

  if (result < 60) return `${result} minutes`;
  result = Math.floor(result / 60);
  if (result < 24) return `${result} hours`;
  result = Math.floor(result / 24);
  return result === 1 ? `${result} day` : `${result} days`;
};

const MentorInfo = ({
  info,
  idx,
  total,
}: {
  info: IMentor;
  idx: number;
  total: number;
}): JSX.Element => {
  const setSlots = useSetRecoilState(OpenedSlotsState);
  const { token } = useRecoilValue(myInfoState);
  const onClickCancel = () => {
    getData();
  };
  async function getData() {
    const { slots } = await axiosRemoveSlot(token, info.id);
    setSlots(slots);
  }
  return (
    <div>
      You will teach {info.subject} to{" "}
      {info.target.length > 1 ? (
        <SpanContainer>
          {info.target.length} cadets
          <CadetInfoContainer
            idx={idx}
            total={total}
            count={info.target.length}
          >
            {info.target.map((name) => (
              <CadetInfo key={name}>{name}</CadetInfo>
            ))}
          </CadetInfoContainer>
        </SpanContainer>
      ) : (
        <NameContainer target="_blank" href={createLink(info.target[0])}>
          {info.target[0]}
        </NameContainer>
      )}{" "}
      in {createTimeStamp(info.time)}.
      <CancelButton onClick={onClickCancel} />
    </div>
  );
};

const CancelButton = styled.div`
  width: 15px;
  height: 15px;
  margin-left: 10px;
  cursor: pointer;
  background-image: url("/static/assets/cancelButton.png");
  background-size: 100% 100%;
  display: inline-block;
`;

//const response = await axiosJoinLecture(
//  token,
//  list[selectedIndex].info[selectedLectureIndex].id,
//  login
//);
//setSlots(response.data.slots);

const MenteeInfo = ({ info }: { info: IMentor }) => {
  const { token, login } = useRecoilValue(myInfoState);
  const setSlots = useSetRecoilState(OpenedSlotsState);
  const onClickCancel = () => {
    getData();
  };
  async function getData() {
    const response = await axiosJoinLecture(token, info.id, login);
    setSlots(response.data.slots);
  }
  return (
    <div>
      You will learn {info.subject} from{" "}
      <NameContainer target="_blank" href={createLink(info.target[0])}>
        {info.target[0]}
      </NameContainer>{" "}
      in {createTimeStamp(info.time)}. <CancelButton onClick={onClickCancel} />
    </div>
  );
};

export default function createMatchIndex(
  info: IMentor,
  idx: number,
  total: number
) {
  return info.type === "mentor" ? (
    <MentorInfo info={info} idx={idx} total={total} key={info.time.getTime()} />
  ) : (
    <MenteeInfo info={info} key={info.time.getTime()} />
  );
}

const SpanContainer = styled.span`
  color: var(--main-color);
  font-weight: bold;
  cursor: pointer;
  position: relative;
  &:hover {
    & > div {
      visibility: visible;
    }
  }
`;

const CadetInfo = styled.div`
  color: white;
`;

const CadetInfoContainer = styled.div<{
  idx: number;
  total: number;
  count: number;
}>`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  left: 0;
  top: ${({ idx, total, count }) =>
    idx > 3 && total - idx <= 3 ? `-${count * 15 + 13}px` : "100%"};
  z-index: 2;
  visibility: hidden;
  padding: 5px;
`;

const NameContainer = styled.a`
  color: var(--main-color) !important;
  font-weight: bold;
`;
