import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f1f1f1;
  font-family: "Poppins", sans-serif;
  height: 55vh;
`;
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 90px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Heading = styled.h1`
  font-weight: 500;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  border: none;
  height: 30px;
  padding: 20px 25px;
  font-weight: 700;
  background-color: white;
  color: black;
  border-radius: 10px;
`;
const Bottom = styled.div`
`;
const Cards = styled.div`
  height: 30vh;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "card1 card2 card3 card4";
`;
const Card1 = styled.div`
  grid-area: card1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  position: relative;
  justify-content: center;
  align-items: flex-end;
`;
const Card2 = styled.div`
  grid-area: card2;
  border-radius: 10px;
  display: flex;
  justify-self: flex-start;
  position: relative;
  justify-content: center;
  align-items: flex-end;
`;
const Card3 = styled.div`
  grid-area: card3;
  border-radius: 10px;
  display: flex;
  justify-self: flex-start;
  position: relative;
  justify-content: center;
  align-items: flex-end;
`;
const Card4 = styled.div`
  grid-area: card4;
  border-radius: 10px;
  display: flex;
  justify-self: flex-start;
  position: relative;
  justify-content: center;
  align-items: flex-end;
`;
const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const ProductTitle = styled.h3`
  padding: 10px 0;
  font-weight: 500;
  font-size: 16px;
`;
const PDesc = styled.span`
  font-size: 12px;
  color: gray;
`;
const Img = styled.img``;
const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;
const L = styled.div`
  display: flex;
  align-items: center;
`;
const R = styled.div`
  display: flex;
  align-items: center;
`;
const BuyNow = styled.button`
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  padding: 8px 15px;
  border: 2px solid #46760a;
  background-color: #6a983c;
  color: white;
  font-weight: 700;
`;

const BestSellingProducts = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Heading>Best Selling Products</Heading>
          <Button>
            View More Products <IoIosArrowForward color="gray" />
          </Button>
        </Top>
        <Bottom>
          <Cards>
            <Card1>
              <Card>
                <Img src="bestSelling2.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L>₹ 234</L>
                  <R>
                    <BuyNow>Buy Now</BuyNow>
                  </R>
                </CardBottom>
              </Card>
            </Card1>
            <Card2>
              <Card>
                <Img src="bestSelling1.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L>₹ 234</L>
                  <R>
                    <BuyNow>Buy Now</BuyNow>
                  </R>
                </CardBottom>
              </Card>
            </Card2>
            <Card3>
              <Card>
                <Img src="bestSelling1.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L>₹ 234</L>
                  <R>
                    <BuyNow>Buy Now</BuyNow>
                  </R>
                </CardBottom>
              </Card>
            </Card3>
            <Card4>
              <Card>
                <Img src="bestSelling2.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L>₹ 234</L>
                  <R>
                    <BuyNow>Buy Now</BuyNow>
                  </R>
                </CardBottom>
              </Card>
            </Card4>
          </Cards>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default BestSellingProducts;
