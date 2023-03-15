import styled from "@emotion/styled";

interface IMentorInfo {
  intra: string;
  level: number;
  rating: number;
  subjects: string[];
  image?: string | undefined;
  coalition: string;
}

const MentoCard = ({ info }: { info: IMentorInfo }) => {
  return (
    <MentoCardContainer url={info.coalition}>
      <Profile src={info.image} />
      <ContentsContainer>
        <NameContainer>{info.intra}</NameContainer>
        <InfoContainer>
          <span>Level : {info.level}</span>
          <span>Rating : {info.rating}</span>
        </InfoContainer>
        <SubjectContainer></SubjectContainer>
      </ContentsContainer>
    </MentoCardContainer>
  );
};

const SubjectContainer = styled.div`
  border: 1px solid var(--white-color);
  width: 90%;
  height: 50px;
  margin-left: 10px;
  border-radius: 10px;
  overflow-y: auto;
`;

const NameContainer = styled.div`
  font-size: 0.9rem;
  padding-left: 10px;
  margin-top: 2px;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

const ContentsContainer = styled.div`
  width: 90%;
  height: 105px;
  background: rgba(0, 0, 0, 0.7);
  margin: 0 auto;
  margin-top: 5px;
  color: var(--white-color);
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div<{ src: string | undefined }>`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-image: url(${({ src }) => src || "/assets/defaultImage.png"});
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 15px;
`;

const MentoCardContainer = styled.div<{ url: string }>`
  background-image: ${({ url }) => `url(/assets/${url}_cover.png)`};
  background-size: 100% 100%;
  width: 90%;
  height: 90%;
  border-radius: 10px;
`;

export default MentoCard;
