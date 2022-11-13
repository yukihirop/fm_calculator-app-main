import styled from "@emotion/styled";
import CalcHeader from "components/calc-header";
import CalcResult from "components/calc-result";
import { css, useTheme } from "@emotion/react";

const CalcContainer = styled.main`
  width: 496px;
  border: 1px solid #000;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CalcKeysContainer = styled.section`
  margin-top: 2rem;
  height: fit-content;
  max-height: 500px;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;
  padding: 2rem 2rem 0rem 2rem;
  background-color: ${(props) => props.theme.colors.bg.keys};
`;
const CalcKey = styled.button`
  height: 60px;
  border-radius: 0.5rem;
  border: transparent;
  text-transform: uppercase;
  font-size: 2rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.button.number};
  box-shadow: 0 5px 0 ${(props) => props.theme.colors.button.numberShadow};
  padding: 1rem;
  color: ${(props) => props.theme.colors.text.secondary};

  &:hover {
    box-shadow: none;
    transform: translateY(4px);
  }
`;

function Home() {
  const theme = useTheme();

  const keys = [
    "7",
    "8",
    "9",
    "del",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    "・",
    "0",
    "/",
    "x",
    "result",
    "=",
  ];

  const colspan2 = (key: string): boolean => {
    return key === "result" || key === "=";
  };

  const funcKey = (key: string): boolean => {
    return (
      key === "mc" ||
      key === "mr" ||
      key === "m+" ||
      key === "m-" ||
      key === "del" ||
      key === "result"
    );
  };

  return (
    <CalcContainer>
      <CalcHeader />
      <CalcResult result={"399,981"} />
      <CalcKeysContainer>
        {keys.map((key) => (
          <CalcKey
            key={key}
            css={[
              colspan2(key) && twoColspan,
              funcKey(key) &&
                css`
                  background-color: ${theme.colors.button.func};
                  color: ${theme.colors.text.primary};
                  box-shadow: 0 5px 0 ${theme.colors.button.funcShadow};
                `,
              key === "=" &&
                css`
                  background-color: ${theme.colors.button.equal};
                  box-shadow: 0 5px 0 ${theme.colors.button.equalShadow};
                `,
            ].filter(Boolean)}
          >
            {key}
          </CalcKey>
        ))}
      </CalcKeysContainer>
    </CalcContainer>
  );
}

export default Home;

const twoColspan = css`
  grid-column: span 2;
`;
