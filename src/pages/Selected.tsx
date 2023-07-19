import { styled } from "styled-components";
import "../App.css";
import Header from "../components/Header";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useData from "../store/useData";
import useModeStore from "../store/useMode";

interface NameProps {
  mode: Boolean;
}

export default function Selected() {
  const mode = useModeStore((state) => state.mode);
  const params = useParams();
  const data = useData((state) => state.data);
  const setData = useData((state) => state.setData);
  const filteredData = data.filter((item) => item.name.common === params.name);
  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${params.name}?fullText=true`
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      <Header />
      <Main style={{ background: mode ? "#202C36" : "#fafafa" }}>
        {filteredData.map((item, index) => (
          <InfoDiv key={index}>
            <div>
              <ButtonDiv
                style={{ background: mode ? "#2B3844" : "#fff" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <ArrowImg src="/back-light.svg" />
                <Back style={{ color: mode ? "#FFF" : "#111517" }}>Back</Back>
              </ButtonDiv>
              <Flag src={item.flags.png} alt={item.flags.alt} />
            </div>
            <TextInfo>
              <Name style={{ color: mode ? "#fff" : "#111517" }}>
                {item.name.common}
              </Name>
              <About>
                <FirstText>
                  <InfoOne mode={mode}>
                    <strong>
                      {item.name.nativeName ? "Native Name: " : null}
                    </strong>
                    {item.name.nativeName &&
                      Object.values(item.name.nativeName).map(
                        (native, index, arr) =>
                          index === arr.length - 1 ? (
                            <Text key={index}>
                              {Object.values(native.common)}
                            </Text>
                          ) : null
                      )}
                  </InfoOne>
                  <InfoOne mode={mode}>
                    <strong>{item.population ? "Population: " : null} </strong>
                    {item.population}
                  </InfoOne>
                  <InfoOne mode={mode}>
                    <strong>{item.region ? "Region: " : null} </strong>{" "}
                    {item.region}
                  </InfoOne>
                  <InfoOne mode={mode}>
                    <strong>{item.subregion ? "Sub Region: " : null} </strong>
                    {item.subregion}
                  </InfoOne>
                  <InfoOne mode={mode}>
                    <strong>{item.capital ? "Capital: " : null} </strong>{" "}
                    {item.capital}
                  </InfoOne>
                </FirstText>
                <SecondText>
                  <InfoOne mode={mode}>
                    <strong>{item.tld ? "Top Level Domain: " : null} </strong>{" "}
                    {item.tld &&
                      Object.values(item.tld).map((tl, index) => (
                        <Text key={index}>{tl}</Text>
                      ))}
                  </InfoOne>
                  <InfoOne mode={mode}>
                    <strong>{item.currencies ? "Currencies: " : null}</strong>
                    {item.currencies &&
                      Object.values(item.currencies).map((curr, index) => (
                        <Text key={index}>{curr.name}</Text>
                      ))}
                  </InfoOne>
                  <InfoOne mode={mode}>
                    <strong>{item.languages ? "Languages: " : null} </strong>
                    {item.languages &&
                      Object.values(item.languages).map((lang) => (
                        <Text key={lang}>{lang}</Text>
                      ))}
                  </InfoOne>
                </SecondText>
              </About>
              <BorderSection>
                <Border style={{ color: mode ? "#fff" : "#111517" }}>
                  {item.borders ? " Border Countries:" : null}
                </Border>
                <ListBox>
                  {item.borders &&
                    item.borders.map((border) => (
                      <Box
                        style={{
                          color: mode ? "#fff" : "#111517",
                          background: mode ? "#2B3844" : "#fff",
                        }}
                        key={border}
                      >
                        {border}
                      </Box>
                    ))}
                </ListBox>
              </BorderSection>
            </TextInfo>
          </InfoDiv>
        ))}
      </Main>
    </>
  );
}

const Main = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 28px 60px 28px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    padding: 80px 80px 360px 80px;
    align-items: center;
  }
`;

const ButtonDiv = styled.div`
  border-radius: 2px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
  padding: 6px 23px 6px 23px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 78px;
  height: 20px;
  cursor: pointer;
  margin-bottom: 64px;
`;

const ArrowImg = styled.img`
  width: 18px;
  height: 18px;
`;

const Back = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  margin-left: 8px;
`;

const Flag = styled.img`
  height: 275.924px;
  width: 319.837px;
  border-radius: 5px;
  @media (min-width: 1440px) {
    width: 560px;
    height: 401px;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const Name = styled.h1`
  color: #111517;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 28px;
  margin-bottom: 20px;
  @media (min-width: 1440px) {
    font-size: 32px;
    margin-bottom: 25px;
  }
`;

const InfoOne = styled.span<NameProps>`
  color: ${(props) => (props.mode ? "#fff" : "#111517")};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  @media (min-width: 1440px) {
    font-size: 16px;
    font-weight: 300;
  }
`;
const BorderSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    margin-top: 70px;
  }
`;
const Border = styled.h1`
  color: #111517;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: 34px;
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

const ListBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media (min-width: 1440px) {
    margin-top: 0;
    margin-left: 16px;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin-left: 10px;
  margin-top: 5px;
  width: 96px;
  height: 28px;

  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  @media (min-width: 1440px) {
    margin-left: 16px;
  }
`;

const TextInfo = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    margin-left: 120px;
    margin-top: 80px;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const FirstText = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media (min-width: 1440px) {
    margin-left: 141px;
    margin-top: 0;
  }
`;

const Text = styled.span`
  margin-left: 5px;
`;
