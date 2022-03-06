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
  flex: 1;
  display: flex;
  justify-content: center;
`;
const R = styled.div`
  display: flex;
  align-items: center;
`;
const ItemsCancelled = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span style={{fontWeight:"500"}}>1235 2345 345605</Span>
          <Span>29.02.2022</Span>
          <Span>Aman Gupta</Span>
          <Span style={{color:"#E10303", display:"flex", alignItems:"center"}}><img style={{paddingRight:"10px"}} src='cancelled.png'/>Cancelled</Span>
        </Left>
        <Right>
          <Span style={{paddingRight:"25px", fontSize:"24px", fontWeight:"600", color:"#6A983C"}}>₹890.84</Span>
          <R>
            <img style={{paddingRight:"25px"}} src='dots.png'/>
            <img src='adw.png'/>
          </R>
        </Right>
      </Wrapper>
      <hr style={{margin:"15px 0", borderTop:"1px solid #EAECEE"}}/>    
    </Container>
  )
}

export default ItemsCancelled