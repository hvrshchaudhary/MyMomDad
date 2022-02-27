import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Nav_Filter from "../Components/Nav_Filter";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 3;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 30px;
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
  border: 1px solid #d1d1d1;
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
const CategoryPageGrid = () => {
  return (
    <>
      <Header />
      <Nav_Filter />
      <Container>
        <Left></Left>
        <Right>
          <Row>
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
          </Row>
          <Row>
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
          </Row>
          <Row>
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
          </Row>
        </Right>
      </Container>
    </>
  );
};

export default CategoryPageGrid;
