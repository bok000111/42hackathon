import styled from "@emotion/styled";
import { HeaderContainer } from "../Styles";

const MatchList = () => {
  return (
    <MatchListContainer>
      <HeaderContainer>Mentor</HeaderContainer>
    </MatchListContainer>
  );
};

const MatchListContainer = styled.div`
  width: 270px;
  height: 170px;
  background: white;
  margin-top: 15px;
`;

export default MatchList;
