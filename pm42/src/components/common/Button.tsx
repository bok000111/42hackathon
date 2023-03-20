import styled from "@emotion/styled";

const Button = ({
  name,
  onClick,
}: {
  name: string;
  onClick: React.MouseEventHandler;
}) => {
  return (
    <ButtonStyled onClick={onClick}>
      {name}
      <ArrowIcon />
    </ButtonStyled>
  );
};

const ArrowIcon = styled.div`
  background-image: url("/static/assets/arrow.png");
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  margin-left: 50px;
`;

const ButtonStyled = styled.div`
  width: 360px;
  height: 65px;
  background: var(--main-color);
  border-radius: 10px;
  margin-top: 45px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
`;

export default Button;
