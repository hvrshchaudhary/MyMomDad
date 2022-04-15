import React from "react";
import styled from "styled-components";
import { bigMobiles, smallerTablets } from "../Responsive";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px 24px 16px;
  box-shadow: 0px 0px 1.3px rgba(0, 0, 0, 0.028),
    0px 0px 3.5px rgba(0, 0, 0, 0.04), 0px 0px 8.4px rgba(0, 0, 0, 0.052),
    0px 0px 28px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  ${smallerTablets({width:"60%"})}
  ${bigMobiles({width:"80%"})}
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
  ${smallerTablets({fontSize:"22px"})}
  ${bigMobiles({fontSize:"18px"})}
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
const SpanM = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #9E9E9E;
  ${bigMobiles({fontSize:"11px", textAlign:"center"})}
`;
const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  align-items: center;
  border: 1px solid #008000;
  padding: 40px 0;
  border-radius: 12px;
  ${bigMobiles({padding:"30px 20px", width:"90%"})}
`;
const Img = styled.img``;
const H3 = styled.h3`
  font-weight:500;
  color:#707275;
  ${bigMobiles({fontSize:"13px"})}
  
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
const Button = styled.button`
  padding: 8px;
  background-color: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  width: 20%;
  margin: 10px 0;
  cursor: pointer;
  font-size: 15px;
  ${bigMobiles({width:"30%"})}
`;
const AddGiftCard = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <H1>Add Gift Card</H1>
          <Close>
            <Text>Close</Text>
            <img style={{ paddingLeft: "7px" }} src="crossblack.png" />
          </Close>
        </Header>
        <DivImg>
          <Img src="upload.svg" />
          <H3>Drag your design here</H3>
          <SpanM>(Only *.jpeg and *.png images will be accepted)</SpanM>
        </DivImg>
        <Div>
          <input
            style={{
              backgroundColor: "#f9f9f9",
              border: "none",
              fontSize: "15px",
            }}
            placeholder="Enter Your Message"
          />
        </Div>
        <Button>Submit</Button>
      </Wrapper>
    </Container>
  );
};

export default AddGiftCard;
