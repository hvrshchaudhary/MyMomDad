import React from 'react'
import styled from 'styled-components';
import { smallTablets, tablets } from '../Responsive';


const Container = styled.div`
  display: flex;
  height: 82.5vh;
  font-family: "Poppins", sans-serif;
  width: 26vw;
  justify-content: center;
  ${tablets({ height:"100vh" })}
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  padding: 15px;
`;
const Up = styled.div`
  margin-top: 15px;
  margin-bottom: 35px;
`;
const Down = styled.div``;
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
const SubTotal = styled.div`
  margin-top: 20px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  font-weight: 600;
  font-size: 12px;
  margin-top: 15px;
`;
const PromoCode = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #D1D1D1;
  background-color: #f9f9f9;
  padding: 10px 20px;
  border-radius: 12px;
  margin-top: 28px;
`;
const Input = styled.input`
  border: none;
  background-color: #f9f9f9;
`;
const Apply = styled.div`
  font-weight: 700;
  font-size: 15px;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
const TL = styled.div`
  display: flex;
  flex-direction: column;

`;
const Tt = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const Tb = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #6A983C;
`;
const TR = styled.div`
  color: #6A983C;
  font-weight: 600;
  font-size: 26px;
`;
const TPrice = styled.div``;

const OrderSummary = () => {
  return (
    <Container>
        <Wrapper>
            <Up>
                <h1 style={{fontWeight:"600", fontSize:"22px"}}>Order Summary</h1>
                <span style={{fontWeight:"400", fontSize:"12px", color:"#a9a9a9"}}>Price can change depending on shipping method and taxes of your state.</span>
            </Up>
            <Product>
            <Left>
            <img  src="giftc.png" />
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
          <hr style={{marginTop:"30px", borderTop:"1px solid #f9f9f9", marginBottom:"35px"}}/>
          <Product>
            <Left>
            <img  src="giftc.png" />
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
            <Down>
              <SubTotal>
                <Item>
                    <Span>Subtotal</Span>
                    <Span>₹730.98</Span>
                </Item>
                <Item>
                <Span>Tax</Span>
                    <Span>₹17% 16.53</Span>
                </Item>
                <Item>
                <Span>Shipping</Span>
                    <Span>₹0</Span>
                </Item>
              </SubTotal>
              <PromoCode>
                  <Input placeholder='Apply promo code' />
                  <Apply>
                    Apply now
                  </Apply>
              </PromoCode>
              <Total>
                  <TL>
                      <Tt>Total Order</Tt>
                      <Tb>Guaranteed delivery day:  June 12, 2022</Tb>
                  </TL>
                  <TR>
                      <TPrice>₹890.84</TPrice>
                  </TR>
              </Total>
            </Down>
        </Wrapper>
    </Container>
  )
}

export default OrderSummary