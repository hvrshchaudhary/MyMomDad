import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f1f1;
  font-family: "Poppins", sans-serif;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
`;
const Img = styled.img``;
const H1 = styled.h1`
font-weight: 600;
font-size: 24px;
`;
const H3 = styled.h3`
font-weight: 400;
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