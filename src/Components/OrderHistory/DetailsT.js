import React from "react";
import styled from "styled-components";
import { smallTablets } from "../../Responsive";

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
  ${smallTablets({fontSize:"12px", marginBottom:"10px"})}
`;
const ShippingMethod = styled.div``;
const Span1 = styled.span`
  ${smallTablets({fontSize:"12px"})}
`;
const Span2 = styled.span`
  color: #FF7E27;
  font-weight: 500;
  ${smallTablets({fontSize:"12px"})}
`;
const DetailsT = () => {
  return (
    <Container>
      <Left>
        <ShippingAddress>
          <H1>Shipping address</H1>
          <Span>
            <L>Aman Gupta</L>
            <L>4th Floor, Gupta Apartment,</L>
            <L>Okhla, New Delhi,</L>
            <L>India - 110025</L>
          </Span>
        </ShippingAddress>
        <ShippingMethod>
          <H1>Shipping method and cost</H1>
          <Span1>DHL <Span2>₹40,00</Span2></Span1>
        </ShippingMethod>
      </Left>
      <Right>
        <ShippingAddress>
          <H1>Billing address</H1>
          <Span>
            <L>Aman Gupta</L>
            <L>4th Floor, Gupta Apartment,</L>
            <L>Okhla, New Delhi,</L>
            <L>India - 110025</L>
          </Span>
        </ShippingAddress>
        <ShippingMethod>
          <H1>Payment Method</H1>
          <Span>UPI</Span>
        </ShippingMethod>
      </Right>
    </Container>
  );
};

export default DetailsT;
