import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: white;
  font-family: 'Poppins';
`;
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 90px;
`;
const Top = styled.div`
`;
const Bottom = styled.div``;
const Heading = styled.h1`
  font-weight: 500;
`;

const SocialProof = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Heading>Our Costumer says</Heading>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
    </Container>
  );
};

export default SocialProof;
