import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  margin-top: 60px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 32px;
`;
const Span = styled.div`
  display: flex;
  justify-content: space-between;
`;
const S1 = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #a9a9a9;
`;
const S2 = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #a9a9a9;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  margin-top: 30px;
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.textarea`
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  font-weight: 400;
  font-size: 14px;
  padding: 15px 20px;
  height: 150px;
  width: 100%;
`;
const AdditionalInformation = () => {
  return (
    <Container>
      <Top>
        <H1>Additional information</H1>
        <Span>
          <S1>Need something else? We will make it for you!</S1>
          <S2>Step 4 of 5</S2>
        </Span>
      </Top>
      <Row>
        <H3>Order notes</H3>
        <Input placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..." />
      </Row>
    </Container>
  );
};

export default AdditionalInformation;
