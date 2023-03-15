import styled from "@emotion/styled";
import Background from "../components/common/Background";
import MainComponent from "../components/MainComponent";
import { CommonContainer, Logo } from "../Styles";
import { Cookies } from "react-cookie";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { backgorundToggleState, mentorToggleState } from "../Atom";
import customHooks from "../hooks";
import MentorModal from "../MentorModal.tsx/MentorModal";

const MainPage = () => {
  const backgroundToggle = useRecoilValue(backgorundToggleState);
  const mentorToggle = useRecoilValue(mentorToggleState);

  const cookie = new Cookies();
  const { closeToggle } = customHooks();
  console.log(cookie.get("access_token"));
  localStorage.setItem("access_token", cookie.get("access_token"));
  const onBackgroundOff = () => {
    closeToggle();
  };
  useEffect(() => {
    console.log(cookie.get("access_token"));
    getData();
    async function getData() {
      try {
        axios
          .get(
            "http://localhost:8000/api/getme/?access_token=" +
              cookie.get("access_token")
          )
          .then((res) => console.log(res));
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  return (
    <CommonContainer>
      <MainComponent />
      <Background />
      <Logo width={190} height={130} />
      {mentorToggle && <MentorModal />}
      {backgroundToggle && <BackgroundContainer onClick={onBackgroundOff} />}
    </CommonContainer>
  );
};

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
`;

export default MainPage;
