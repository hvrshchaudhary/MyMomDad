import React from "react";
import Footer from "../Components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import OrderSummary from "../Components/OrderSummary";
import BillingInfo from "../Components/CheckoutPage/BillingInfo";
import BillingMethod from "../Components/CheckoutPage/BillingMethod";
import PaymentMethod from "../Components/CheckoutPage/PaymentMethod";
import AdditionalInformation from "../Components/CheckoutPage/AdditionalInformation";
import Confirmation from "../Components/CheckoutPage/Confirmation";
import Copyright from "../Components/CheckoutPage/Copyright";
import HeaderW from "../Components/HeaderW";
import { bigMobiles, smallTablets } from "../Responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
  margin-bottom: 0;
  ${bigMobiles({ margin:"20px" })}
  
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${smallTablets({ display:"none" })}
`;
const Checkout = () => {
  return (
    <>
      <Router>
        <HeaderW />
        <Container>
          <Wrapper>
            <Left>
              <BillingInfo />
              <BillingMethod />
              <PaymentMethod />
              <AdditionalInformation />
              <Confirmation />
            </Left>
            <Right>
              <OrderSummary />
            </Right>
          </Wrapper>
          <Copyright />
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default Checkout;
