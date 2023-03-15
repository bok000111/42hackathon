import styled from "@emotion/styled";
import { HeaderContainer } from "../../Styles";

interface IRank {
  coalition: string;
  intra: string;
  time: number;
  good: number;
}

const data = [
  {
    coalition: "gun",
    intra: "yooh",
    time: 12.5,
    good: 132,
  },
  {
    coalition: "lee",
    intra: "jbok",
    time: 7.5,
    good: 66,
  },
  {
    coalition: "gam",
    intra: "yeckim",
    time: 4.5,
    good: 12,
  },
];

const createLink = (name: string) =>
  `https://profile.intra.42.fr/users/${name}`;

const Rank = () => {
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
          {data.map((info, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>
                <a target="_blank" href={createLink(info.intra)}>
                  <CoalitionIcon src={info.coalition} />
                  {info.intra}
                </a>
              </td>
              <td>{info.time}H</td>
              <td>{info.good}</td>
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
  background-image: ${({ src }) => `url(/assets/${src}_icon.png)`};
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