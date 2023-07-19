import { styled } from "styled-components";
import "../App.css";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useData from "../store/useData";

export default function Selected() {
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
      <Main>
        {filteredData.map((item, index) => (
          <InfoDiv key={index}>
            <div>
              <ButtonDiv
                onClick={() => {
                  navigate("/");
                }}
              >
                <ArrowImg src="/back-light.svg" />
                <Back>Back</Back>
              </ButtonDiv>
              <Flag src={item.flags.png} alt={item.flags.alt} />
            </div>
            <TextInfo>
              <Name>{item.name.common}</Name>
              <About>
                <FirstText>
                  <InfoOne>
                    <strong>Native Name: </strong>
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
                  <InfoOne>
                    <strong>Population: </strong>
                    {item.population}
                  </InfoOne>
                  <InfoOne>
                    <strong>Region: </strong> {item.region}
                  </InfoOne>
                  <InfoOne>
                    <strong>Sub Region: </strong>
                    {item.subregion}
                  </InfoOne>
                  <InfoOne>
                    <strong>Capital: </strong> {item.capital}
                  </InfoOne>
                </FirstText>
                <SecondText>
                  <InfoOne>
                    <strong>Top Level Domain: </strong>{" "}
                    {item.tld &&
                      Object.values(item.tld).map((tl, index) => (
                        <Text key={index}>{tl}</Text>
                      ))}
                  </InfoOne>
                  <InfoOne>
                    <strong>Currencies: </strong>
                    {item.currencies &&
                      Object.values(item.currencies).map((curr, index) => (
                        <Text key={index}>{curr.name}</Text>
                      ))}
                  </InfoOne>
                  <InfoOne>
                    <strong>Languages: </strong>
                    {item.languages &&
                      Object.values(item.languages).map((lang) => (
                        <Text key={lang}>{lang}</Text>
                      ))}
                  </InfoOne>
                </SecondText>
              </About>
              <BorderSection>
                <Border>Border Countries: </Border>
                <ListBox>
                  {item.borders &&
                    item.borders.map((border) => (
                      <Box key={border}>{border}</Box>
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
  background: #fafafa;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    padding: 80px 80px 360px 80px;
    align-items: center;
  }
`;

const ButtonDiv = styled.div`
  border-radius: 2px;
  background: #fff;
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
  color: #111517;
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

const InfoOne = styled.span`
  color: #111517;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  @media (min-width: 1440px) {
    margin-top: 0;
    margin-left: 16px;
  }
`;
const Box = styled.div`
  padding: 6px 16px 6px 16px;
  border-radius: 2px;
  background: #fff;
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
