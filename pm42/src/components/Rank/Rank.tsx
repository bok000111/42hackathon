import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { axiosGetRank } from "../../api/axios";
import { myInfoState } from "../../Atom";
import { HeaderContainer } from "../../Styles";

const createLink = (name: string) =>
  `https://profile.intra.42.fr/users/${name}`;

const Rank = () => {
  const { token } = useRecoilValue(myInfoState);
  const [data, setData] = useState([
    {
      login: "-",
      coa: "-",
      total_time: "-",
      total_feedback: "-",
    },
    {
      login: "-",
      coa: "-",
      total_time: "-",
      total_feedback: "-",
    },
    {
      login: "-",
      coa: "-",
      total_time: "-",
      total_feedback: "-",
    },
  ]);
  useEffect(() => {
    async function getData() {
      const response = await axiosGetRank(
        token || localStorage.getItem("token")
      );
      setData([...response.rank]);
    }
    if (token) getData();
  }, []);
  console.log(data);
  return (
    <RankContainer>
      <HeaderContainer>Rank</HeaderContainer>
      <TableContainer>
        <colgroup>
          <col width="30px" />
          <col width="100px" />
          <col width="70px" />
          <col width="70px" />
        </colgroup>
        <thead>
          <tr>
            <th>No.</th>
            <th>Intra</th>
            <th>Time</th>
            <th>Good</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info: any, idx) => (
            <tr key={idx}>
              <td>{info.login ? idx + 1 : "-"}</td>
              <td>
                <a target="_blank" href={createLink(info.login)}>
                  <CoalitionIcon src={info.coa} />
                  {info.login}
                </a>
              </td>
              <td>{info.total_time === "-" ? "-" : info.total_time + "H"}</td>
              <td>{info.total_feedback}</td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </RankContainer>
  );
};

const CoalitionIcon = styled.div<{ src: string }>`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: ${({ src }) => `url(/static/assets/${src}_icon.png)`};
  background-size: 100% 100%;
  margin-right: 5px;
`;

const TableContainer = styled.table`
  width: 100%;
  margin-top: 20px;
  border-spacing: 0;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  overflow: hidden;
  padding-bottom: 5px;
  & > thead {
    background: var(--main-color);
    color: white;
    text-align: center;
    height: 39px;
  }
  & > tbody {
    td {
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    td a {
      display: b;
    }
  }
`;

const RankContainer = styled.div`
  width: 360px;
  background: white;
  margin-top: 35px;
  margin-bottom: 5px;
`;

export default Rank;
