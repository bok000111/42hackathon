import styled from "@emotion/styled";
import React from "react";
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
}): JSX.Element => (
  <div>
    You will teach {info.subject} to{" "}
    {info.target.length > 1 ? (
      <SpanContainer>
        {info.target.length} cadets
        <CadetInfoContainer idx={idx} total={total} count={info.target.length}>
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
  </div>
);

const MenteeInfo = ({ info }: { info: IMentor }) => (
  <div>
    You will learn {info.subject} from{" "}
    <NameContainer target="_blank" href={createLink(info.target[0])}>
      {info.target[0]}
    </NameContainer>{" "}
    in {createTimeStamp(info.time)}.
  </div>
);

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
