import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { bigMobiles, smallTablets, tablets } from "../Responsive";

const Container = styled.div`
  height: auto;
  background-color: white;
  font-family: "Poppins";
  ${tablets({  })}
`;
const Wrapper = styled.div`
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 90px;
  ${tablets({ paddingLeft:"30px" })}
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Heading = styled.h1`
  font-weight: 500;
  ${tablets({ fontSize:"20px" })}
`;
const Button = styled.button`
  border: none;
  font-weight: 700;
  font-size: 16px;
  background-color: white;
  display: flex;
  align-items: center;
  ${tablets({ fontSize:"13px" })}
`;
const Bottom = styled.div`  
  height: auto;
  display: grid;
  margin: 30px 0 ;
  grid-template-columns: 1.7fr 1.1fr 1.8fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left center right";
  /* ${tablets({ height:"50vh" })} */
  ${smallTablets({ display:"flex", flexDirection:"row" })}
  ${bigMobiles({ display:"flex", flexDirection:"column" })}
`;
const Img = styled.img`
  
`;

const Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  position: relative;
  ${smallTablets({ flex:"1", width:"24vw" })}
  ${bigMobiles({ width:"auto" })}

`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const InfoDaddy = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  ${bigMobiles({ paddingBottom:"90px" })}

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
  ${smallTablets({ flex:"1", width:"27vw" })}
  ${bigMobiles({ padding:"20px 0", width:"auto" })}
`;
const CFooter = styled.div`
  display: flex;
  flex-direction: column;
  ${bigMobiles({ margin:"20px" })}
`;
const InHd1 = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 20px;
  ${tablets({ fontSize:"16px" })}
  ${smallTablets({ fontSize:"15px" })}
  ${bigMobiles({ fontSize:"20px" })}

`;
const T = styled.div`
  margin: 20px 0;
  ${tablets({ margin:"13px" })}
  ${smallTablets({ margin:"0px" })}
`;
const BGifts = styled.button`
  border: none;
  background-color: #f4f8ec;
  padding: 0 20px;
  border-radius: 10px;
  color: #6a983c;
  margin-bottom: 10px;
`;

const B = styled.div`
  ${tablets({ paddingLeft:"13px" })}
`;
const Author = styled.span`
  color: black;
  font-weight: 200;
  font-size: 12px;
  ${tablets({ paddingRight:"5px" })}
`;
const Dat = styled.span`
  font-weight: 200;
  color: black;
  ${smallTablets({ fontSize:"12px" })}
`;

const Right = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${smallTablets({ flex:"1"})}
`;
const InHd2 = styled.h1`
  color: black;
  font-weight: 500;
  font-size: 20px;
  ${tablets({ fontSize:"16px" })}
  ${smallTablets({ fontSize:"12px", fontWeight:"300" })}
  ${bigMobiles({ fontSize:"14px" })}
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
const Rl = styled.div`
  ${tablets({ display:"flex", flexDirection:"column", justifyContent:"center" })}
  ${smallTablets({ width:"150px" })}
  
`;
const Br = styled.div`
  ${tablets({ paddingLeft:"0" })}
`;
const ImgR = styled.img`
  ${smallTablets({  })}
  
`;
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
              <InfoDaddy>
                <InFooter>
                  <InHd>20 Thoughtful Gifts For Mom</InHd>
                  <Img src="" />
                  <Author1>Author 17.2.2022</Author1>
                </InFooter>
              </InfoDaddy>
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
                <Br>
                  <Author>Author</Author>
                  <Dat>17.2.2022</Dat>
                </Br>
              </Rl>
              <Rr>
                <ImgR src="rr.png" />
              </Rr>
            </Rt>
            <Rm>
              <Rl>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <Br>
                  <Author>Author</Author>
                  <Dat>17.2.2022</Dat>
                </Br>
              </Rl>
              <Rr>
                <ImgR src="rr.png" />
              </Rr>
            </Rm>
            <Rb>
              <Rl>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <InHd2>20 Thoughtful Gifts For Mom</InHd2>
                <Br>
                  <Author>Author</Author>
                  <Dat>17.2.2022</Dat>
                </Br>
              </Rl>
              <Rr>
                <ImgR src="rr.png" />
              </Rr>
            </Rb>
          </Right>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Blog;
