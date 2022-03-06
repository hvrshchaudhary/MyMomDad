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
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  margin: 20px 0 30px 0;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 20px;
`;
const Span = styled.span`
  font-weight: 600;
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
const Dfp = styled.div`
  display: flex;
  width: 70%;
  margin-bottom: 20px;
  justify-content: flex-end;
`;
const Fp = styled.span`
  font-weight: 300;
  color: #6A983C;
  font-size: 16px;
 
`;
const Bottom = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 15px;
  flex-direction: row;
`;
const H3 = styled.h3`
  font-weight: 400;
  font-size: 16px;
  padding-right: 10px;
`;
const R = styled.span`
  font-weight: 300;
  color: #6A983C;
  font-size: 16px;
`;
const Button = styled.button`
  padding: 10px 55px;
  background-color: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
`;
const Login = () => {
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
                <H1>Welcome back! Log in</H1>
                <Item>
                  <Span>Email</Span>
                  <Input placeholder="Email" />
                </Item>
                <Item>
                  <Span>Password</Span>
                  <Input placeholder="Password" />
                </Item>
                <Dfp>
                  <Fp>Forgot password?</Fp>
                </Dfp>
                <Button>Login</Button>
                <Bottom>
                  <H3>You do not have an account?</H3>
                  <R>Register</R>
                </Bottom>
              </Div>
            </Sex>
          </Content>
          <Footer />
        </Container>
      </Router>
    </>
  );
};

export default Login;
