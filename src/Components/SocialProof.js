import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  background-color: white;
  font-family: 'Poppins';
  padding-bottom: 40px;
`;
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 90px;
  `;
const Top = styled.div`
`;
const Heading = styled.h1`
  font-weight: 500;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;
const Card = styled.div`
  background-color: #F1F1F1;
  border: 1px solid #F1F1F1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const Span = styled.span`
  font-weight: 500;
  text-align: center;
  font-size: 20px;
`;
const SpanMini = styled.span`
  color: #A9A9A9;
  font-weight: 600;
  font-size: 14px;
  margin: 20px;
`;
const Img = styled.img`
  margin-top: 120px;
  position: absolute;
`;
const SocialProof = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Heading>Our Costumer says</Heading>
        </Top>
        <Bottom>
          <Card>
            <Span>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. “</Span>
            <SpanMini>Name and Surname</SpanMini>
            <Img src="pfp.svg"/>
          </Card>
          <Card>
            <Span>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. “</Span>
            <SpanMini>Name and Surname</SpanMini>
            <Img src="pfp.svg"/>
          </Card>
          <Card>
            <Span>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. “</Span>
            <SpanMini>Name and Surname</SpanMini>
            <Img src="pfp.svg"/>
          </Card>
          <Card>
            <Span>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. “</Span>
            <SpanMini>Name and Surname</SpanMini>
            <Img src="pfp.svg"/>
          </Card>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default SocialProof;
