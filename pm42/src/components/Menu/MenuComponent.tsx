import styled from "@emotion/styled";
import customHooks from "../../hooks";

const MenuComponent = () => {
  const { openMyInfoModal } = customHooks();
  return (
    <MenuContainer>
      <div>
        <IconContainer url="/static/assets/mtom.png" width={50} height={50} />
      </div>
      <RightContainer>
        <IconContainer
          onClick={openMyInfoModal}
          url="/static/assets/info.png"
          height={25}
          width={25}
        />
        <IconContainer url="/static/assets/records.png" height={25} width={25} />
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
