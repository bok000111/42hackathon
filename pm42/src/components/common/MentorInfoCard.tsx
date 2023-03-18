import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { axiosPatchMyGreetings } from "../../api/axios";
import { myInfoState } from "../../Atom";

const MentorInfoCard = ({
  my,
  intra,
  description,
  level,
  good,
  image,
}: {
  my: boolean;
  intra: string;
  description: string;
  level: string;
  good: number;
  image: string;
}) => {
  const [myInfo, setMyInfo] = useRecoilState(myInfoState);
  const [editToggle, setEditToggle] = useState(false);
  const [greetings, setGreetings] = useState("");

  console.log(myInfo);
  const onClickEdit = () => {
    setEditToggle(!editToggle);
    if (editToggle && getData()) {
      console.log(greetings);
      setMyInfo({ ...myInfo, description: greetings });
      setGreetings("");
    }
  };

  async function getData() {
    axiosPatchMyGreetings(myInfo.token, myInfo.login, greetings);
    return true;
  }

  const onGreetingsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGreetings(e.target.value);
  };

  return (
    <MentorInfoCardContainer>
      <Profile image={image} />
      <InfoContainer>
        <div className="name">{intra}</div>
        <div className="grade">
          <div>Level : {level}</div>
          <div>Good : {good}</div>
        </div>
      </InfoContainer>
      <GreetingContainer>
        <GreetingHeader>
          <div>Greetings</div>
          {my ? (
            <div className="edit" onClick={onClickEdit}>
              {editToggle ? "Done" : "Edit"}
            </div>
          ) : (
            <div />
          )}
        </GreetingHeader>
        {!editToggle && (
          <GreetingBox>{description || "안녕하세요~!"}</GreetingBox>
        )}
        {editToggle && (
          <GrettingTextArea maxLength={1024} onChange={onGreetingsChange} />
        )}
      </GreetingContainer>
    </MentorInfoCardContainer>
  );
};

const GrettingTextArea = styled.textarea`
  resize: none;
  background: none;
  outline: none;
  border: 1px solid var(--white-color);
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: 135px;
  color: var(--white-color);
  margin-top: 15px;
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

const GreetingBox = styled.div`
  color: var(--white-color);
  width: 100%;
  height: 135px;
  border-radius: 10px;
  border: 1px solid var(--white-color);
  margin-top: 15px;
  padding: 10px;
  white-space: pre-line;
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

const GreetingHeader = styled.div`
  color: var(--white-color);
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .edit {
    font-size: 1rem;
    cursor: pointer;
  }
`;

const GreetingContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 90%;
  margin-top: 20px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  width: 90%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: var(--white-color);
  padding: 10px 20px;
  & > .name {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  & > .grade {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
`;

const Profile = styled.div<{ image: string }>`
  width: 45%;
  padding-bottom: 45%;
  border-radius: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: 100% 110%;
  margin-top: 30px;
`;

const MentorInfoCardContainer = styled.div`
  width: 90%;
  height: 90%;
  background: var(--lightgray-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MentorInfoCard;
