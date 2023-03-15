import styled from "@emotion/styled";

const BackgroundContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const BackgroundBox = styled.div`
  width: 750px;
  height: 750px;
  background-image: url("/assets/backgroundBox.png");
  background-size: 100% 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

const Background = () => {
  return (
    <BackgroundContainer>
      <BackgroundBox />
    </BackgroundContainer>
  );
};

export default Background;
