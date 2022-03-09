import React from 'react'
import styled from "styled-components";
import { smallMobiles, smallTablets } from '../../Responsive';

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
const Span = styled.span`
  font-weight: 400;
  ${smallMobiles({fontSize:"12px"})}
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const R = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  ${smallMobiles({height:"12px"})}
`;
const SItems = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span>Home</Span>
          <Span>Zakir Nagar</Span>
        </Left>
        <Right>
          <Span>New Delhi</Span>
          <Span>Postal code</Span>
          <Span>Country</Span>
        </Right>
          <R>
            <Img src='dots.png'/>
          </R>
      </Wrapper>
      <hr style={{margin:"15px 0", borderTop:"1px solid #EAECEE"}}/>    
    </Container>
  )
}

export default SItems