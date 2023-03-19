import styled from "@emotion/styled";
import { convertToLectureTime } from "../../hooks";
import { ISlotInfo } from "../../interface";

const Record = ({
  start,
  end,
  mentor,
  mentees,
  subject,
  description,
}: ISlotInfo) => {
  return (
    <RecordContainer>
      <RecordRow>
        <RecordBlock w={30}>{subject}</RecordBlock>
        <RecordBlock w={70}>{convertToLectureTime(start, end)}</RecordBlock>
      </RecordRow>
      <RecordRow>
        <RecordBlock w={30}>{mentor.login}</RecordBlock>
        <RecordBlock w={70}>{mentees.split(",").join(", ")}</RecordBlock>
      </RecordRow>
      <RecordRow>
        <RecordBlock className="description" w={100}>
          {description}
        </RecordBlock>
      </RecordRow>
    </RecordContainer>
  );
};
const RecordBlock = styled.div<{ w: number }>`
  width: ${({ w }) => `${w}%`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid lightgray;
  &.description {
    justify-content: flex-start;
    padding: 50px;
    word-break: break-all;
  }
`;

const RecordRow = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid lightgray;
  &:first-of-type {
    border: none;
  }
`;

const RecordContainer = styled.div`
  border-bottom: 2px solid var(--gray-color);
  border-top: 2px solid var(--gray-color);
  margin-top: 10px;
`;

export default Record;
