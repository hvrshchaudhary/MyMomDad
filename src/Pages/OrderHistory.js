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
import HeaderW from "../Components/HeaderW";
import { bigMobiles, smallMobiles, smallTablets } from "../Responsive";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px ;
`;
const Wrapper = styled.div`
  display: flex;
  ${bigMobiles({padding:"30px", paddingTop:"20px"})}
  ${smallMobiles({padding:"15px", paddingTop:"10px"})}
`;
const H1 = styled.h1`
  font-weight: 600;
  margin: 15px 30px;
  ${smallTablets({margin:"18px", fontSize:"20px"})}
  ${bigMobiles({marginBottom:"0"})}
  ${smallMobiles({margin:"14px", fontSize:"14px"})}
`;
const Left = styled.div`
  width: 15%;
  margin: 30px;
  background-color: #f5f5f5;
  padding: 20px;
  flex: 1;
  border-radius: 12px;
  ${smallTablets({margin:"20px", padding:"10px"})}
  ${bigMobiles({display:"none"})}
  ${smallMobiles({margin:"15px"})}
`;
const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
`;
const H3 = styled.h3`
  margin: 20px 5px;
  font-weight: 700;
  ${smallTablets({margin:"18px 3px", fontSize:"14px", fontWeight:"550"})}
  ${smallMobiles({margin:"15px 2px", fontSize:"12px", fontWeight:"400"})}
`;
const Item = styled.span`
  margin: 15px 5px;
  font-weight: 700;
  ${smallTablets({margin:"18px 3px", fontSize:"14px", fontWeight:"550"})}
  ${smallMobiles({margin:"15px 2px", fontSize:"12px", fontWeight:"400"})}
`;
const Right = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  ${smallMobiles({marginRight:"20px"})}
`;
const OrderHistory = () => {
  return (
    <>
      <Router>
        <HeaderW />
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
