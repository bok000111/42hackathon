import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { backgorundToggleState, mentorToggleState } from "../Atom";
import Button from "./common/Button";
import Filter from "./Filter/Filter";
import MatchList from "./MatchList/MatchList";
import MentorList from "./MentorList/MentorList";
import MenuComponent from "./Menu/MenuComponent";
import Rank from "./Rank/Rank";

const MainComponent = () => {
  const setBackgroundToggle = useSetRecoilState(backgorundToggleState);
  const setMentorToggle = useSetRecoilState(mentorToggleState);
  const onClick = () => {
    setBackgroundToggle(true);
    setMentorToggle(true);
  };
  return (
    <MainContainer>
      <LeftContainer>
        <MenuComponent />
        <MatchList />
        <Rank />
        <Button name="멘토링 하러가기" onClick={onClick} />
      </LeftContainer>
      <RightContainer>
        <Filter />
        <MentorList />
      </RightContainer>
    </MainContainer>
  );
};

const LeftContainer = styled.div`
  width: 400px;
  height: 100%;
  background: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 800px;
  height: 100%;
`;

const MainContainer = styled.div`
  width: 1200px;
  height: 800px;
  box-shadow: 0px 10px 40px 5px rgba(0, 0, 0, 0.33);
  border-radius: 20px;
  background: var(--white-color);
  overflow: hidden;
  display: flex;
`;

export default MainComponent;
