import React from "react";
import styled from "styled-components";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { bigMobiles, smallTablets, tablets } from "../Responsive";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
`;
const Top1 = styled.div``;
const Img = styled.img`
  width: 100%;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 3;
  margin: 48px;
  ${bigMobiles({
    marginLeft:"20px"
  })}
`;
const Top2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 48px;
${bigMobiles({display:"none"})}

`;
const H11 = styled.h1`
  font-weight: 600;
  font-size: 22px;
  margin-left: 97px;
  margin-bottom: 20px;
  width: 200px;
${bigMobiles({
  fontSize:"17px",
  marginLeft:"50%",
  transform:"translateX(-50%)"
  
})}

`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 60px;
${bigMobiles({
  flexDirection:"column",
  
})}

`;
const L = styled.div`
  display: flex;
  margin:1rem;
`;
const Icon = styled.img`
  margin-right: 10px;
  height: auto;
`;
const H = styled.h1`
  font-weight: 600;
  font-size: 18px;
  ${bigMobiles({fontSize:"15px"})}

`;
const Desc = styled.div`
  font-size: 13px;
  font-weight: 600;
  ${bigMobiles({fontSize:"12px"})}

`;
const R = styled.div``;
const Right = styled.div`
  flex: 1;
  margin: 48px;
  ${tablets({display:"none"})}
  ${smallTablets({display:"none"})}
  ${bigMobiles({display:"none"})}

`;
const Img2 = styled.img`

`;
const ContactUs = () => {
  return (
    <>
      <Header />
      <Container>
        <Top1>
          <Img src="contactimg.png" />
        </Top1>
        <Bottom>
          <Left>
            <Top2>
              <H11>Contact Details</H11>
              <Links>
                <L>
                  <Icon src="loctn.png"></Icon>
                  <R>
                    <H>Our Location</H>
                    <Desc>INDIA</Desc>
                  </R>
                </L>
                <L>
                  <Icon src="phonee.png"></Icon>
                  <R>
                    <H>Call Us</H>
                    <Desc>Updating Soon</Desc>
                  </R>
                </L>
                <L>
                  <Icon src="email.png"></Icon>
                  <R>
                    <H>Our Email</H>
                    <Desc>info@mymomdad.com</Desc>
                  </R>
                </L>
              </Links>
              <hr/>
            </Top2>
            <Contact/>
          </Left>
          <Right>
            <H1>Find Us</H1>
            <Img2 src="map.png" />
          </Right>
        </Bottom>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
