import { styled } from "styled-components";
import "../App.css";
import Header from "../components/Header";

export default function Selected() {
  return (
    <>
      <Header />
      <Main>
        <InfoDiv>
          <ButtonDiv>
            <ArrowImg src="/back-light.svg" />
            <Back>Back</Back>
          </ButtonDiv>
          <Flag src="/germany.png" />
          <Name>Belgium</Name>
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
          <InfoOne style={{ marginTop: "32px" }}>
            <strong>Native Name: </strong> België
          </InfoOne>
          <InfoOne>
            <strong>Native Name: </strong> België
          </InfoOne>
          <InfoOne>
            <strong>Native Name: </strong> België
          </InfoOne>
          <Border>Border Countries: </Border>
          <ListBox>
            <Box>Germany</Box>
            <Box>Germany</Box>
            <Box>Germany</Box>
          </ListBox>
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
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  color: #111517;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 28px;
  margin-bottom: 20px;
`;

const InfoOne = styled.span`
  color: #111517;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;
const Border = styled.h1`
  color: #111517;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: 34px;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;
const Box = styled.div`
  padding: 6px 16px 6px 16px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
`;
