import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;
const Top = styled.div`
  height: 6vh;
  display: flex;
  align-items: center;
  margin: 10px 40px;
`;
const Bottom = styled.div`
  height: 70vh;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Sex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
padding: 10px 13px;
  background-color: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
`;
const ShoppingCart = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
        <Top><h1 style={{fontWeight:"600", fontSize:"32px"}}>Your Cart</h1></Top>
        <Bottom>
            <Sex>
            <img src="cart.png"/>
            <h3 style={{fontWeight:"600", fonntSize:"24px", padding:"20px 0", }}>Your shopping cart is empty</h3>
            <Button>Continue Shopping</Button>
            </Sex>
        </Bottom>
        </Container>
        <Footer/>
      </Router>
    </>
  );
};

export default ShoppingCart;
