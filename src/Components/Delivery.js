import React from 'react'
import styled from 'styled-components';
import { bigMobiles, smallTablets, tablets } from '../Responsive';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f1f1;
  font-family: "Poppins", sans-serif;
${bigMobiles({
  flexDirection:"column"
})}

`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  ${tablets({margin:"40px 30px"})}
${smallTablets({margin:"40px 30px"})}
`;
const Img = styled.img`
${bigMobiles({height:"70px"})}
`;
const H1 = styled.h1`
font-weight: 600;
font-size: 24px;
${smallTablets({textAlign:"center", fontSize:"20px"})}
`;
const H3 = styled.h3`
  font-weight: 400;
  ${tablets({textAlign:"center"})}
  ${smallTablets({textAlign:"center", fontSize:"16px"})}
  ${bigMobiles({fontSize:"1rem"})}
`;

const Delivery = () => {
  return (
    <Container>
        <Item>
            <Img src="plane.png"/>
            <H1>WORLDWIDE DELIVERY</H1>
            <H3>We deliver gifts to over 70 countries</H3>
        </Item>
        <Item>
            <Img src="plane.png"/>
            <H1>WORLDWIDE DELIVERY</H1>
            <H3>We deliver gifts to over 70 countries</H3>
        </Item>
        <Item>
            <Img src="plane.png"/>
            <H1>WORLDWIDE DELIVERY</H1>
            <H3>We deliver gifts to over 70 countries</H3>
        </Item>
    </Container>
  ) 
}

export default Delivery