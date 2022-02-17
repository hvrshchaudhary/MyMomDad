import React from "react";
import styled from "styled-components";
import { bigMobiles, mediumTablets, smallMobiles, smallTablets } from "../Responsive";

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
`;
const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 50px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
`;
const Category = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Heading = styled.h3`
  ${mediumTablets({fontSize:"14px"})}
  ${smallTablets({fontSize:"12px"})}
  ${bigMobiles({fontSize:"10px"})}
  ${smallMobiles({fontSize:"8px"})}
  
`;
const Item = styled.span`
  color: #98b35d;
  padding: 10px 0;
  ${mediumTablets({fontSize:"10px", padding:"8px 0"})}
  ${smallTablets({fontSize:"8px", padding:"6px 0"})}
  ${bigMobiles({fontSize:"6px", padding:"4px 0"})}

`;
const Bottom = styled.div``;
const Copyright = styled.span`
  font-weight: 300;
  ${mediumTablets({fontSize:"10px"})}
  ${smallTablets({fontSize:"8px"})}
  ${bigMobiles({fontSize:"6px"})}
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Category>
            <Heading>Get in touch</Heading>
            <Item>About Us</Item>
            <Item>Careers</Item>
            <Item>Press Releases</Item>
            <Item>Blog</Item>
          </Category>
          <Category>
            <Heading>Connections</Heading>
            <Item>Facebook</Item>
            <Item>Twitter</Item>
            <Item>Instagram</Item>
            <Item>Youtube</Item>
            <Item>LinkedIn</Item>
          </Category>
          <Category>
            <Heading>Get in touch</Heading>
            <Item>About Us</Item>
            <Item>Careers</Item>
            <Item>Press Releases</Item>
            <Item>Blog</Item>
          </Category>
          <Category>
            <Heading>Account</Heading>
            <Item>Your Account</Item>
            <Item>Returns Center</Item>
            <Item>100% purchase protection</Item>
            <Item>Chat with us</Item>
            <Item>Help</Item>
          </Category>
        </Top>
        <Bottom>
            <Copyright>Copyright © 2022 MyMomDad.com</Copyright>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;
