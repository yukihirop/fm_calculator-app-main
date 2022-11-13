import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const CalcHeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text.primary};
  position: relative;
  border: 1px solid #000;
`;
const CalcHeaderTitle = styled.h1`
  font-size: 2rem;
  text-transform: lowercase;
`;

const CalcThemeNumber = styled.section`
  position: absolute;
  right: 0;
  bottom: 30px;
  transform: translateX(-1px);

  ol {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0.6rem;
  }

  li {
    padding: 0.5rem;
  }
`;
const CalcThemePrefecture = styled.section`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 2rem;

  h5 {
    text-transform: uppercase;
  }
`;

const CalcThemeToggle = styled.section`
  border-radius: 20px;
  padding: 0 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.toggle};
`;
const CalcThemeToggleLabel = styled.label`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CalcThemeToggleInput = styled.input`
  display: none;
`;
const CalcThemeToggleCheck = styled.span`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;

  ${CalcThemeToggleInput}:checked + & {
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.button.toggle};
  }
`;

const CalcHeader = () => {
  const ids = ['theme1', 'theme2', 'theme3'];
  return (
    <CalcHeaderContainer>
      <CalcHeaderTitle>calc</CalcHeaderTitle>
      <CalcThemeNumber>
        <ol>
          {ids.map((id, index) => (
            <li key={id}>{index + 1}</li>
          ))}
        </ol>
      </CalcThemeNumber>
      <CalcThemePrefecture>
        <h5>Theme</h5>
        <CalcThemeToggle>
          {ids.map((id, index) => (
            <CalcThemeToggleLabel key={id}>
              <CalcThemeToggleInput type="radio" name="theme" id={id} />
              <CalcThemeToggleCheck />
            </CalcThemeToggleLabel>
          ))}
        </CalcThemeToggle>
      </CalcThemePrefecture>
    </CalcHeaderContainer>
  );
}

export default CalcHeader
