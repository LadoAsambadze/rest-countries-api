import { styled } from "styled-components";
import "../App.css";
import Header from "../components/Header";

export default function Selected() {
  return (
    <>
      <Header />
      <Main>
        <InfoDiv>
          <div>
            <ButtonDiv>
              <ArrowImg src="/back-light.svg" />
              <Back>Back</Back>
            </ButtonDiv>
            <Flag src="/germany.png" />
          </div>
          <TextInfo>
            <Name>Belgium</Name>
            <About>
              <FirstText>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
              </FirstText>
              <SecondText>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
                <InfoOne>
                  <strong>Native Name: </strong> België
                </InfoOne>
              </SecondText>
            </About>
            <BorderSection>
              <Border>Border Countries: </Border>
              <ListBox>
                <Box>Germany</Box>
                <Box>Germany</Box>
                <Box>Germany</Box>
              </ListBox>
            </BorderSection>
          </TextInfo>
        </InfoDiv>
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
