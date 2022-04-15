import React from "react";
import styled from "styled-components";

const colors = ["white", "black", "red", "lightblue", "yellow", "lightgreen", "purple", "maroon", "lightgray"]
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span`
  font-weight: 500;
`;
const Img = styled.img`
  height: 100%;
`;
const BtnDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.5rem;
  padding: 10px 0;
  justify-content: space-between;
`;
const Button1 = styled.div`
  border: 1px solid lightgray;
  border-radius: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  border: 1px solid lightgray;
  border-radius: 90px;
  padding: 12px;
  margin: 4px;
`;
const Colors = () => {
  return (
    <Container>
      <Heading>
        <Span>Filters group</Span>
        <Img src="arrowup.png" />
      </Heading>
        <BtnDiv>
        {colors.map((c) => {
        return (
          <Button1>
            <Button style={{backgroundColor:c}}></Button>
          </Button1>  
        );
      })}
        </BtnDiv>
    </Container>
  );
};

export default Colors;
