import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px 24px 16px;
  box-shadow:
  0px 0px 1.3px rgba(0, 0, 0, 0.028),
  0px 0px 3.5px rgba(0, 0, 0, 0.04),
  0px 0px 8.4px rgba(0, 0, 0, 0.052),
  0px 0px 28px rgba(0, 0, 0, 0.08)
;
  border-radius: 12px;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 26px;
`;
const Close = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #d1d1d1;
`;
const Span = styled.span`
  font-weight: 500;
  color: #A9A9A9;
`;
const Check = styled.div`
  display: flex;
`;
const L = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const R = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Div = styled.div`
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  font-weight: 400;
  padding: 10px 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const Subscribe = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <H1>Join our list</H1>
          <Close>
            <Text>Close</Text>
            <img style={{ paddingLeft: "7px" }} src="crossblack.png" />
          </Close>
        </Header>
        <Span>Signup to be the first to hear about exclusive deals, special offers from ours</Span>
        <hr style={{margin:"25px 0", borderTop:"1px solid #f9f9f9"}}/>
        <Check>
            <L>
              <img src="check.png"/>
              <span>Exclusive deals</span>
            </L>
            <R>
              <img src="check.png"/>
              <span>Special offers</span>
            </R>
        </Check>
        <Div>
          <input style={{backgroundColor:"#f9f9f9", border:"none", fontSize:"15px"}} placeholder="Your email address"/> 
          <h2 style={{fontWeight:"700", fontSize:"18px"}}>Subscribe</h2>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default Subscribe;
