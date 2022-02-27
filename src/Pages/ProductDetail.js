import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Container = styled.div`
  font-family: "Poppins";
`;
const Nav = styled.div`
  display: flex;
  margin: 20px 50px;
  margin-bottom: 30px;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
`;
const Li1 = styled.h4`
  font-weight: 300;
  font-size: 12px;
  color: #a9a9a9;
`;
const Li = styled.h4`
  font-weight: 300;
  font-size: 12px;
  padding: 0 10px;
`;
const Body = styled.div`
  display: flex;
`;
const Img = styled.img`
  margin: 30px;
`;
const Left1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const T = styled.div`
  margin: 30px;
`;
const H1 = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Span = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #a9a9a9;
`;
const Desc = styled.p`
  font-weight: 400;
  font-size: 14px;
  padding-top: 15px;
`;
const Specs = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
  margin-top: 0;
`;
const Price = styled.div``;
const L = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 200px;
`;
const R = styled.div`
  width: auto;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Rl = styled.div`
  color: #a9a9a9;
  font-size: 14px;
  font-weight: 400;
  padding-right: 30px;
`;
const Rr = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding-left: 20px;
`;
const Rri = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #6a983c;
`;
const Pc = styled.div`
  margin: 30px;
  display: flex;
  border: 1px solid #f5f5f5;
  border-radius: 12px;
  width: 65%;
  padding: 20px 30px;
  justify-content: space-between;
`;
const Pl = styled.div`
  flex: 1;
`;
const H2 = styled.h2`
  font-weight: 600;
  font-size: 26px;
  color: #6a983c;
`;
const H5 = styled.h5`
  color: #a9a9a9;
  font-weight: 600;
  font-size: 12px;
`;
const Pr = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
`;
const Btn1 = styled.button`
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  height: 70%;
  border: 1px solid #d1d1d1;
  padding: 15px;
  border-radius: 12px;
`;
const Btn2 = styled.button`
  border: 2px solid #46760a;
  border-radius: 12px;
  background-color: #6a983c;
  color: white;
  display: flex;
  height: 70%;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  padding: 15px;
`;
const Reviews = styled.div`
  margin: 30px;
