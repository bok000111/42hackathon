import styled from "styled-components";

const RecordsModal = () => {
  return <RecordsModalContainer></RecordsModalContainer>;
};

const RecordsModalContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 700px;
  background: var(--white-color);
  border-radius: 10px;
  z-index: 4;
`;

export default RecordsModal;
