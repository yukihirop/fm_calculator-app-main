import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const CalcContainer = styled.main`
  width: 540px;
  height: 700px;
  border: 1px solid #000;
  margin: auto;
  padding: 1rem;
`;

const CalcHeaderContainer = styled.header`
  width: 540px;
  height: 50px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text.primary};
`;
const CalcHeaderTitle = styled.h1`
  font-size: 1.5rem;
`;
const CalcHeaderMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const CalcHeaderMenuTitle = styled.h2`
  text-transform: uppercase;
  font-size: 0.8rem;
`;
const CalcHeaderMenuContainer = styled.ul`
  font-size: 0.7rem;
  width: 90px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const CalcHeaderMenuItem = styled.li``;
const CalcHeaderMenuItemRadioLabel = styled.label`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 40px;
  height: 24px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.bg.toggle};
  border-radius: 20px;
  transition: 0.3s;
  transform: translateX(-14px);

  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 4px;
    width: 16px;
    height: 16px;
    z-index: 2;
    margin: auto;
    cursor: pointer;
    content: "";
    background-color: ${(props) => props.theme.colors.button.toggle};
    border-radius: 100%;
    transition: 0.3s;
  }
`;
const CalcHeaderMenuItemRadioInput = styled.input`
  position: absolute;
  z-index: -10;
  opacity: 0;

  &:checked + ${CalcHeaderMenuItemRadioLabel}:after {
    left: 18px;
  }
`;

function Home() {
  const data = [1, 2, 3];

  return (
    <CalcContainer>
      <CalcHeaderContainer>
        <CalcHeaderTitle>Calc</CalcHeaderTitle>
        <CalcHeaderMenu>
          <CalcHeaderMenuTitle>Theme</CalcHeaderMenuTitle>
          <CalcHeaderMenuContainer>
            <CalcHeaderMenuItem>
              <CalcHeaderMenuItemRadioInput
                id="theme"
                type="radio"
                name="theme"
              />
              <CalcHeaderMenuItemRadioLabel htmlFor="theme"></CalcHeaderMenuItemRadioLabel>
            </CalcHeaderMenuItem>
          </CalcHeaderMenuContainer>
        </CalcHeaderMenu>
      </CalcHeaderContainer>
    </CalcContainer>
  );
}

export default Home;
