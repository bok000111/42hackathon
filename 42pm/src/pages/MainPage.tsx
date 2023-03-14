import styled from "@emotion/styled";
import Background from "../components/Background";
import MainComponent from "../components/MainComponent";
import { CommonContainer, Logo } from "../Styles";

const MainPage = () => {
  return (
    <CommonContainer>
      <MainComponent />
      <Background />
      <Logo width={190} height={130} />
    </CommonContainer>
  );
};

export default MainPage;
