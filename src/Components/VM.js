import React from "react";
import styled from "styled-components";
import { bigMobiles, smallTablets, tablets } from "../Responsive";
const Container = styled.div`
  display: flex;
  background-color: #f1f1f1;
  flex-direction: row;
  font-family: "Poppins", sans-serif;
  height: auto;
  padding: 20px;
  justify-content: space-between;
  ${smallTablets({flexDirection:"column", margin:"3rem 0rem"})}
  ${bigMobiles({flexDirection:"column", margin:"3rem 0rem"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 145px;
  margin-top: 30px;
  margin-bottom: 2rem;
  ${tablets({margin:"30px", marginLeft:"80px"})}
  ${smallTablets({ margin:"30px", marginLeft:"90px"})}
  ${bigMobiles({marginLeft:"30px"})}

`;
const Img = styled.img`
${tablets({width:"70%"})}
${bigMobiles({width:"60%"})}
`;
const H1 = styled.h1`
  font-weight: 500;
  ${tablets({fontSize:"24px"})}
  ${bigMobiles({
    fontSize:"18px",
    marginLeft:"10px"
  })}
  
`;
const Desc = styled.p`
  font-size: 18px;
  ${tablets({fontSize:"12px"})}
  ${bigMobiles({
    padding:"1rem",
    fontSize:"14px", 
  })}
`;
const VM = () => {
  return (
    <Container>
      <Left>
        <Top>
          <Img src="vision.png" />
        </Top>
        <Bottom>
          <H1>Our Vision</H1>
          <Desc>
            To be the most trusted gifting brand to celebrate the joy of giving.
          </Desc>
        </Bottom>
      </Left>
      <Right>
        <Top>
          <Img src="mission.png" />
        </Top>
        <Bottom>
          <H1>Our Mission</H1>
          <Desc>
            Wow every customer every time, through premium products, services,
            value-for-money driven by innovation, technology & people-first
            approach
          </Desc>
        </Bottom>
      </Right>
    </Container>
  );
};

export default VM;
