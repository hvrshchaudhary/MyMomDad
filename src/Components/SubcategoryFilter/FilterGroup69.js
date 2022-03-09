import React from "react";
import styled from "styled-components";

const Rows = [1, 2, 3, 4, 5];
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
const Input = styled.input`
  border: none;
  padding: 16px;
  margin: 10px 0;
  border-radius: 10px;
  width: 30%;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
`;
const Box = styled.input`
  margin-right: 5px;
`;
const Text = styled.span``;
const Left = styled.div``;
const Right = styled.div``;
const Num = styled.span`
  color: #737b7d;
`;
const FilterGroup69 = () => {
  return (
    <Container>
      <Heading>
        <Span>Filters group</Span>
        <Img src="arrowup.png" />
      </Heading>
      <Input placeholder="From" />
      <Heading>
        <Span>Filters group</Span>
        <Img src="arrowup.png" />
      </Heading>
      {Rows.map((no) => {
        return (
          <Row>
            <Left>
              <Box type={"checkbox"} />
              <Text>Subcategory {no}</Text>
            </Left>
            <Right>
              <Num>23</Num>
            </Right>
          </Row>
        );
      })}
    </Container>
  );
};

export default FilterGroup69;
