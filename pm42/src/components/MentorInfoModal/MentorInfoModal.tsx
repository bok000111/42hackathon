import styled from "@emotion/styled";
import { IMentorInfo, ISlotInfo } from "../../interface";
import { useRecoilValue } from "recoil";
import { OpenedSlotsState } from "../../Atom";
import MentorInfoCard from "./MentorInfoCard";
import React, { useState } from "react";

function convertToMentoringList(list: ISlotInfo[], mentorName: string) {
  const map = list
    .filter((info) => info.mentor.login === mentorName)
    .reduce((acc: any, info) => {
      if (!acc[info.subject]) {
        acc[info.subject] = {};
        acc[info.subject].info = [];
      }
      const temp = {
        cur: info.curr,
        max: info.max,
        description: info.description,
        start: info.start,
        end: info.end,
      };
      acc[info.subject].info.push(temp);
      return acc;
    }, {});
  return Object.keys(map).map((subject) => ({
    subject: subject,
    info: map[subject].info,
  }));
}

function convertToLectureTime(start: number, end: number) {
  const s = new Date(start * 1000),
    e = new Date(end * 1000);
  const sM = s.getMonth() + 1,
    sD = s.getDate();
  const sH = s.getHours(),
    sMin = s.getMinutes();
  const eH = e.getHours(),
    eMin = e.getMinutes();
  return `${sM < 10 ? "0" + sM : sM}.${sD < 10 ? "0" + sD : sD} ${
    sH < 12 ? "AM" : "PM"
  } ${sH % 12 === 0 ? 12 : sH % 12 < 0 ? "0" + (sH % 12) : sH % 12}:${
    sM < 10 ? "0" + sMin : sMin
  } ~ ${eH < 12 ? "AM" : "PM"} ${
    eH % 12 === 0 ? 12 : eH % 12 < 0 ? "0" + (eH % 12) : eH % 12
  }:${eMin < 10 ? "0" + eMin : eMin}`;
}

const MentorInfoModal = ({ info }: { info: IMentorInfo }) => {
  const slotInfo = useRecoilValue(OpenedSlotsState);
  const list = convertToMentoringList(slotInfo, info.intra);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLectureIndex, setSelectedLectureIndex] = useState(0);
  console.log(list);
  const onClickSubject = (idx: number) => {
    setSelectedIndex(idx);
  };
  const onClickLectureIndex = (idx: number) => {
    setSelectedLectureIndex(idx);
  };
  return (
    <MentorInfoModalContainer>
      <Container>
        <MentorInfoCard info={info}></MentorInfoCard>
      </Container>
      <Container>
        <SubjectContainer>
          {convertToMentoringList(slotInfo, info.intra).map((info, idx) => (
            <Subject
              className={idx === selectedIndex ? "active" : ""}
              onClick={() => onClickSubject(idx)}
            >
              <SubjectName>{info.subject}</SubjectName>
              <SubjectIconsContainer>
                <SubjectIcons
                  className="subjectIcon"
                  url="/assets/calendar.png"
                />
              </SubjectIconsContainer>
            </Subject>
          ))}
        </SubjectContainer>
        <DescriptionContainer>
          <DescriptionNav>
            <DescriptionHeader>Description</DescriptionHeader>
          </DescriptionNav>
          <DescriptionInfo>
            <DateInfo>
              {convertToLectureTime(
                list[selectedIndex].info[selectedLectureIndex].start,
                list[selectedIndex].info[selectedLectureIndex].end
              )}
            </DateInfo>
            <IndexInfo>
              {list[selectedIndex].info.map((_: any, idx: any) => (
                <Index
                  onClick={() => setSelectedLectureIndex(idx)}
                  className={idx === selectedLectureIndex ? "indexActive" : ""}
                >
                  {idx + 1}
                </Index>
              ))}
            </IndexInfo>
          </DescriptionInfo>
          <DescriptionBox>
            {list[selectedIndex].info[selectedLectureIndex].description}
          </DescriptionBox>
        </DescriptionContainer>
        <SubjectInfo>
          <SubjectHeader>
            <SubjectTitle>{list[selectedIndex].subject}</SubjectTitle>
            <SubjectStudentCount>
              <StudentsIcon />[
              {list[selectedIndex].info[selectedLectureIndex].cur} /{" "}
              {list[selectedIndex].info[selectedLectureIndex].max}]
            </SubjectStudentCount>
          </SubjectHeader>
          <SubjectTimeStamp>
            {convertToLectureTime(
              list[selectedIndex].info[selectedLectureIndex].start,
              list[selectedIndex].info[selectedLectureIndex].end
            )}
          </SubjectTimeStamp>
        </SubjectInfo>
        <Button>Select</Button>
      </Container>
    </MentorInfoModalContainer>
  );
};

