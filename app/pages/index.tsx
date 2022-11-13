import styled from "@emotion/styled";
import CalcHeader from 'components/card-header'

const CalcContainer = styled.main`
  width: 540px;
  height: 700px;
  border: 1px solid #000;
  margin: auto;
  display: flex;
`;

function Home() {
  return (
    <CalcContainer>
      <CalcHeader />
    </CalcContainer>
  );
}

export default Home;
