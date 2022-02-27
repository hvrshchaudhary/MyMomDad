import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  height: 80vh;
  margin: 0 75px;
`;
const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: "1.7fr 1.7fr";
  grid-template-rows: "1fr";
  grid-template-areas: "left right";
  align-items: center;
`;
const Left = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 10px;
  grid-area: left;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Right = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 10px;
  align-items: center;
  grid-area: right;
  justify-content: center;
  margin-left: 20px;
`;
const Img = styled.img`
width: 100%;
  height: 73%;
  align-self: center;
`;
const Info = styled.div`
width: 100%;
  display: flex;
  position: relative;
  align-content: center;
`;
const Headings = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 50px;
`;
const BSubFocus = styled.h5`
  font-weight: 600;
  color: #6a983c;
`;
const BHead = styled.h1`
  font-weight: 600;
  margin-bottom: 230px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  width: 60%;
  background-color: transparent;
  border: 2px solid #6a983c;
  padding: 10px 0;
  border-radius: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Info>
            <Img src="banner1.png" />
            <Headings>
              <BSubFocus>Banner subfocus</BSubFocus>
              <BHead>Gifts for MomDad</BHead>
              <Button>
                <Link to="/categorypagegrid" style={{textDecoration:"none",color:"black"}}>View Products</Link> <IoIosArrowForward color="#6A983C" />
              </Button>
            </Headings>
          </Info>
        </Left>
        <Right>
          <Info>
            <Img src="banner2.png" />
            <Headings>
              <BSubFocus>Banner subfocus</BSubFocus>
              <BHead>Gifts for MomDad</BHead>
              <Button>
              <Link to="/categorypagegrid" style={{textDecoration:"none",color:"black"}}>View Products</Link><IoIosArrowForward color="#6A983C" />
              </Button>
            </Headings>
          </Info>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Banner;
