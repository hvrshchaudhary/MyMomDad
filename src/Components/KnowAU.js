import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 45px;
  font-family: "Poppins", sans-serif;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const H1 = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 35px;
`;
const Desc = styled.h5`
  font-weight: 350;
  font-size: 18px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
`;
const KnowAU = () => {
  return (
    <Container>
      <Left>
        <H1>Know About Us</H1>
        <Desc>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like)
        </Desc>
      </Left>
      <Right>
          <Img src="bga.png"/>
      </Right>
    </Container>
  );
};

export default KnowAU;
