import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { axiosGetMatchList } from "../../api/axios";
import { myInfoState } from "../../Atom";
import { IMentor } from "../../interface";
import { HeaderContainer } from "../../Styles";
import createMatchIndex from "./createMatchIndex";

const MatchList = () => {
  const { token } = useRecoilValue(myInfoState);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    async function getData() {
      const result = await axiosGetMatchList(token || localStorage.getItem('token'));
      console.log("in MatchList", result);
      //setData(result);
    }
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
