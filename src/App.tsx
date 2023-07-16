import { styled } from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Header>
        <Question>Where in the world?</Question>
        <ModeDiv>
          <Moon src="public/moon-light.svg" />
          <ModeSpan>Dark Mode</ModeSpan>
        </ModeDiv>
      </Header>
    </>
  );
}

export default App;

const Header = styled.div`
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px 32px 16px;
  @media (min-width: 1440px) {
    padding: 24px 80px 24px 80px;
  }
`;
const Question = styled.span`
  color: #111517;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  @media (min-width: 1440px) {
    padding: 24px 80px 24px 80px;
    font-size: 24px;
  }
`;

const ModeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Moon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  @media (min-width: 1440px) {
    width: 20px;
    height: 20px;
  }
`;

const ModeSpan = styled.span`
  color: #111517;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 8px;
  cursor: pointer;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;
