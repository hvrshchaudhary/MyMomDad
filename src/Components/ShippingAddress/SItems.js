import React from 'react'
import styled from "styled-components";

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
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;
const R = styled.div`
  display: flex;
  align-items: center;
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
            <img src='dots.png'/>
          </R>
      </Wrapper>
      <hr style={{margin:"15px 0", borderTop:"1px solid #EAECEE"}}/>    
    </Container>
  )
}

export default SItems