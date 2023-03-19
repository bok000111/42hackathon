import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { myInfoState } from "../../Atom";
import { convertDate } from "../../hooks";
import MentorInfoCard from "../common/MentorInfoCard";

const MyInfoModal = () => {
  const myInfo = useRecoilValue(myInfoState);
  const subjects = JSON.parse(myInfo.projects);

  const [SUBJECT, SCORE, DATE] = [43, 20, 33];
  return (
    <MyInfoModalContainer>
      <Container>
        <MentorInfoCard
          my={true}
          intra={myInfo.login}
          description={myInfo.description}
          level={myInfo.level}
          good={myInfo.total_feedback}
          image={myInfo.image}
        />
      </Container>
      <Container>
        <SubjectHeader>Subjects</SubjectHeader>
        <SubjectContainer>
          <SubjectInfoHeader>
            <Block w={SUBJECT}>Subject</Block>
            <Block w={SCORE}>Score</Block>
            <Block w={DATE}>Date</Block>
            <Block w={4}></Block>
          </SubjectInfoHeader>
          <SubjectInfocontainer>
            {subjects.map(
              (subject: {
                name: string;
                final_mark: string;
                marked_at: string;
              }) => (
                <SubjectBlockContainer key={subject.name}>
                  <Block w={SUBJECT}>{subject.name}</Block>
                  <Block w={SCORE}>{subject.final_mark}</Block>
                  <Block w={DATE}>{convertDate(subject.marked_at)}</Block>
                  <Block w={4}></Block>
                </SubjectBlockContainer>
              )
            )}
          </SubjectInfocontainer>
        </SubjectContainer>
      </Container>
    </MyInfoModalContainer>
  );
};

const SubjectBlockContainer = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid #dcdcdc;
  & > div {
    border-right: 1px solid #dcdcdc;
  }
  & > div:nth-of-type(3) {
    border-right: none;
  }
  & > div:first-of-type {
    justify-content: flex-start;
    padding-left: 15px;
  }
`;

const SubjectInfocontainer = styled.div`
  width: 100%;
  height: 400px;
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

const Block = styled.div<{ w: number }>`
  width: ${({ w }) => w + "%"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubjectInfoHeader = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  background: var(--main-color);
  color: var(--white-color);
  height: 50px;
`;

const SubjectContainer = styled.div`
  overflow: hidden;
  margin-top: 30px;
  width: 90%;
  height: 450px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
`;

const SubjectHeader = styled.div`
  width: 90%;
  font-size: 1.6rem;
  color: var(--main-color);
  font-weight: bold;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;
const MyInfoModalContainer = styled.div`
  width: 800px;
  height: 600px;
  position: absolute;
  left: calc(50% - 400px);
  top: calc(50% - 300px);
  z-index: 3;
  background: var(--white-color);
  border-radius: 10px;
  display: flex;
`;

export default MyInfoModal;
