import styled from "@emotion/styled";
import Background from "../components/common/Background";
import { CommonContainer, Logo } from "../Styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosLogin } from "../api/axios";
import LoadingAnimation from "../components/common/LoadingButton";
//api/get_token/?code=
const LoginPage = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const code = window.location.search.slice(1).split("=")[1];
    if (code) {
      setLoading(true);
      getData(code);
    }
    async function getData(code: string) {
      try {
        const { data } = await axiosLogin(code);
        localStorage.setItem("token", data.token);
        localStorage.setItem("data", JSON.stringify(data));
        navigator("/main");
      } catch (e) {
        console.log(e);
      }
    }
  }, []);
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
      {!loading && (
        <ButtonContainer onClick={() => setLoading(true)}>
          <a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-704d2685a6d5772b24b1c01b713439a29f2ebc33f8ec8ac99d27305213871b3c&redirect_uri=http%3A%2F%2Flocalhost%3A5173&response_type=code">
            LOG IN
          </a>
        </ButtonContainer>
      )}
      {loading && (
        <ButtonContainer>
          <LoadingAnimation />
        </ButtonContainer>
      )}
    </CommonContainer>
  );
};

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
  left: 17%;
  top: 600px;
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
  width: 700px;
  height: 500px;
  position: absolute;
  left: 43%;
  top: 24%;
  background-repeat: no-repeat;
  background-image: url("/assets/illust.png");
  background-size: 100% 100%;
`;

const FirstSlogunContainer = styled.div`
  font-size: 2rem;
  position: absolute;
  left: 17%;
  top: 330px;
`;
const SecondSlogunContainer = styled.div`
  font-size: 2rem;
  position: absolute;
  left: 17%;
  top: 370px;
`;
const NameContainer = styled.div`
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  left: 17%;
  top: 520px;
`;

export default LoginPage;
