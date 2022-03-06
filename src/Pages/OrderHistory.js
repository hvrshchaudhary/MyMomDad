import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Titles from "../Components/OrderHistory/Titles";
import ItemsPending from "../Components/OrderHistory/ItemsPending";
import ItemsCompleted from "../Components/OrderHistory/ItemsCompleted";
import ItemsCancelled from "../Components/OrderHistory/ItemsCancelled";
import Details from "../Components/OrderHistory/Details";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px ;
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
const OrderHistory = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <H1>Order History</H1>
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
              <Titles />
              <ItemsPending/>
              <ItemsCompleted/>
              <ItemsCancelled/>
              <Details/>
              <ItemsCancelled />
            </Right>
          </Wrapper>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default OrderHistory;
