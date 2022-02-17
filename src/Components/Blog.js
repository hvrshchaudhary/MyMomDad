import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  background-color: white;
  font-family: "Poppins";
`;
const Wrapper = styled.div`
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 90px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Heading = styled.h1`
  font-weight: 500;
`;
const Button = styled.button`
  border: none;
  font-weight: 700;
  font-size: 16px;
  background-color: white;
`;
const Bottom = styled.div`
  height: 70vh;
  display: grid;
  grid-template-columns: 1.7fr 1.1fr 1.8fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left center right";
`;
const Img = styled.img``;
const Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;
const InHd = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 24px;
  padding: 0px 20px;
`;
const InFooter = styled.div`
  position: absolute;
  height: 35%;
  width: 99%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(0deg, black, transparent);
`;
const Author1 = styled.span`
  color: white;
  padding: 0 20px;
  font-weight: 200;
  font-size: 12px;
`;

const Center = styled.div`
  grid-area: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  justify-content: center;
`;
const CFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
const InHd1 = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 20px;
`;
const T = styled.div`
  margin: 20px 0;
`;
const BGifts = styled.button`
  border: none;
  background-color: #f4f8ec;
  padding: 0 20px;
  border-radius: 10px;  
  color: #6a983c;
  margin-bottom: 10px;
`;

const B = styled.div``;
const Author = styled.span`
  color: black;
  font-weight: 200;
  font-size: 12px;
`;
const Dat = styled.span`
  font-weight: 200;
  color: black;
`;

const Right = styled.div`
  /* padding: 20px; */
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const InHd2 = styled.h1`
  color: black;
  font-weight: 500;
  font-size: 20px;
`;
const Rt = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
const Rr = styled.div``;
const Rm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Rb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Rl = styled.div``;

const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Heading>Read our Blog posts</Heading>
          <Button>
            Go to Blog <IoIosArrowForward color="gray" />
          </Button>
        </Top>
        <Bottom>
          <Left>
            <Info>
              <Img src="BirthdayGift.png" />
              <InFooter>
                <InHd>20 Thoughtful Gifts For Mom</InHd>
                <Img src="" />
                <Author1>Author 17.2.2022</Author1>
              </InFooter>
            </Info>
          </Left>
          <Center>
            <Img src="mm.png" />
            <CFooter>
              <T>
                <BGifts>Birthday Gifts</BGifts>
                <InHd1>20 Thoughtful Gifts For Mom</InHd1>
                <InHd1>20 Thoughtful Gifts For Mom</InHd1>
              </T>
              <B>
                <Author>Author</Author>
                <Dat>17.2.2022</Dat>
              </B>
            </CFooter>
          </Center>
          <Right>
            <Rt>
              <Rl>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <B>
                  <Author>Author</Author>
                  <Dat>17.2.2022</Dat>
                </B>
              </Rl>
              <Rr>
                <Img src="rr.png" />
              </Rr>
            </Rt>
            <Rm>
              <Rl>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <B>
                  <Author>Author</Author>
                  <Dat>17.2.2022</Dat>
                </B>
              </Rl>
              <Rr>
                <Img src="rr.png" />
              </Rr>
            </Rm>
            <Rb>
              <Rl>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <B>
                  <Author>Author</Author>
                  <Dat>17.2.2022</Dat>
                </B>
              </Rl>
              <Rr>
                <Img src="rr.png" />
              </Rr>
            </Rb>
          </Right>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Blog;