const SubjectTimeStamp = styled.div`
  font-size: 1.5rem;
  color: var(--main-color);
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 50px;
`;

const SubjectHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StudentsIcon = styled.div`
  width: 25px;
  height: 25px;
  background-image: url("/assets/member.png");
  background-size: 100% 100%;
`;

const SubjectStudentCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: var(--main-color);
  font-weight: bold;
  & > div:first-of-type {
    margin-right: 10px;
  }
`;

const SubjectTitle = styled.div`
  color: var(--main-color);
  font-size: 2rem;
  font-weight: bold;
  max-width: 50%;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Index = styled.div`
  width: 35px;
  height: 27px;
  border-left: 1px solid var(--main-color);
  border-right: 1px solid var(--main-color);
  border-top: 1px solid var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-color);
  margin-left: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  &.indexActive {
    background: var(--main-color);
    color: var(--white-color);
  }
`;

const DateInfo = styled.div`
  font-weight: 1.2rem;
  color: var(--main-color);
`;
const IndexInfo = styled.div`
  display: flex;
`;

const DescriptionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 10px;
`;

const DescriptionBox = styled.div`
  height: 70%;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  padding: 10px;
  overflow-y: auto;
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
const DescriptionNav = styled.div``;
const DescriptionHeader = styled.div`
  color: var(--main-color);
  font-size: 1.5rem;
  font-weight: bold;
`;

const DescriptionContainer = styled.div`
  width: 80%;
  height: 30%;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
`;

const SubjectIcons = styled.div<{ url: string }>`
  width: 25px;
  height: 25px;
  background-image: url(${({ url }) => url});
  background-size: 100% 100%;
  margin-left: 15px;
  cursor: pointer;
  position: relative;
`;

const SubjectIconsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SubjectName = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  word-break: break-all;
  transition: 0.3s;
`;

const Subject = styled.div`
  width: 90%;
  height: 45px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  color: var(--main-color);
  padding-right: 10px;
  cursor: pointer;
  & > .subjectIcon {
    background-image: url("/assets/calendar.png");
  }
  &.active {
    background: var(--main-color);
    color: var(--white-color);
    & .subjectIcon {
      background-image: url("/assets/selectedCalendar.png");
    }
  }
`;

const SubjectContainer = styled.div`
  width: 80%;
  height: 20%;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 40px;
  overflow-y: auto;
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

const SubjectInfo = styled.div`
  width: 80%;
  height: 15%;
  margin: 0 auto;
  margin-bottom: 50px;
`;
const Button = styled.div`
  border-radius: 10px;
  background: var(--main-color);
  color: var(--white-color);
  font-size: 2rem;
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  &:last-of-type {
    display: block;
  }
`;

const MentorInfoModalContainer = styled.div`
  width: 800px;
  height: 800px;
  background: var(--white-color);
  position: absolute;
  z-index: 3;
  border-radius: 10px;
  left: calc(50% - 400px);
  top: calc(50% - 400px);
  display: flex;
`;

export default MentorInfoModal;
