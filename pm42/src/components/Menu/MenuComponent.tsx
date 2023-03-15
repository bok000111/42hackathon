import styled from "@emotion/styled";

const MenuComponent = () => {
  return (
    <MenuContainer>
      <div>
        <IconContainer url="/assets/mtom.jpg" width={70} height={50} />
      </div>
      <RightContainer>
        <IconContainer url="/assets/info.png" height={25} width={25} />
        <IconContainer url="/assets/record.png" height={25} width={25} />
        <IconContainer url="/assets/logout.png" height={25} width={25} />
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
  width: 360px;
  height: 50px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default MenuComponent;
