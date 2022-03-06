import React from "react";
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
const Span = styled.span``;
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
