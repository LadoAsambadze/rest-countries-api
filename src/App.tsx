import { styled } from "styled-components";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";

function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("Filter by Regions(All)");
  const [mode, setMode] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <Main style={{ background: mode ? "#202C36" : "#fafafa" }}>
        <SearchSection
          mode={mode}
          setMode={setMode}
          content={content}
          setContent={setContent}
          active={active}
          setActive={setActive}
          name={name}
          setName={setName}
        />
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 65px 24px;
  @media (min-width: 1440px) {
    padding: 48px 80px 45px 80px;
  }
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
