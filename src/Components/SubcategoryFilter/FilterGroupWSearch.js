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

const SearchContainer = styled.div`
  margin: 15px 0;
`;
const SecretDiv = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
`;
const Input2 = styled.input`
  border: none;
  border-radius: 10px;
  font-size: 14px;
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
const FilterGroupWSearch = () => {
  return (
    <Container>
      <Heading>
        <Span>Filters group</Span>
        <Img src="arrowup.png" />
      </Heading>
      <SearchContainer>
        <SecretDiv>
          <Img src="search.png" />
          <Input2 placeholder="Search filter" />
        </SecretDiv>
      </SearchContainer>
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

export default FilterGroupWSearch;
