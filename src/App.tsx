import { styled } from "styled-components";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [content, setContent] = useState("Filter by Regions(All)");
  const [name, setName] = useState("");
  const [mode, setMode] = useState(false);

  const filterHandler = (e) => {
    setContent(e.target.textContent);
    setActive(!active);
  };

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header style={{ background: mode ? " #2B3844" : "#fff" }}>
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
      </Header>
      <Main style={{ background: mode ? "#202C36" : "#fafafa" }}>
        <SearchSection>
          <SearchbarMain style={{ background: mode ? "#2B3844" : "#FFF" }}>
            <SearchField>
              <SearchIcon
                src="public/search-icon.svg"
                alt="search icon, loop"
              />
              <SearchInput
                modeCheck={mode}
                style={{
                  background: mode ? "#2B3844" : "#FFF",
                  color: mode ? "#FFF" : "#C4C4C4",
                }}
                placeholder="Search for a country…"
                onChange={(e) => setName(e.target.value)}
              />
            </SearchField>
          </SearchbarMain>
          <FilterField
            style={{ background: mode ? "#2B3844" : "#FFF" }}
            onClick={() => setActive(!active)}
          >
            <Region style={{ color: mode ? "#FFF" : "#111517" }}>
              {content}
            </Region>
            <Arrow
              src={mode ? "/arrow-dark.svg" : "/arrow.svg"}
              alt="arrow button"
            />
            <RegionList
              style={{
                display: active ? "flex" : "none",
                background: mode ? "#2B3844" : "#FFF",
              }}
            >
              <RegionName
                onClick={filterHandler}
                style={{ color: mode ? "#FFF" : "#111517" }}
              >
                Filter by Regions(All)
              </RegionName>
              <RegionName modeCheck={mode} onClick={filterHandler}>
                Africa
              </RegionName>
              <RegionName modeCheck={mode} onClick={filterHandler}>
                Americas
              </RegionName>
              <RegionName modeCheck={mode} onClick={filterHandler}>
                Asia
              </RegionName>
              <RegionName modeCheck={mode} onClick={filterHandler}>
                Europe
              </RegionName>
              <RegionName modeCheck={mode} onClick={filterHandler}>
                Oceania
              </RegionName>
            </RegionList>
          </FilterField>
        </SearchSection>
        <FlagSection>
          {data
            .filter((item) => {
              if (content && content !== "Filter by Regions(All)") {
                return (
                  item.region.toLowerCase() === content.toLocaleLowerCase()
                );
              } else {
                return true;
              }
            })
            .filter((item) =>
              item.name.common.toLowerCase().includes(name.toLowerCase())
            )
            .map((item, index) => (
              <FlagDiv key={index}>
                <Flag src={item.flags.png} alt={item.flags.alt} />
                <InfoDiv style={{ background: mode ? "#2B3844" : "#FFF" }}>
                  <Name modeCheck={mode}>{item.name.common}</Name>
                  <About modeCheck={mode}>
                    <strong>Population: </strong>
                    {item.population}
                  </About>
                  <About modeCheck={mode}>
                    <strong>Region: </strong>
                    {item.region}
                  </About>
                  <About modeCheck={mode}>
                    <strong>Capital: </strong>
                    {item.capital}
                  </About>
                </InfoDiv>
              </FlagDiv>
            ))}
        </FlagSection>
      </Main>
    </>
  );
}

export default App;

const Header = styled.div`
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 65px 24px;
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
`;

const SearchInput = styled.input`
  width: 80%;
  border: none;
  margin-left: 26px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  outline: none;
  &::placeholder {
    color: ${(props) => (props.modeCheck ? "#fff" : "#C4C4C4")};
  }
  @media (min-width: 1440px) {
    width: 400px;
  }
`;

const FilterField = styled.div`
  padding: 14px 19px 14px 24px;
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (min-width: 1440px) {
    width: 10%;
    margin: 0;
  }
`;

const Region = styled.span`
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Arrow = styled.img`
  width: 10px;
  height: 10px;
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
  width: 80%;
  left: 0;
  top: 55px;
  position: absolute;
  @media (min-width: 1440px) {
  }
`;

const RegionName = styled.span`
  color: ${(props) => (props.modeCheck ? "#fff" : "#111517")};
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
  row-gap: 28px;
  margin-top: 28px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 70px;
    margin-top: 48px;
  }
`;

const FlagDiv = styled.div`
  width: 267px;
  height: 336px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  justify-content: space-between;
`;

const Flag = styled.img`
  height: 160px;
`;

const InfoDiv = styled.div`
  padding: 24px 0px 38px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.span`
  color: ${(proprs) => (proprs.modeCheck ? "#fff" : "#111517")};
  font-family: Nunito Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 26px;
  margin-bottom: 16px;
`;

const About = styled.span`
  color: ${(proprs) => (proprs.modeCheck ? "#fff" : "#111517")};
  font-family: Nunito Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 8px;
`;
