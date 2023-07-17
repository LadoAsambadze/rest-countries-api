import { styled } from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Header>
        <Question>Where in the world?</Question>
        <ModeDiv>
          <Moon src="public/moon-light.svg" alt="change mode icon, moon" />
          <ModeSpan>Dark Mode</ModeSpan>
        </ModeDiv>
      </Header>
      <Main>
        <SearchbarMain>
          <SearchField>
            <SearchIcon src="public/search-icon.svg" alt="search icon, loop" />
            <SearchInput placeholder="Search for a country…" />
          </SearchField>
        </SearchbarMain>
        <FilterField>
          <Region>Filter by Region</Region>
          <Arrow src="public/arrow.svg" alt="arrow button" />
        </FilterField>
        <RegionList>
          <RegionName>Africa</RegionName>
          <RegionName>America</RegionName>
          <RegionName>Asia</RegionName>
          <RegionName>Europe</RegionName>
          <RegionName>Oceania</RegionName>
        </RegionList>
      </Main>
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 65px 24px;
  background: #fafafa;
`;

const SearchbarMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px 16px 32px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
`;

const SearchField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 80%;
  border: none;
  margin-left: 26px;
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  outline: none;
`;

const FilterField = styled.div`
  padding: 14px 19px 14px 24px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Region = styled.span`
  color: #111517;
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
`;

const Arrow = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;

const RegionList = styled.div`
  padding: 16px 19px 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  margin-top: 4px;
  width: 45%;
`;

const RegionName = styled.span`
  color: #111517;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 8px;
  cursor: pointer;
`;
