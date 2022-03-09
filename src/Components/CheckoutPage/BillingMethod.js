import React from "react";
import styled from "styled-components";
import { bigMobiles } from "../../Responsive";

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  margin-top: 60px;
  ${bigMobiles({ marginTop:"20px"})}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 32px;
  ${bigMobiles({ fontSize:"22px"})}
`;
const Span = styled.div`
  display: flex;
  justify-content: space-between;
`;
const S1 = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #a9a9a9;
  ${bigMobiles({ fontSize:"12px" })}
`;
const S2 = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #a9a9a9;
  ${bigMobiles({ fontSize:"12px" })}
`;
const Bottom = styled.div``;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 17px 0;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  padding: 15px 20px;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10px;
`;
const L = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  align-items: center;
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 12px;
`;
const Price = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #6a983c;
`;
const R = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
`;
const Ap = styled.span`
  font-weight: 600;
  font-size: 12px;
`;
const BillingMethod = () => {
  return (
    <Container>
      <Top>
        <H1>Billing method</H1>
        <Span>
          <S1>Please enter your payment method</S1>
          <S2>Step 2 of 5</S2>
        </Span>
      </Top>
      <Bottom>
        <Row>
          <input type="radio" />
          <Div>
            <L>
              <Name>FedEx</Name>
              <Price>₹+32 </Price>
            </L>
            <R>
              <Ap>Additional price</Ap>
              <img src="fedex.png" />
            </R>
          </Div>
        </Row>
        <Row>
          <input type="radio" />
          <Div>
            <L>
              <Name>DHL</Name>
              <Price>₹+15</Price>
            </L>
            <R>
              <Ap>Additional price</Ap>
              <img style={{height:"auto"}} src="dhl.png" />
            </R>
          </Div>
        </Row>
      </Bottom>
    </Container>
  );
};

export default BillingMethod;
