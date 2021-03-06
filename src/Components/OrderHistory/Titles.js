import React from "react";
import styled from "styled-components";
import { smallMobiles, smallTablets } from "../../Responsive";

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
  ${smallTablets({flex:"1.5"})}
`;
const Span = styled.span`
  ${smallTablets({fontSize:"14px"})}
  ${smallMobiles({fontSize:"12px"})}

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Titles = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span>Order Number</Span>
          <Span>Date</Span>
          <Span>User</Span>
          <Span>Status</Span>
        </Left>
        <Right>
          <Span>Total price</Span>
        </Right>
      </Wrapper>
      <hr style={{margin:"15px 0", borderTop:"1px solid #6A983C"}}/>    
    </Container>
  );
};

export default Titles;
