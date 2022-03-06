import React from "react";
import styled from "styled-components";
import DetailsB from "./DetailsB";
import DetailsT from "./DetailsT";

const Container = styled.div`
  height: auto;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div``;
const Details = () => {
  return (
    <Container>
      <Wrapper>
        <DetailsT />
        <DetailsB />
      </Wrapper>
    </Container>
  );
};

export default Details;
