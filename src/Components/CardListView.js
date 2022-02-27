import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  height: auto;
  width: 100%;
  margin: 30px;
  border: 1px solid #D1D1D1;
  margin-top: 0;
  border-radius: 12px;
`;
const Right = styled.div`
  margin: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const L = styled.div``;
const H1 = styled.h1`
font-weight: 600;
font-size: 18px;
`;
const H6 = styled.h6`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 50px ;
`;
const H61 = styled.h6`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 30px ;
  font-size: 12px;
  color: #A9A9A9;

`;
const Bottom = styled.div``;
const Line = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;
const V = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #A9A9A9;
`;
const Q = styled.span`
 font-size: 14px;
  font-weight: 400;
  color: #A9A9A9;
`;
const R = styled.div``;
const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
const Delivery = styled.div`
  color: #A9A9A9;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
const Btn1 = styled.button`
  background-color: #6A983C;
  color: white;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 16px;
  border: 2px solid #46760A;
  border-radius:12px;
  margin: 10px;
  margin-bottom: 0;
`;
const Btn2 = styled.button`
background-color: #F5F5F5;
font-weight: 700;
font-size: 15px;
padding: 12px;
border-radius: 12px;
border: none ;
margin: 10px;
display: flex;
align-items: center;
`;
const CardListView = () => {
  return (
    <Container>
        <img src='gift.png'/>
        <Right>
            <L>
                <H1>Product Title</H1>
                <H6>Space for a small product descreption</H6>
                <Bottom>
                    <Line>
                        <Q>Weight</Q>
                        <V>0.400kg</V>
                    </Line>
                    <Line>
                        <Q>Dimensions</Q>
                        <V>2x3x4</V>
                    </Line>
                    <Line>
                        <Q>Weight</Q>
                        <V>0.400kg</V>
                    </Line>
                    <Line>
                        <Q>Dimensions</Q>
                        <V>2x3x4</V>
                    </Line>
                </Bottom>
            </L>
            <R>
                <Top>
                <H1>₹234</H1>
                <H61>₹234</H61>
                <Delivery>
                    <span style={{fontWeight:"600", fontSize:"12px"}}>Free shipping</span>
                    <span style={{fontWeight:"400", fontSize:"12px"}}>Delivery in one day</span>
                </Delivery>
                </Top>
                <Buttons>
                    <Btn1>Product Detail<img style={{padding:"0 7px"}} src='arrow.png'/> </Btn1>
                    <Btn2><img style={{paddingRight:"4px"}} src='heart.png'/>Add to wish list</Btn2>
                </Buttons>

            </R>
        </Right>

    </Container>
  )
}

export default CardListView