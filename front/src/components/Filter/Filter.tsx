import styled from "@emotion/styled";

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
  return (
    <FilterContainer>
      {list.map((str) => (
        <FilterElement>{str}</FilterElement>
      ))}
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <Input id="search" type="text" maxLength={15} />
    </FilterContainer>
  );
};

const Input = styled.input`
  right: 200px;
  height: 30px;
  margin-left: 5px;
  outline: none;
  border: none;
  outline: none;
  border-radius: 10px;
  background: var(--sub-color);
  padding-left: 5px;
  &::placeholder {
    color: var(--gray-color);
  }
`;
const SearchIcon = styled.div`
  background-image: url("/src/assets/SearchIcon.png");
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
  background: var(--main-color);
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
  padding: 5px;
  border: 1px solid var(--white-color);
  height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 0.85rem;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: var(--main-color);
    background: var(--white-color);
  }
`;

export default Filter;
