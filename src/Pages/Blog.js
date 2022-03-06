import React from "react";
import styled from "styled-components";
import BL from "../Components/Blogs/BL";
import Bottom from "../Components/Blogs/Bottom";
import BR from "../Components/Blogs/BR";
import Header from "../Components/Blogs/Header";
import Footer from "../Components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 35px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 1;
  margin-right: 20px;
`;
const Right = styled.div`
  flex: 5;
`;
const Blog = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Left>
            <BL />
          </Left>
          <Right>
            <BR />
          </Right>
        </Wrapper>
        <Bottom/>
      </Container>
      <Footer/>
    </>
  );
};

export default Blog;
