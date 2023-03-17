import styled from "@emotion/styled";
import { IMentorInfo, ISlotInfo } from "../../interface";
import { useRecoilValue } from "recoil";
import { OpenedSlotsState } from "../../Atom";
import MentorInfoCard from "./MentorInfoCard";

function convertToMentoringList(list: ISlotInfo[], mentorName: string) {
  const map = list
    .filter((info) => info.mentor === mentorName)
    .reduce((acc: any, info) => {
      if (!acc[info.subject]) {
        acc[info.subject] = {};
        acc[info.subject].info = [];
      }
      const temp = {
        cur: info.cur,
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

const MentorInfoModal = ({ info }: { info: IMentorInfo }) => {
  const slotInfo = useRecoilValue(OpenedSlotsState);
  console.log(slotInfo);
  console.log(convertToMentoringList(slotInfo, info.intra));
  return (
    <MentorInfoModalContainer>
      <Container>
        <MentorInfoCard info={info}></MentorInfoCard>
      </Container>
      <Container>
        <SubjectContainer>
          {convertToMentoringList(slotInfo, info.intra).map((info) => (
            <Subject onClick={() => console.log(info)}>
              <SubjectName>{info.subject}</SubjectName>
              <SubjectIconsContainer>
                <SubjectIcons url="/assets/calendar.png" />
              </SubjectIconsContainer>
            </Subject>
          ))}
        </SubjectContainer>
        <DescriptionContainer>
          <DescriptionNav>
            <DescriptionHeader>Description</DescriptionHeader>
          </DescriptionNav>
          <DescriptionInfo>
            <DateInfo>23.3.15 11:00 15:00</DateInfo>
            <IndexInfo>
              <Index className="indexActive">1</Index>
              <Index>2</Index>
            </IndexInfo>
          </DescriptionInfo>
          <DescriptionBox />
        </DescriptionContainer>
        <SubjectInfo></SubjectInfo>
        <Button>Select</Button>
      </Container>
    </MentorInfoModalContainer>
  );
};

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
  height: 75%;
  border-radius: 10px;
  border: 1px solid var(--main-color);
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
  color: var(--main-color);
  font-weight: bold;
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  word-break: break-all;
  transition: 0.3s;
`;

const Subject = styled.div`
  width: 90%;
  height: 50px;
  margin: 2px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubjectContainer = styled.div`
  width: 80%;
  height: 20%;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  margin-top: 20px;
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
  background: green;
  width: 80%;
  height: 15%;
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
  margin-bottom: 25px;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
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
