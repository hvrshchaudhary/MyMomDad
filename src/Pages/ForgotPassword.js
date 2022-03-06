import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;
const Content = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #9e9e9e;
`;
const Sex = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
`;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  margin: 20px 0 30px 0;
`;
const Span = styled.span`
  font-weight: 400;
  text-align: center;
  font-size: 15px;
  width: 85%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 30px 0;
`;

const Span2 = styled.span`
  font-weight: 500;
`;
const Input = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  font-weight: 400;
  font-size: 18px;
  padding: 15px 20px;
  width: 92%;
`;
const Button = styled.button`
  padding: 15px 35px;
  background-color: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
`;
const ForgotPassword = () => {
  return (
    <>
      <Router>
        <Container>
          <Header />
          <Content>
            <Sex>
              <Close>
                <img src="x.png" />
              </Close>
              <Div>
                <H1>Did you forget the password ?</H1>
                <Span>Enter the e-mail address in the field below. We will send a link to change your password to your e-mail.</Span>
                <Item>
                  <Span2>Email</Span2>
                  <Input placeholder="Email" />
                </Item>
                <Button>Reset your password</Button>
              </Div>
            </Sex>
          </Content>
          <Footer />
        </Container>
      </Router>
    </>
  );
};

export default ForgotPassword;
