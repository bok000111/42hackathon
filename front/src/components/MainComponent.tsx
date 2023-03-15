import styled from "@emotion/styled";
import Button from "./Button";
import MatchList from "./MatchList";
import MenuComponent from "./MenuComponent";
import Rank from "./Rank";

const MainComponent = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <MenuComponent />
        <MatchList />
        <Rank />
        <Button />
        <Button />
      </LeftContainer>
      <RightContainer></RightContainer>
    </MainContainer>
  );
};

const LeftContainer = styled.div`
  width: 300px;
  height: 100%;
  background: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 700px;
  height: 100%;
  background: pink;
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
