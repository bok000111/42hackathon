import styled from "@emotion/styled";

const MenuComponent = () => {
  return (
    <MenuContainer>
      <div>
        <IconContainer url="/src/assets/logo.png" width={50} height={32} />
      </div>
      <RightContainer>
        <IconContainer url="/src/assets/info.png" height={25} width={25} />
        <IconContainer url="/src/assets/record.png" height={25} width={25} />
        <IconContainer url="/src/assets/logout.png" height={25} width={25} />
      </RightContainer>
    </MenuContainer>
  );
};

const RightContainer = styled.div`
  display: flex;
  & > div {
    margin-left: 10px;
  }
`;

const IconContainer = styled.div<{
  url: string;
  width: number;
  height: number;
}>`
  cursor: pointer;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100% 100%;
`;

const MenuContainer = styled.div`
  width: 270px;
  height: 50px;
  background: white;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default MenuComponent;
