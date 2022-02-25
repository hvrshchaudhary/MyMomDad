import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #f1f1f1;
  flex-direction: row;
  height: 80vh;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
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
  justify-content: center;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 145px;
  margin-top: 30px;
`;
const Img = styled.img``;
const H1 = styled.h1`
  font-weight: 500;
`;
const Desc = styled.p`
  font-size: 18px;
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
