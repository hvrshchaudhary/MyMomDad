import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
`;
const Left = styled.div``;
const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #a9a9a9;
`;
const P = styled.span`
  padding: 0 10px;
  font-size: 12px;
`;
const Center = styled.div``;
const Button = styled.button`
  background-color: #6a983c;
  color: white;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  padding: 12px 16px;
  border: 2px solid #46760a;
  border-radius: 12px;
  margin: 10px;
  margin-bottom: 0;
`;
const Right = styled.div``;
const Buttonx = styled.button`
  border: none;
  margin: 10px 0;
  font-weight: 300;
  font-size: 12px;
  padding: 1px 7px;
  border-radius: 12px;
  color: #6a983c;
  margin-right: 10px;
  background-color: #f4f8ec;
  cursor: pointer;
  width: 30px;
`;
const Bottom = () => {
  return (
    <Container>
      <Left>
        <Span>Page:</Span>
        <P style={{color:"#a9a9a9"}}>1</P>
        <P>2</P>
        <P>3</P>
        <P>4</P>
      </Left>
      <Center>
        <Button>
          Next page
          <img style={{ padding: "0 7px" }} src="arrow.png" />
        </Button>
      </Center>
      <Right>
        <Buttonx>198</Buttonx>
        <Span>articles</Span>
      </Right>
    </Container>
  );
};

export default Bottom;
