import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  myInfoState,
  SelectedSubjectState,
  SubjectDescriptionState,
} from "../../Atom";
import { ISubjectData } from "../../interface";

function bonusDone({ name, final_mark: score }: ISubjectData) {
  if (name.includes("CPP")) {
    return score > 80;
  }
  return score > 100;
}

const MentorLeftSide = ({ data }: { data: ISubjectData[] }) => {
  const myInfo = useRecoilValue(myInfoState);
  const projects = JSON.parse(myInfo.projects) || [];
  const ref = useRef(null);
  const [prev, setPrev] = useState<HTMLElement | null>(null);
  const [subject, setSubject] = useRecoilState(SelectedSubjectState);
  const setDescription = useSetRecoilState(SubjectDescriptionState);
  const onClickMandetory = (e: React.MouseEvent) => {
    if (prev) {
      prev.classList.remove("active");
      prev.childNodes.forEach((node) => {
        const target = node as HTMLElement;
        target.classList.remove("active");
        target.classList.add("notActive");
      });
    }
    e.currentTarget.classList.add("active");
    e.currentTarget.classList.remove("notActive");
    setPrev(e.currentTarget.parentElement);
    setSubject(e.currentTarget.textContent || "");
    const target = ref.current as unknown as HTMLTextAreaElement;
    if (target) target.value = "";
  };
  const onClickBonus = (e: React.MouseEvent) => {
    if (prev) {
      prev.classList.remove("active");
      prev.childNodes.forEach((node) => {
        const target = node as HTMLElement;
        target.classList.remove("active");
        target.classList.add("notActive");
      });
    }
    e.currentTarget.parentElement?.classList.add("active");
    e.currentTarget.parentElement?.childNodes.forEach((node) => {
      const target = node as HTMLElement;
      target.classList.add("active");
      target.classList.remove("notActive");
    });
    setPrev(e.currentTarget.parentElement);
    setSubject(
      e.currentTarget.parentElement?.childNodes[0].textContent + " Bonus" || ""
    );
    const target = ref.current as unknown as HTMLTextAreaElement;
    if (target) {
      target.value = "";
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  return (
    <>
      <HeaderContainer>Mentoring</HeaderContainer>
      <SubHeaderContainer>Choose Subject</SubHeaderContainer>
      <SubjectsContainer>
        {projects.map((info: ISubjectData) => (
          <SubjectContainer key={info.name}>
            <Subject className="notActive" onClick={onClickMandetory}>
              {info.name.replaceAll(" Module", "")}
            </Subject>
            {bonusDone(info) && (
              <Bonus className="notActive" onClick={onClickBonus}>
                Bonus
              </Bonus>
            )}
          </SubjectContainer>
        ))}
      </SubjectsContainer>
      <SubHeaderContainer>Subject Detail</SubHeaderContainer>
      {subject.length > 0 ? (
        <TextArea ref={ref} maxLength={1024} onChange={onChange} />
      ) : (
        <NoSubject>Choose Subject...</NoSubject>
      )}
    </>
  );
};

const NoSubject = styled.div`
  margin-top: 15px;
  width: 350px;
  height: 220px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 1.5rem;
`;

const SubjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--main-color);
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 5px 15px 5px 15px;
  color: var(--gray-color);
  &.active {
    background: var(--main-color);
    color: var(--white-color);
  }
`;

const Subject = styled.div`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  transition: 0.5s;

  &.notActive:hover {
    color: var(--main-color);
  }
  &.active {
    background: var(--main-color);
    color: var(--white-color);
  }
`;

const Bonus = styled.div`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 0.9rem;
  &.notActive:hover {
    color: var(--main-color);
  }
  &.active {
    background: var(--main-color);
    color: var(--white-color);
  }
`;

const TextArea = styled.textarea`
  margin-top: 15px;
  width: 350px;
  height: 220px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  outline: none;
  padding: 10px;
  resize: none;
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

const SubjectsContainer = styled.div`
  margin-top: 15px;
  width: 350px;
  height: 220px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
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

export default MentorLeftSide;
