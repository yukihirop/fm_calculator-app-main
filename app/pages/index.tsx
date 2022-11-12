import { ThemeProvider, Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const CalcHeader = styled.header`
  display: flex;
  justify-content: space-around;
  width: 540px;
  max-width: 540px;
`;
const CalcHeaderTitle = styled.h1`
  font-size: var(--font-size);
  /* color: ${(props) => props.theme.colors.text.primary}; */
`;
const CalcHeaderMenu = styled.nav``;
const CalcHeaderMenuContainer = styled.ul``;
const CalcHeaderMenuItem = styled.li``;

function Home() {
  const theme = useTheme();

  return (
    <main
      css={css`
        background-color: ${theme.colors.bg.primary};
      `}
    >
      <CalcHeader>
        <CalcHeaderTitle>Calc</CalcHeaderTitle>
        <CalcHeaderMenu>
          <CalcHeaderMenuContainer>
            <CalcHeaderMenuItem>Menu Item 1</CalcHeaderMenuItem>
            <CalcHeaderMenuItem>Menu Item 2</CalcHeaderMenuItem>
            <CalcHeaderMenuItem>Menu Item 3</CalcHeaderMenuItem>
          </CalcHeaderMenuContainer>
        </CalcHeaderMenu>
      </CalcHeader>
    </main>
  );
}

const theme1: Theme = {
  colors: {
    bg: {
      primary: 'var(--bg-primary)',
    },
    text: {
      primary: "var(--text-white)",
    },
  },
};

export default function WrappedHome() {
  return (
    <ThemeProvider theme={theme1}>
      <Home />
    </ThemeProvider>
  );
}
