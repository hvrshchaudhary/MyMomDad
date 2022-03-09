import React from "react";
import styled from "styled-components";
import { smallScreen, smallTablets } from "../../Responsive";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const ShippingAddress = styled.div``;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-bottom:20px ;
  ${smallScreen({fontSize:"17px", marginBottom:"15px"})}
  ${smallTablets({fontSize:"14px", marginBottom:"12px"})}
`;
const Span = styled.div`
  display: flex;
  flex-direction: column;
  ${smallTablets({fontSize:"12px"})}
`;
const L = styled.span`
  font-weight: 300;
  margin-bottom:12px ;
  font-size: 18px;
  ${smallScreen({fontSize:"13px", marginBottom:"10px"})}
  ${smallTablets({fontSize:"12px", marginBottom:"9px"})}
`;
const RDetailsT = () => {
  return (
    <Container>
      <Left>
        <ShippingAddress>
          <H1>Contact information</H1>
          <Span>
            <L>Aman Gupta</L>
            <L>4th Floor, Gupta Apartment,</L>
            <L>Okhla, New Delhi,</L>
            <L>India - 110025</L>
          </Span>
        </ShippingAddress>
      </Left>
      <Right>
        <ShippingAddress>
          <H1>Order information</H1>
          <Span>
            <L>Order Number: 12345345456</L>
            <L>Date: 29.02.2022</L>
          </Span>
        </ShippingAddress>
      </Right>
    </Container>
  );
};

export default RDetailsT;
