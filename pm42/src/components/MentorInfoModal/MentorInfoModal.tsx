import styled from "@emotion/styled";
import MentorCard from "../MentorList/MentorCard";
import { IMentorInfo } from "../../interface";

const MentorInfoModal = ({ info }: { info: IMentorInfo }) => {
  return (
    <MentorInfoModalContainer>
      <Container>
        <MentorCard info={info}></MentorCard>
      </Container>
      <Container>right</Container>
    </MentorInfoModalContainer>
  );
};

const Container = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;

const MentorInfoModalContainer = styled.div`
  width: 800px;
  height: 600px;
  background: var(--white-color);
  position: absolute;
  z-index: 3;
  border-radius: 10px;
  left: calc(50% - 400px);
  top: calc(50% - 300px);
  display: flex;
`;

export default MentorInfoModal;
