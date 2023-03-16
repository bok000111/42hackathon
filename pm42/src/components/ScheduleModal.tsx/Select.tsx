import styled from "@emotion/styled";

const Select = () => {
  return (
    <>
      <SelectCount>
        1
        <SelectContainer>
          <SelectBox>1</SelectBox>
          <SelectBox>2</SelectBox>
          <SelectBox>3</SelectBox>
          <SelectBox>4</SelectBox>
        </SelectContainer>
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
  border-bottom: 1px solid var(--main-color);
  &:last-of-type {
    border: none;
  }
`;

const SelectContainer = styled.div`
  position: absolute;
  left: calc() (50% - 20px);
  top: 50px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  visibility: hidden;
`;

const SelectCount = styled.div`
  width: 40px;
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
  position: relative;
`;

export default Select;
