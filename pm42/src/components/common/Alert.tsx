import styled from "@emotion/styled";
import customHooks from "../../hooks";

const Alert = ({ msg }: { msg: string }) => {
  const { closeAlert } = customHooks();
  return (
    <AlertContainer onClick={closeAlert}>
      <TextBox>{msg}</TextBox>
      <Cancel />
    </AlertContainer>
  );
};

const TextBox = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Cancel = styled.div`
  width: 90px;
  height: 90px;
  background-image: url("/assets/cancel.png");
  background-size: 100% 100%;
`;

const AlertContainer = styled.div`
  cursor: pointer;
  position: absolute;
  width: 400px;
  height: 150px;
  background: var(--white-color);
  border-radius: 10px;
  z-index: 4;
  left: calc(50% - 150px);
  top: 30%;
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
`;

export default Alert;
