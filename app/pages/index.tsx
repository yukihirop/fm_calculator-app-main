import styled from "@emotion/styled";
import CalcHeader from 'components/card-header'

const CalcContainer = styled.main`
  width: 540px;
  height: 700px;
  border: 1px solid #000;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const CalcResultContainer = styled.div`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.bg.result};
  border-radius: .5rem;

  h2 {
    margin: 0;
    padding: 2rem 1rem;
    font-size: 3.5rem;
    text-align: right;
    color: ${props => props.theme.colors.text.primary};
  }
`

function Home() {
  return (
    <CalcContainer>
      <CalcHeader />
      <CalcResultContainer>
        <h2>399,981</h2>
      </CalcResultContainer>
    </CalcContainer>
  );
}

export default Home;
