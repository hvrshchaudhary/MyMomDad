import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 25px;
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
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;
const STitles = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span>Address name</Span>
          <Span>Street</Span>
        </Left>
        <Right>
          <Span>City</Span>
          <Span>Postal code</Span>
          <Span>Country</Span>
        </Right>
      </Wrapper>
      <hr style={{margin:"15px 0", borderTop:"2px solid #6A983C"}}/>    
    </Container>
  );
};

export default STitles;
