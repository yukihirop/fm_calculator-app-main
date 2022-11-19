import styled from "@emotion/styled";
import CalcHeader from "components/calc-header";
import CalcPad from 'components/calc-pad';

const CalcContainer = styled.main`
  width: 496px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function Home() {

  return (
    <CalcContainer>
      <CalcHeader />
      <CalcPad />
    </CalcContainer>
  );
}

export default Home;
