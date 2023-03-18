import styled from "@emotion/styled";
import { IMentorInfo } from "../../interface";

const MentorInfoCard = ({ info }: { info: IMentorInfo }) => {
  return (
    <MentorCardContainer url={info.coalition || "gun"}>
      <Profile src={info.image} coalition={info.coalition} />
      <TextSection>
        <NameContainer>
          {info.intra}
          <Coalition />
        </NameContainer>
        <ScoreContainer>
          <span>Level : {info.level}</span>
          <span>Good : {info.good}</span>
        </ScoreContainer>
        <ScoreContainer></ScoreContainer>
        <SubjectContainer>
          {info.subjects.map((subject, idx) => (
            <Subject key={idx}>{subject}</Subject>
          ))}
        </SubjectContainer>
      </TextSection>
    </MentorCardContainer>
  );
};

const Coalition = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("/assets/gun_icon.png");
  border-radius: 100%;
  background-size: 100% 100%;
  margin-left: 10px;
`;
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
  display: flex;
  align-items: center;
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

const Profile = styled.div<{ src: string | undefined; coalition: string }>`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin-top: 50px;
  background-image: url(${({ src }) => src || "/assets/defaultImage.png"});
  background-size: 100% 120%;
  background-position-x: 30%;
  background-position-y: 50%;
  position: relative;
`;

const MentorCardContainer = styled.div<{ url: string }>`
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
