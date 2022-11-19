import React, { useState } from "react";
import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";
import CalcResult from "components/calc-result";
import { useAppDispatch, calcSlice, useAppSelector } from "store";

const CalcPadContainer = styled.section`
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

const useValue = () => {
  const value = useAppSelector((state) => state.calc.value);
  const dispatch = useAppDispatch();

  const setValue = (value: number) => {
    dispatch(calcSlice.actions.setValue(value));
  };

  return [value, setValue] as [number, (value: number) => void];
};

const CalcPad = () => {
  const [currentKey, setCurrentKey] = useState("");
  const theme = useTheme();
  const [buffer, setBuffer] = useValue();
  const [display, setDisplay] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<boolean>(false);

  const keysData = [
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
    ".",
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
    return key === "del" || key === "result";
  };

  const handleClick = (key: string) => {
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(String).includes(key)) {
      const num = parseInt(key);
      setDisplay(num);

      switch (currentKey) {
        case "+":
          setBuffer(buffer + num);
          break;
        case "-":
          setBuffer(buffer - num);
          break;
        case "x":
          setBuffer(buffer * num);
          break;
        case "/":
          setBuffer(buffer / num);
          break;
        default:
          const numVal = result ? num : 10 * buffer + num;
          setBuffer(numVal);
          setDisplay(numVal);
          break;
      }
    } else if (["result", "="].includes(key)) {
      setDisplay(buffer);
      setResult(true);
    } else if (key === "del") {
      setDisplay(undefined);
    }

    setCurrentKey(key);
  };

  return (
    <>
      <CalcResult result={display?.toString() || ""} />
      <CalcPadContainer>
        {keysData.map((key) => (
          <CalcKey
            key={key}
            css={[
              colspan2(key) && twoColspan,
              funcKey(key) &&
                css`
                  background-color: ${theme.colors.button.func};
                  color: ${theme.colors.text.func};
                  box-shadow: 0 5px 0 ${theme.colors.button.funcShadow};
                `,
              key === "=" &&
                css`
                  background-color: ${theme.colors.button.equal};
                  box-shadow: 0 5px 0 ${theme.colors.button.equalShadow};
                `,
              key === "." &&
                css`
                  opacity: 0.2;
                  box-shadow: none;
                  &:hover {
                    transform: none;
                  }
                `,
            ].filter(Boolean)}
            onClick={(event) => handleClick(key)}
            disabled={key === "."}
          >
            {key}
          </CalcKey>
        ))}
      </CalcPadContainer>
    </>
  );
};

export default CalcPad;

const twoColspan = css`
  grid-column: span 2;
`;
