import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Form from "../Components/ShippingAddress/Form";
import SItems from "../Components/ShippingAddress/SItems";
import STitles from "../Components/ShippingAddress/STitles";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const H1 = styled.h1`
  font-weight: 600;
  margin: 15px 30px;
`;
const Left = styled.div`
  width: 15%;
  margin: 30px;
  background-color: #f5f5f5;
  padding: 20px;
  flex: 1;
  border-radius: 12px;
`;
const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
`;
const H3 = styled.h3`
  margin: 20px 5px;
  font-weight: 700;
`;
const Item = styled.span`
  margin: 15px 5px;
  font-weight: 700;
`;
const Right = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;
const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px 6px;
  background-color: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
  width: 15%;
`;
const ShippingAddress = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <H1>Shipping Address</H1>
          <Wrapper>
            <Left>
              <Dashboard>
                <H3>Dashboard</H3>
                <hr />
                <Item>Order History</Item>
                <Item>Returns and Complaints</Item>
                <Item>Shipping Address</Item>
                <Item>Logout</Item>
              </Dashboard>
            </Left>
            <Right>
              <Top>
                <Button>Add new shipping address</Button>
              </Top>
              <Form/>
              <STitles/>
              <SItems/>
              <SItems/>
              <SItems/>
            </Right>
          </Wrapper>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default ShippingAddress;
