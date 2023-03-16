import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { MenteeNumberState } from "../../Atom";

const Select = () => {
  const [menteeNumber, setMenteeNumber] = useRecoilState(MenteeNumberState);
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    if (Number(e.currentTarget.textContent) === menteeNumber) return;
    const parent = e.currentTarget.parentElement as HTMLElement;
    parent.childNodes.forEach((node) => {
      const target = node as HTMLElement;
      target.classList.remove("numberActive");
    });
    e.currentTarget.classList.add("numberActive");
    setMenteeNumber(Number(e.currentTarget.textContent));
  };

  return (
    <>
      <SelectCount>
        <SelectBox onClick={onClick} className="numberActive">
          1
        </SelectBox>
        <SelectBox onClick={onClick}>2</SelectBox>
        <SelectBox onClick={onClick}>3</SelectBox>
        <SelectBox onClick={onClick}>4</SelectBox>
      </SelectCount>
    </>
  );
};

const SelectBox = styled.div`
  font-weight: normal;
  color: var(--gray-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-right: 1px solid var(--main-color);
  transition: 0.3s;
  &:last-of-type {
    border-right: none;
  }
  &.numberActive {
    background: var(--main-color);
    color: white;
  }
  &:hover {
    background: var(--main-color);
    color: white;
  }
`;

const SelectCount = styled.div`
  width: 160px;
  height: 40px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--main-color);
  margin: 0 10px;
  cursor: pointer;
  overflow: hidden;
`;

export default Select;
