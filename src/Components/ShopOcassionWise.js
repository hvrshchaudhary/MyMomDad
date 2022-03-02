import React from "react";
import styled from "styled-components";
import { smallTablets, tablets } from "../Responsive";

const Container = styled.div`
  background-color: #f1f1f1;
  font-family: 'Poppins', sans-serif;
`;
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 90px;
  ${tablets({ paddingLeft:"30px" })}
  ${smallTablets({ padding:"20px" })}
`;
const Top = styled.div``;
const Heading = styled.h1`
  font-weight: 500;
  ${tablets({ fontSize:"20px" })}
  ${smallTablets({ fontSize:"16px" })}
`;
const Bottom = styled.div``;
const Cards = styled.div`
  height: 30vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "card1 card2 card3 card4";
  ${tablets({ height:"25vh" })}
  /* ${smallTablets({ height:"20vh" })} */
`;
const Card1 = styled.div`
  grid-area: card1;
  border-radius: 10px;
  display: flex;
  justify-self: flex-start;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  ${tablets({ alignSelf:"center" })}
`;
const Card2 = styled.div`
  grid-area: card2;
  border-radius: 10px;
  display: flex;
  justify-self: flex-start;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  ${tablets({ alignSelf:"center" })}
`;
const Card3 = styled.div`
  grid-area: card3;
  border-radius: 10px;
  display: flex;
  justify-self: flex-start;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  ${tablets({ alignSelf:"center" })}
`;
const Card4 = styled.div`
  grid-area: card4;
  border-radius: 10px;
  display: flex;
  justify-self: flex-start;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  ${tablets({ alignSelf:"center" })}
`;
const Img = styled.img`
  ${tablets({ height: "180px", width: "220px" })}
  ${smallTablets({ height: "150px", width: "170px" })}

`;
const Gradient = styled.div`
  position: absolute;
  height: 22%;
  width: 99%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(0deg, black, transparent);
  ${tablets({ height:"35%" })}
`;
const Text = styled.h3`
  color: white;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 20px;
  ${tablets({ fontWeight:"500", fontSize:"18px"})}
  ${smallTablets({ fontWeight:"450", fontSize:"15px" })}
`;
const ShopOcassionWise = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Heading>Shop Occasion-wise</Heading>
        </Top>
        <Bottom>
          <Cards>
            <Card1>
              <Img src="BirthdayGift.png" />
              <Gradient>
                <Text>Birthday Gifts</Text>
              </Gradient>
            </Card1>
            <Card2>
              <Img src="ValentineGift.png" />
              <Gradient>
                <Text>Valentine Gifts</Text>
              </Gradient>
            </Card2>
            <Card3>
              <Img src="BirthdayGift.png" />
              <Gradient>
                <Text>Birthday Gifts</Text>
              </Gradient>
            </Card3>
            <Card4>
              <Img src="ValentineGift.png" />
              <Gradient>
                <Text>Valentine Gifts</Text>
              </Gradient>
            </Card4>
          </Cards>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default ShopOcassionWise;
