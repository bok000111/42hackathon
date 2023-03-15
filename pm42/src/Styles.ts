import styled from "@emotion/styled";

export const CommonContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  color: var(--main-color);
  font-size: 2rem;
  font-weight: bold;
  margin-bo
`;

export const Logo = styled.div<{ width: number; height: number }>`
  ${({ width }) => `width : ${width}px`};
  ${({ height }) => `height : ${height}px`};
  background-image: url("/assets/42logo.png");
  background-size: 100% 100%;
  position: absolute;
  right: 50px;
  bottom: 50px;
  z-index: -1;
`;
