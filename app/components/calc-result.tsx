import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const CalcResultContainer = styled.div`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.bg.result};
  border-radius: 0.5rem;

  h2 {
    margin: 0;
    padding: 2rem 1rem;
    font-size: 3.5rem;
    text-align: right;
    color: ${(props) => props.theme.colors.text.primary};
    height: 120px;
  }
`;

interface CalcResultProps {
  result: string
}

const CalcResult = ({ result }: CalcResultProps) => {

  return (
    <CalcResultContainer>
      <h2>{result}</h2>
    </CalcResultContainer>
  )
}

export default CalcResult

const active = css`
  background: red;
`
