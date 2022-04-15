import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  justify-content: flex-end;
  font-family: "Poppins", sans-serif;
  
`;
const Wrapper = styled.div`
  width: 22vw;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
  box-shadow: 0px 0px 0.8px rgba(0, 0, 0, 0.017),
    0px 0px 1.8px rgba(0, 0, 0, 0.025), 0px 0px 3px rgba(0, 0, 0, 0.031),
    0px 0px 4.5px rgba(0, 0, 0, 0.035), 0px 0px 6.5px rgba(0, 0, 0, 0.04),
    0px 0px 9.2px rgba(0, 0, 0, 0.045), 0px 0px 13.1px rgba(0, 0, 0, 0.049),
    0px 0px 19px rgba(0, 0, 0, 0.055), 0px 0px 29.3px rgba(0, 0, 0, 0.063),
    0px 0px 52px rgba(0, 0, 0, 0.08);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 26px;
`;
const Close = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #d1d1d1;
`;
const Product = styled.div`
  display: flex;
`;
const Left = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
`;
const Remove = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 2;
  padding-left: 15px;
`;
const Top = styled.div`
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 15px;
`;
const Category = styled.div`
  padding-top: 5px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const L = styled.div``;
const Price = styled.span`
  color: #6A983C;
  font-size: 18px;
  font-weight: 600;
`;
const R = styled.div``;
const Button = styled.button`
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  padding: 6px;
  color: #D1D1D1;
  cursor: pointer;
`;
const Subtotal = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top1 = styled.div``;
const Checkout = styled.button`
  padding: 12px 16px;
  background-color: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
`;
const GiftCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  align-items: center;
`;
const Span = styled.span``;
const Add = styled.button`
  padding: 8px;
  background-color: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
`;

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Top1>
        <Header>
          <H1>Shopping Cart</H1>
          <Close>
            <Text>Close</Text>
            <img style={{paddingLeft:"7px"}} src="crossblack.png" />
          </Close>
        </Header>
        <Product>
          <Left>
            <img style={{height:"90px"}} src="giftc.png" />
            <Remove>
              <img style={{height:"10px", paddingRight:"7px"}} src="crossblack.png" />
              <Text>Remove</Text>
            </Remove>
          </Left>
          <Right>
            <Top>
              <Title>Product title</Title>
              <Category>
                <Text>Category:</Text> <span style={{fontWeight:"400", fontSize:"12px", paddingLeft:"15px"}}>Gift</span>
              </Category>
              <img style={{padding:"10px 0"}} src="stars.png" />
            </Top>
            <Bottom>
              <L>
                <Price>₹890.84</Price>
              </L>
              <R>
                <Button>1pcs</Button>
              </R>
            </Bottom>
          </Right>
        </Product>
          <hr style={{marginTop:"30px", borderTop:"1px solid #f9f9f9"}}/>
          <GiftCard>  
            <Span>Add GiftCard</Span>
            <Add>Add</Add>
          </GiftCard>
          </Top1>
          <Subtotal>
              <h4 style={{fontWeight:"600", fontSize:"12px", marginBottom:"10px"}}>Subtotal</h4>
              <h1 style={{fontWeight:"600", fontSize:"26px"}}>₹890.84</h1>
          <hr style={{margin:"25px 0", borderTop:"1px solid #f9f9f9"}}/>
            <div style={{display:"flex",justifyContent:"space-between", alignItems:"center" }}>
                <h3 style={{fontWeight:"700", fontSize:"15px"}}>Continue shopping</h3>
                <Checkout>Go to Checkout</Checkout>
            </div>
          </Subtotal>
      </Wrapper>
    </Container>
  );
};

export default Cart;
