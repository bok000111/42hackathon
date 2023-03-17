import styled from "@emotion/styled";
import { IMentorInfo } from "../../interface";

const MentorInfoCard = ({ info }: { info: IMentorInfo }) => {
  return (
    <MentorCardContainer url={info.coalition || "gun"}>
      <Profile src={info.image} />
      <TextSection>
        <NameContainer>{info.intra}</NameContainer>
        <ScoreContainer>
          <span>Level : {info.level}</span>
          <span>Good : {info.good}</span>
        </ScoreContainer>
        <ScoreContainer></ScoreContainer>
        <SubjectContainer>
          {info.subjects.map((subject) => (
            <Subject>{subject}</Subject>
          ))}
        </SubjectContainer>
      </TextSection>
    </MentorCardContainer>
  );
};
const Subject = styled.div`
  display: inline-block;
  border: 1px solid var(--white-color);
  color: var(--white-color);
  border-radius: 5px;
  padding: 0 5px;
  margin: 5px;
`;

const SubjectContainer = styled.div`
  border: 1px solid var(--white-color);
  width: 95%;
  font-size: 1.5rem;
  height: 170px;
  margin-left: 5px;
  border-radius: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--white-color);
    border-radius: 10px;
  }
`;

const ScoreContainer = styled.div`
  padding: 5px 15px 10px 15px;
  display: flex;
  justify-content: space-between;
`;

const NameContainer = styled.div`
  font-size: 1.5rem;
  margin-top: 2px;
  font-weight: bold;
  margin-bottom: 5px;
  padding-left: 10px;
`;

const TextSection = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 90%;
  height: 300px;
  margin-bottom: 25px;
  border-radius: 10px;
  color: white;
  padding: 10px 10px;
`;

const Profile = styled.div<{ src: string | undefined }>`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin-top: 50px;
  background-image: url(${({ src }) => src || "/assets/defaultImage.png"});
  background-size: 100% 100%;
`;

const MentorCardContainer = styled.div<{ url: string }>`
  background-image: ${({ url }) => `url(/assets/${url}_cover.png)`};
  background-size: 100% 100%;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export default MentorInfoCard;