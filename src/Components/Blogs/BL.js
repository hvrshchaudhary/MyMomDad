import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;
const Archives = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;
const Ai = styled.span`
  font-weight: 200;
  color: #6a983c;
  margin-top: 8px;
  font-size: 14px;
`;
const Category = styled.div`
  font-weight: 600;
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  font-size: 20px;
`;
const Ci = styled.span`
  font-weight: 200;
  margin-top: 8px;
  color: #a9a9a9;
  font-size: 14px;
`;
const JoinOurList = styled.div`
  font-weight: 600;
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  font-size: 20px;
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #A9A9A9;
`;
const EmailAddress = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #d1d1d1;
  background-color: #f9f9f9;
  padding: 10px 20px;
  border-radius: 12px;
  margin-top: 28px;
`;
const Input = styled.input`
  border: none;
  background-color: #f9f9f9;
`;
const Subscribe = styled.div`
  font-weight: 700;
  font-size: 12px;
`;
const BL = () => {
  return (
    <Container>
      <Archives>
        Archives
        <Ai>March 2020</Ai>
        <Ai>February 2022</Ai>
        <Ai>January 2022</Ai>
        <Ai>November 2022</Ai>
        <Ai>December 2022</Ai>
      </Archives>
      <Category>
        Category
        <Ci>Gift</Ci>
        <Ci>Gift</Ci>
        <Ci>Gift</Ci>
        <Ci>Gift</Ci>
        <Ci>Gift</Ci>
      </Category>
      <JoinOurList>
        Join our list
        <Span>
          Signup to be the first to hear about exclusive deals, special offers
          from ours.
        </Span>
      </JoinOurList>
      <EmailAddress>
        <Input placeholder="Your email address" />
        <Subscribe>Subscribe</Subscribe>
      </EmailAddress>
    </Container>
  );
};

export default BL;
