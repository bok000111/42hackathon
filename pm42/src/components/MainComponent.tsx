import styled from "@emotion/styled";
import Button from "./common/Button";
import Filter from "./Filter/Filter";
import MatchList from "./MatchList/MatchList";
import MentorList from "./MentorList/MentorList";
import MenuComponent from "./Menu/MenuComponent";
import Rank from "./Rank/Rank";

const MainComponent = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <MenuComponent />
        <MatchList />
        <Rank />
        <Button name="멘토링 신청내역" />
        <Button name="멘토링 신청하기" />
      </LeftContainer>
      <RightContainer>
        <Filter />
        <MentorList />
      </RightContainer>
    </MainContainer>
  );
};

const LeftContainer = styled.div`
  width: 300px;
  height: 100%;
  background: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 700px;
  height: 100%;
`;

const MainContainer = styled.div`
  width: 1000px;
  height: 600px;
  box-shadow: 0px 10px 40px 5px rgba(0, 0, 0, 0.33);
  border-radius: 20px;
  background: var(--white-color);
  overflow: hidden;
  display: flex;
`;

export default MainComponent;
