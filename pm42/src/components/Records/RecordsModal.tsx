import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { OpenedSlotsState } from "../../Atom";
import Record from "./Record";

const RecordsModal = () => {
  const slots = useRecoilValue(OpenedSlotsState);

  console.log(slots);
  return (
    <RecordsModalContainer>
      <RecordsHeader>History</RecordsHeader>
      <RecordsWrapperContainer>
        <RecordsWrapperHeader>
          <RecordsWrapperBlockConatiner>
            <RecordsWrapperBlock w={30} b={true}>
              Subject
            </RecordsWrapperBlock>
            <RecordsWrapperBlock w={70}>Date</RecordsWrapperBlock>
          </RecordsWrapperBlockConatiner>
          <RecordsWrapperBlockConatiner>
            <RecordsWrapperBlock w={30} b={true}>
              Mentor
            </RecordsWrapperBlock>
            <RecordsWrapperBlock w={70}>Mentees</RecordsWrapperBlock>
          </RecordsWrapperBlockConatiner>
          <RecordsWrapperBlockConatiner>
            <RecordsWrapperBlock w={70}>Description</RecordsWrapperBlock>
          </RecordsWrapperBlockConatiner>
        </RecordsWrapperHeader>
        <RecordsBox>
          {slots.map((slot) => (
            <Record {...slot} />
          ))}
        </RecordsBox>
      </RecordsWrapperContainer>
    </RecordsModalContainer>
  );
};

const RecordsBox = styled.div`
  height: 410px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: var(--sub-color);
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`;

const RecordsWrapperBlock = styled.div<{ w: number; b?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w }) => `${w}%`};
  border-right: ${({ b }) => (b ? ` 1px solid var(--white-color)` : "")};
`;

const RecordsWrapperBlockConatiner = styled.div`
  display: flex;
  justify-content: cneter;
  align-items: center;
  height: 50px;
  color: white;
  background: var(--main-color);
  border-bottom: 1px solid var(--white-color);
  font-weight: bold;
`;

const RecordsWrapperHeader = styled.div``;

const RecordsWrapperContainer = styled.div`
  overflow-y: hidden;
  width: 90%;
  height: 80%;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
`;

const RecordsHeader = styled.div`
  color: var(--main-color);
  font-size: 2rem;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 30px;
`;

const RecordsModalContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 700px;
  background: var(--white-color);
  border-radius: 10px;
  z-index: 4;
`;

export default RecordsModal;