`;
const Rt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Rh = styled.div``;
const Rs = styled.div``;
const Ri = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-top: 10px;
`;
const Rl1 = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #575757;
`;
const Rr1 = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #575757;
`;
const RelatedProducts = styled.div`
  margin: 30px;
  margin-top: 50px;
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;
const H69 = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;
const Card1 = styled.div`
  border-radius: 10px;
  display: flex;
  position: relative;
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
const Img3 = styled.img``;
const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;
const L3 = styled.div`
  display: flex;
  align-items: center;
`;
const R3 = styled.div`
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
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
  margin-top: 30px;
`;
const ProductDetail = () => {
  return (
    <>
      <Container>
        <Header />
        <Nav>
          <Left>
            <Li1>Homepage /</Li1>
            <Li>Gifts for Mom /</Li>
            <Li>Photo</Li>
          </Left>
        </Nav>
        <Body>
          <Left1>
            <Img src="productdesc2.png" />
            <Img src="productdesc3.png" />
          </Left1>
          <Right>
            <T>
              <H1>Product Title</H1>
              <Span>(1 customer review)</Span>
              <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Desc>
            </T>
            <Specs>
              <L>
                <Row>
                  <Rl>SKU:</Rl>
                  <Rr>76645</Rr>
                </Row>
                <Row>
                  <Rl>Category:</Rl>
                  <Rr>Gift</Rr>
                </Row>
                <Row>
                  <Rl>Stock:</Rl>
                  <Rri>In Stock</Rri>
                </Row>
                <Row>
                  <Rl>Gift:</Rl>
                  <Rr>Pen</Rr>
                </Row>
              </L>
              <R>
                <Row>
                  <Rl>Buy by:</Rl>
                  <Rr>pcs, kgs, box, pack</Rr>
                </Row>
                <Row>
                  <Rl>Delivery:</Rl>
                  <Rr>In 2 days</Rr>
                </Row>
                <Row>
                  <Rl>Delivery Area:</Rl>
                  <Rr>Delhi</Rr>
                </Row>
              </R>
            </Specs>
            <Price>
              <Pc>
                <Pl>
                  <H2>₹360.32</H2>
                  <H5>₹480.56</H5>
                </Pl>
                <Pr>
                  <Btn1>
                    <Span>1 |</Span> Pcs{" "}
                    <img style={{ padding: "0 8px" }} src="ad.png" />
                  </Btn1>
                  <Btn2>
                    <img src="plus.png" /> Add to cart
                  </Btn2>
                </Pr>
              </Pc>
            </Price>
            <Reviews>
              <Rt>
                <Ri>Description</Ri>
                <Ri>
                  Reviews
                  <img style={{ paddingLeft: "8px" }} src="18.png" />
                </Ri>
                <Ri>
                  Questions
                  <img src="4.png" />
                </Ri>
              </Rt>
              <Rh>
                <h3
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "30px",
                    marginBottom: "10px",
                  }}
                >
                  Heading
                </h3>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </Rh>
              <Rs>
                <h3
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Specifications
                </h3>
                <h6
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    paddingBottom: "10px",
                  }}
                >
                  General
                </h6>
                <hr style={{ borderTop: " 1px solid #EBEBEB" }} />
                <Row1>
                  <Rl1>Attribute 1</Rl1>
                  <Rr1>Value</Rr1>
                </Row1>
                <Row1>
                  <Rl1>Attribute 1</Rl1>
                  <Rr1>Value</Rr1>
                </Row1>
                <Row1>
                  <Rl1>Attribute 1</Rl1>
                  <Rr1>Value</Rr1>
                </Row1>
                <Row1>
                  <Rl1>Attribute 1</Rl1>
                  <Rr1>Value</Rr1>
                </Row1>
                <Row1>
                  <Rl1>Attribute 1</Rl1>
                  <Rr1>Value</Rr1>
                </Row1>
                <Row1>
                  <Rl1>Attribute 1</Rl1>
                  <Rr1>Value</Rr1>
                </Row1>
                <Row1>
                  <Rl1>Attribute 1</Rl1>
                  <Rr1>Value</Rr1>
                </Row1>
              </Rs>
            </Reviews>
          </Right>
        </Body>
        <RelatedProducts>
          <Heading>
            <H69>Related products</H69>
            <H69>
              More products 
            </H69>
          </Heading>
          <Row2>
            <Card1>
              <Card>
                <Img3 src="bestSelling2.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L3>₹ 234</L3>
                  <R3>
                    <BuyNow>Buy Now</BuyNow>
                  </R3>
                </CardBottom>
              </Card>
            </Card1>
            <Card1>
              <Card>
                <Img3 src="bestSelling2.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L3>₹ 234</L3>
                  <R3>
                    <BuyNow>Buy Now</BuyNow>
                  </R3>
                </CardBottom>
              </Card>
            </Card1>
            <Card1>
              <Card>
                <Img3 src="bestSelling2.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L3>₹ 234</L3>
                  <R3>
                    <BuyNow>Buy Now</BuyNow>
                  </R3>
                </CardBottom>
              </Card>
            </Card1>
            <Card1>
              <Card>
                <Img3 src="bestSelling2.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L3>₹ 234</L3>
                  <R3>
                    <BuyNow>Buy Now</BuyNow>
                  </R3>
                </CardBottom>
              </Card>
            </Card1>
            <Card1>
              <Card>
                <Img3 src="bestSelling2.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L3>₹ 234</L3>
                  <R3>
                    <BuyNow>Buy Now</BuyNow>
                  </R3>
                </CardBottom>
              </Card>
            </Card1>
            <Card1>
              <Card>
                <Img3 src="bestSelling2.png" />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L3>₹ 234</L3>
                  <R3>
                    <BuyNow>Buy Now</BuyNow>
                  </R3>
                </CardBottom>
              </Card>
            </Card1>
          </Row2>
        </RelatedProducts>
      </Container>
      <Footer/>
    </>
  );
};

export default ProductDetail;
