import styled from "@emotion/styled";
import { CurrentMentorInfoState } from "../../Atom";
import { useSetRecoilState } from "recoil";
import customHooks from "../../hooks";
import { IMentorInfo } from "../../interface";

const MentorCard = ({ info }: { info: IMentorInfo }) => {
  const { openMentorInfo } = customHooks();
  const setCurrentMentorInfo = useSetRecoilState(CurrentMentorInfoState);
  const onClick = () => {
    openMentorInfo();
    setCurrentMentorInfo(info);
  };
  return (
    <MentoCardContainer onClick={onClick} url={info.coalition || "gun"}>
      <ProfileContainer>
        <Profile src={info.image} />
        <InfoContainer>
          <NameContainer>{info.intra}</NameContainer>
          <span>Level : {info.level}</span>
          <span>Good : {info.good}</span>
        </InfoContainer>
      </ProfileContainer>
      <ContentsContainer>
        <SubjectContainer>
          {info.subjects.map((subject) => (
            <Subject>{subject}</Subject>
          ))}
        </SubjectContainer>
      </ContentsContainer>
    </MentoCardContainer>
  );
};

const ProfileContainer = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 90%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: 95%;
  margin-left: 5px;
  border-radius: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
`;

const NameContainer = styled.div`
  font-size: 1.1rem;
  padding-left: 10px;
  margin-top: 2px;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.7);
  color: var(--white-color);
  width: 110px;
  height: 100%;
  border-radius: 10px;
  span {
    margin-left: 10px;
  }
`;

const ContentsContainer = styled.div`
  width: 90%;
  height: 150px;
  background: rgba(0, 0, 0, 0.7);
  margin-bottom: 15px;

  color: var(--white-color);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  border-radius: 10px;
`;

const Profile = styled.div<{ src: string | undefined }>`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-image: url(${({ src }) => src || "/assets/defaultImage.png"});
  background-size: 100% 100%;
`;

const MentoCardContainer = styled.div<{ url: string }>`
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

export default MentorCard;
