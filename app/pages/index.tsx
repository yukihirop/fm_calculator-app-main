import styled from "@emotion/styled";
import CalcHeader from "components/calc-header";
import CalcPad from 'components/calc-pad';

const CalcContainer = styled.main`
  max-width: 496px;
  padding: .5rem;
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
