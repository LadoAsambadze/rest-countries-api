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
        <SearchSection>
          <SearchbarMain>
            <SearchField>
              <SearchIcon
                src="public/search-icon.svg"
                alt="search icon, loop"
              />
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
        </SearchSection>
        <FlagSection>
          <FlagDiv>
            <Flag src="flag.png" />
            <InfoDiv>
              <Name>Germany</Name>
              <About>
                <strong>Population:</strong> 81,770,900
              </About>
              <About>
                <strong>Region:</strong> Europe
              </About>
              <About>
                <strong>Capital:</strong> Berlin
              </About>
            </InfoDiv>
          </FlagDiv>
        </FlagSection>
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
  @media (min-width: 1440px) {
    padding: 48px 80px 45px 80px;
  }
`;

const SearchSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const SearchbarMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px 16px 32px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const SearchField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 1440px) {
    padding-right: 20px;
  }
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
  @media (min-width: 1440px) {
    width: 400px;
  }
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
  @media (min-width: 1440px) {
    width: 10%;
    margin: 0;
  }
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
  display: none;
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

const FlagSection = styled.section`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(1, 1fr);
  row-gap: 40px;
  margin-top: 28px;
`;

const FlagDiv = styled.div`
  background: #fff;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  width: 267px;

  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

const Flag = styled.img``;

const InfoDiv = styled.div`
  padding: 24px 0px 38px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.span`
  color: #111517;
  font-family: Nunito Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 26px;
  margin-bottom: 16px;
`;

const About = styled.span`
  color: #111517;
  font-family: Nunito Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 8px;
`;
