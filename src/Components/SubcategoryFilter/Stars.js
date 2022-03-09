import React from "react";
import styled from "styled-components";

const Ratings = ["1s.png", "2s.png", "3s.png", "4s.png", "5s.png"];
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
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
`;
const Box = styled.input`
  margin-right: 5px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div``;
const Num = styled.span`
  color: #737b7d;
`;
const ImgStar = styled.img``;
const Stars = () => {
  return (
    <Container>
      <Heading>
        <Span>Filters group</Span>
        <Img src="arrowup.png" />
      </Heading>
      {Ratings.map((no) => {
        return (
          <Row>
            <Left>
              <Box type={"checkbox"} />
              <ImgStar src={no} />
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

export default Stars;
