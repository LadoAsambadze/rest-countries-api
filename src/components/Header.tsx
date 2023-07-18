import { styled } from "styled-components";
import { useModeStore } from "../store/store";

export default function Header() {
  const { mode, setMode } = useModeStore.getState();
  return (
    <>
      <HeaderDiv style={{ background: mode ? " #2B3844" : "#fff" }}>
        <Question style={{ color: mode ? "#FFF" : "#111517" }}>
          Where in the world?
        </Question>
        <ModeDiv
          onClick={() => {
            setMode(!mode);
          }}
        >
          <Moon
            src={mode ? "/moon-dark.svg" : "/moon-light.svg"}
            alt="change mode icon, moon"
          />
          <ModeSpan style={{ color: mode ? "#FFF" : "#111517" }}>
            Dark Mode
          </ModeSpan>
        </ModeDiv>
      </HeaderDiv>
    </>
  );
}

const HeaderDiv = styled.div`
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
