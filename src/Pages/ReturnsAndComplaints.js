import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import RTitles from "../Components/ReturnsAndComplaints/RTitles";
import RItemsPending from "../Components/ReturnsAndComplaints/RItemsPending";
import RItemsCompleted from "../Components/ReturnsAndComplaints/RItemsCompleted";
import RDetails from "../Components/ReturnsAndComplaints/RDetails";
import { bigMobiles, smallerTablets, smallMobiles, smallScreen, smallTablets } from "../Responsive";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px ;
`;
const Wrapper = styled.div`
  display: flex;
  ${bigMobiles({padding:"15px"})}
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
  ${smallerTablets({display:"none"})}
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
  ${smallerTablets({margin:"20px"})}
`;
const ReturnAndComplaints = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <H1>Returns And Complaints</H1>
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
              <RTitles />
              <RItemsPending/>
              <RItemsPending/>
              <RItemsCompleted/>
              <RItemsCompleted/>
              <RItemsCompleted/>
              <RDetails/>
            </Right>
          </Wrapper>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default ReturnAndComplaints;
