import React from "react";
import styled from "styled-components";
import { bigMobiles, smallTablets } from "../Responsive";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  ${smallTablets({margin:"30px"})}
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  ${bigMobiles({
    flexDirection:"column"
  })}
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;

`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const H = styled.h1`
  font-weight: 600;
  margin: 50px;
  margin-bottom: 0px;
  ${smallTablets({margin:"20px"})}
  ${bigMobiles({fontSize:"20px", marginTop:'10px'})}
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
  ${smallTablets({margin:"10px"})}
  ${bigMobiles({margin:"25px 50px"})}
`;
const ImgC = styled.div`
margin:0 50px;
${smallTablets({margin:"10px"})}
${bigMobiles({
    margin: "0px 0px"
  })}
`;
const Img = styled.img`
${bigMobiles({
    display:"none"
  })}
`;
const Info = styled.div`
`;
const H2 = styled.h2`
  font-weight: 500;
  margin-bottom: 20px;
  ${bigMobiles({
    fontSize:"18px"
  })}
`;
const Desc = styled.p`
${bigMobiles({
  fontSize:"14px"  
  })}
  `;
const Values = () => {
  return (
    <Container>
      <H>Our Values</H>
      <Content>
        <Left>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
        </Left>
        <Right>
        <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
        </Right>
      </Content>
    </Container>
  );
};

export default Values;
