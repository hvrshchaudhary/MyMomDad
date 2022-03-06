import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  font-family: "Poppins", sans-serif;
  height: 90vh;
`;
const H1 = styled.h1`
  font-weight: 600;
  margin:15px 30px;
`;
const Left = styled.div`
  width: 15%;
  margin: 30px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 12px;
`;
const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
`;
const H3 = styled.h3`
  margin: 20px 5px;
  font-weight: 600;
`;
const Item = styled.span`
  margin: 15px 5px;

`;
const Profile = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <H1>My Account</H1>
          <Left>
              <Dashboard>
                  <H3>Dashboard</H3>
                  <hr/>
                  <Item>Menu 1</Item>
                  <Item>Menu 2</Item>
                  <Item>Menu 3</Item>
                  <Item>Menu 4</Item>
                  <hr/>
                  <Item>Menu 1</Item>
                  <Item>Menu 2</Item>
                  <Item>Menu 3</Item>
                  <Item>Menu 4</Item>
                  <Item>Menu 5</Item>
              </Dashboard>
          </Left>
        </Container>
        <Footer/>
      </Router>
    </>
  );
};

export default Profile;
