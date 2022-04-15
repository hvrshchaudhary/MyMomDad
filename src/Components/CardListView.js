import React from "react";
import styled from "styled-components";
import { bigMobiles, smallTablets, tablets } from "../Responsive";

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  height: auto;
  width: 100%;
  margin: 30px;
  border: 1px solid #d1d1d1;
  margin-top: 0;
  border-radius: 12px;
  ${tablets({ height: "22vh" })}
  ${bigMobiles({ margin: "10px", marginLeft:"0px", height:"16vh" })}
`;
const Img = styled.img`
  ${tablets({ height: "100%" })}
`;
const Right = styled.div`
  margin: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${tablets({ margin: "5px" })}
  ${bigMobiles({ margin: "10px", flexDirection:"column" })}
`;
const L = styled.div``;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 18px;
${tablets({ fontSize:"15px"})}
`;
const H6 = styled.h6`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 50px;
  ${tablets({ marginBottom: "0", fontSize:"11px" })}
`;
const H61 = styled.h6`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 30px;
  font-size: 12px;
  color: #a9a9a9;
  ${tablets({ marginBottom: "0" })}
`;
const Bottom = styled.div`
  ${bigMobiles({ display:"none" })}
`;
const Line = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;
const V = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #a9a9a9;
${tablets({ fontSize:"11px"})}
`;
const Q = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #a9a9a9;
${tablets({ fontSize:"11px"})}
`;
const R = styled.div`
${bigMobiles({ display:"flex", flexDirection:"row", alignItems:"center" })}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
const Delivery = styled.div`
  color: #a9a9a9;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  ${tablets({ marginBottom: "0" })}
  ${bigMobiles({ display:"none" })}
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  ${bigMobiles({ flexDirection:"row" })}
`;
const Btn1 = styled.button`
  background-color: #6a983c;
  color: white;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 16px;
  border: 2px solid #46760a;
  cursor: pointer;
  border-radius: 12px;
  margin: 10px;
  margin-bottom: 0;
  ${tablets({ padding: "8px 12px" })}
  ${bigMobiles({ fontSize:"8px", margin:"10px", padding:"4px" })}
`;
const Btn2 = styled.button`
  background-color: #f5f5f5;
  font-weight: 700;
  font-size: 15px;
  padding: 12px;
  cursor: pointer;
  border-radius: 12px;
  border: none;
  margin: 10px;
  display: flex;
  align-items: center;
  ${tablets({ padding: "8px 12px" })}
  ${bigMobiles({ fontSize:"8px" })}
`;
const Img2 = styled.img`
  ${bigMobiles({ display:"none"})}
`;
const CardListView = () => {
  return (
    <Container>
      <Img src="gift.png" />
      <Right>
        <L>
          <H1>Product Title</H1>
          <H6>Space for a small product descreption</H6>
          <Bottom>
            <Line>
              <Q>Weight</Q>
              <V>0.400kg</V>
            </Line>
            <Line>
              <Q>Dimensions</Q>
              <V>2x3x4</V>
            </Line>
            <Line>
              <Q>Weight</Q>
              <V>0.400kg</V>
            </Line>
            <Line>
              <Q>Dimensions</Q>
              <V>2x3x4</V>
            </Line>
          </Bottom>
        </L>
        <R>
          <Top>
            <H1>₹234</H1>
            <H61>₹234</H61>
            <Delivery>
              <span style={{ fontWeight: "600", fontSize: "12px" }}>
                Free shipping
              </span>
              <span style={{ fontWeight: "400", fontSize: "12px" }}>
                Delivery in one day
              </span>
            </Delivery>
          </Top>
          <Buttons>
            <Btn1>
              Product Detail
              <Img2 style={{ padding: "0 7px" }} src="arrow.png" />{" "}
            </Btn1>
            <Btn2>
              <Img2 style={{ paddingRight: "4px" }} src="heart.png" />
              Add to wish list
            </Btn2>
          </Buttons>
        </R>
      </Right>
    </Container>
  );
};

export default CardListView;
