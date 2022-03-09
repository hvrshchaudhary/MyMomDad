import React from "react";
import styled from "styled-components";
import { bigMobiles, smallScreen } from "../../Responsive";

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
  ${smallScreen({flex:"2"})}
`;
const Span = styled.span`
  ${bigMobiles({fontSize:"12px"})}
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const RTitles = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span>Complaint Number</Span>
          <Span>Order Number</Span>
          <Span>Date</Span>
          <Span>Type</Span>
        </Left>
        <Right>
        <Span>Status</Span>
        </Right>
      </Wrapper>
      <hr style={{margin:"15px 0", borderTop:"1px solid #6A983C"}}/>    
    </Container>
  );
};

export default RTitles;
