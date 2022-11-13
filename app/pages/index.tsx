import styled from "@emotion/styled";
import CalcHeader from 'components/calc-header'
import CalcResult from 'components/calc-result'

const CalcContainer = styled.main`
  width: 540px;
  height: 700px;
  border: 1px solid #000;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

function Home() {
  return (
    <CalcContainer>
      <CalcHeader />
      <CalcResult result={"399,981"} />
    </CalcContainer>
  );
}

export default Home;
