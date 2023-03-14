import styled from "@emotion/styled";
import Background from "../components/Background";
import { CommonContainer, Logo } from "../Styles";
import { Cookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";

const ButtonContainer = styled.div`
  width: 340px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  font-size: 40px;
  background: var(--main-color);
  border-radius: 20px;
  position: absolute;
  left: 12%;
  top: 480px;
  cursor: pointer;
  & > a {
    color: var(--white-color);
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 100px;
    text-decoration: none;
  }
`;

const Illust = styled.div`
  width: 600px;
  height: 400px;
  position: absolute;
  left: 38%;
  top: 17%;
  background-repeat: no-repeat;
  background-image: url("/src/assets/illust.png");
  background-size: 100% 100%;
`;

const FirstSlogunContainer = styled.div`
  font-size: 2rem;
  position: absolute;
  left: 12%;
  top: 180px;
`;
const SecondSlogunContainer = styled.div`
  font-size: 2rem;
  position: absolute;
  left: 12%;
  top: 220px;
`;
const NameContainer = styled.div`
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  left: 12%;
  top: 390px;
`;

const LoginPage = () => {
  const cookie = new Cookies();
  console.log(cookie);
  console.log(cookie.get("access_token"));
  return (
    <CommonContainer>
      <Background />
      <Logo width={420} height={290} />
      <Illust />
      <FirstSlogunContainer id="firstSlogun">
        혼자하면 42일
      </FirstSlogunContainer>
      <SecondSlogunContainer id="secondSlogun">
        같이하면 42분
      </SecondSlogunContainer>
      <NameContainer>42 PeerMatching</NameContainer>
      <ButtonContainer>
        <a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c&redirect_uri=http%3A%2F%2Flocalhost%3A5173&response_type=code">
        {/* <a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-8c529c310d2083e37de555c07c13cdf6ce2af095817bf78362b803144f2b11c6&redirect_uri=http%3A%2F%2Flocalhost%3A5173&response_type=code"> */}
          LOG IN
        </a>
      </ButtonContainer>
    </CommonContainer>
  );
};

export default LoginPage;