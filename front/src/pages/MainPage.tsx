import styled from "@emotion/styled";
import Background from "../components/common/Background";
import MainComponent from "../components/MainComponent";
import { CommonContainer, Logo } from "../Styles";
import { Cookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  const cookie = new Cookies();
  console.log(cookie.get("access_token"));
  localStorage.setItem("access_token", cookie.get("access_token"));
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
    </CommonContainer>
  );
};

export default MainPage;
