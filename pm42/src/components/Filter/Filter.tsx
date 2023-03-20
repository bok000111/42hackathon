import styled from "@emotion/styled";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CurrentCircleInfoState, FilterInfoState } from "../../Atom";

const list = [
  "ALL",
  "Circle 0",
  "Circle 1",
  "Circle 2",
  "Circle 3",
  "Circle 4",
  "Circle 5",
  "Circle 6",
];

const Filter = () => {
  const [currentCircleInfo, setCurrentCircleInfo] = useRecoilState(
    CurrentCircleInfoState
  );
  const setFilterInfo = useSetRecoilState(FilterInfoState);

  const onClickFilter = (circleInfo: string) => {
    setCurrentCircleInfo(circleInfo);
  };

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInfo(e.target.value);
    setCurrentCircleInfo("ALL");
  };
  return (
    <FilterContainer>
      {list.map((str) => (
        <FilterElement
          key={str}
          className={currentCircleInfo === str ? "active" : ""}
          onClick={() => onClickFilter(str)}
        >
          {str}
        </FilterElement>
      ))}
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <Input id="search" type="text" maxLength={15} onChange={onChangeFilter} />
    </FilterContainer>
  );
};

const Input = styled.input`
  height: 40px;
  margin-left: 5px;
  outline: none;
  border: none;
  outline: none;
  border-radius: 10px;
  background: var(--main-color);
  padding-left: 10px;
  color: white;
`;
const SearchIcon = styled.div`
  background-image: url("/static/assets/SearchIcon.png");
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const FilterContainer = styled.div`
  width: 98%;
  border-radius: 10px;
  height: 50px;
  background: var(--lightgray-color);
  margin-top: 15px;
  display: flex;
  align-items: center;
  position: relative;
`;

const FilterElement = styled.div`
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  background: var(--main-color);
  border: 1px solid var(--main-color);
  height: 40px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: var(--main-color);
    background: var(--white-color);
  }
  &.active {
    color: var(--main-color);
    background: var(--white-color);
  }
`;

export default Filter;
