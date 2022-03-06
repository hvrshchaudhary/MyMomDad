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
  align-items: center;
`;
const RItemsPending = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span style={{fontWeight:"500"}}>1235 2345 345605</Span>
          <Span>123435456345</Span>
          <Span>29.02.2022</Span>
          <Span>non-conformity of the goods</Span>
        </Left>
        <Right>
          <Span style={{color:"#FF7E27", display:"flex", alignItems:"center"}}><img style={{paddingRight:"10px"}} src='pending.png'/>PENDING</Span>
          <img style={{paddingLeft:"20px", height:"7px", cursor:"pointer"}} src='adw.png'/>
        </Right>
      </Wrapper>
      <hr style={{margin:"15px 0", borderTop:"1px solid #EAECEE"}}/>    
    </Container>
  )
}

export default RItemsPending