import { styled } from "styled-components";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [content, setContent] = useState("Filter by Regions");
  const [name, setName] = useState("");
  console.log(data);

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
              <SearchInput
                placeholder="Search for a country…"
                onChange={(e) => setName(e.target.value)}
              />
            </SearchField>
          </SearchbarMain>
          <FilterField onClick={() => setActive(!active)}>
            <Region>{content}</Region>
            <Arrow src="public/arrow.svg" alt="arrow button" />
            <RegionList style={{ display: active ? "flex" : "none" }}>
              <RegionName onClick={filterHandler}>
                Filter by Regions(All)
              </RegionName>
              <RegionName onClick={filterHandler}>Africa</RegionName>
              <RegionName onClick={filterHandler}>Americas</RegionName>
              <RegionName onClick={filterHandler}>Asia</RegionName>
              <RegionName onClick={filterHandler}>Europe</RegionName>
              <RegionName onClick={filterHandler}>Oceania</RegionName>
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
                <InfoDiv>
                  <Name>{item.name.common}</Name>
                  <About>
                    <strong>Population: </strong>
                    {item.population}
                  </About>
                  <About>
                    <strong>Region: </strong>
                    {item.region}
                  </About>
                  <About>
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
  position: relative;
  cursor: pointer;
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
  background: #fff;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  width: 267px;
  height: 336px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
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
