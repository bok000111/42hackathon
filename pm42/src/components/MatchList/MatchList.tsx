import styled from "@emotion/styled";
import { useEffect } from "react";
import { axiosGetMatchList, getData } from "../../api/axios";
import { IMentor } from "../../interface";
import { HeaderContainer } from "../../Styles";
import createMatchIndex from "./createMatchIndex";

function createDummyData() {
  const time = new Date().getTime();

  const subjects = [
    "CPP",
    "push_swap",
    "libft",
    "minishell",
    "pipex",
    "minitalk",
    "so_long",
  ];
  const result = [];
  for (let i = 0; i < 15; i++) {
    const num = (Math.random() * 1000 * 60 * 100) | 0;
    const typeNum = Math.floor(Math.random() * 2);
    const subNum = Math.floor(Math.random() * subjects.length);
    const targetNum = Math.floor(Math.random() * 2);

    const temp: IMentor = {
      type: typeNum ? "mentor" : "mentee",
      subject: subjects[subNum],
      time: new Date(time + num),
      target:
        typeNum === 0
          ? ["jbok"]
          : targetNum === 1
          ? ["jbok", "jpark2", "yeckim", "sanan"]
          : ["jbok"],
    };

    result.push(temp);
  }
  return result;
}

const data = createDummyData();

const MatchList = () => {
  useEffect(() => {
    getData(axiosGetMatchList);
  }, []);
  return (
    <MatchListContainer>
      <HeaderContainer>Mentor</HeaderContainer>
      <MatchInfoContainer>
        {data.map((info, idx) => createMatchIndex(info, idx, data.length))}
      </MatchInfoContainer>
    </MatchListContainer>
  );
};

const MatchInfoContainer = styled.div`
  margin-top: 15px;
  padding-left: 10px;
  width: 100%;
  height: 200px;
  overflow-y: auto;
  font-size: 1rem;
  & > div {
    margin-top: 5px;
  }

  & > div:last-child {
    margin-bottom: 15px;
  }
`;

const MatchListContainer = styled.div`
  width: 360px;
  height: 270px;
  background: white;
  overflow: hidden;
  margin-top: 30px;
`;

export default MatchList;
