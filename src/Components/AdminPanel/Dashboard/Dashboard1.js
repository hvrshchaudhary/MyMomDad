import React from "react";
import styled from "styled-components";
import { bigMobiles, mediumTablets, smallerScreen } from "../../../Responsive";

const Container = styled.div`
  margin: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: white;
  padding: 18px;
  ${bigMobiles({ padding:"8px" })}

`;
const H1 = styled.h1`
  font-weight: 300;
  font-size: 24px;
`;
const Div = styled.div`
  ${bigMobiles({ display: "flex", flexDirection: "column", height: "100%" })}
`;
const Revenue = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 30px 0;
  height: 250px;
  ${smallerScreen({ height: "200px" })}
  ${mediumTablets({ height: "170px" })}
  ${bigMobiles({ flexDirection: "column", height: "100%", rowGap: "10px" })}
`;
const Card = styled.div`
  flex: 1;
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cardx = styled.div`
  flex: 1;
  padding: 30px;
  margin: 0 15px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${bigMobiles({ margin: "0px" })}
`;
const SecondaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img1 = styled.img``;
const Span = styled.span`
  color: white;
  padding-top: 10px;
  font-size: 18px;
  font-weight: 300;
  ${smallerScreen({ fontSize: "15px" })}
  ${bigMobiles({ paddingTop: "0", fontSize: "12px" })}
`;
const Amount = styled.div`
  color: white;
  font-size: 32px;
  font-weight: 400;
  ${smallerScreen({ fontSize: "26px" })}
`;
const OrderHistory = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  ${bigMobiles({ flexDirection: "column", rowGap: "10px" })}
`;
const OCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  width: 25%;
  justify-content: center;
  height: 80px;
  align-items: center;
  ${mediumTablets({ height: "60px" })}
  ${bigMobiles({ width: "100%" })}
`;
const ImgDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgBg = styled.img`
  position: relative;
  height: 70px;
  ${smallerScreen({ height: "50px" })}
`;
const Img2 = styled.img`
  position: absolute;
  height: 35px;
  ${smallerScreen({ height: "25px" })}
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;
const Span2 = styled.span`
  font-size: 18px;
  font-weight: 300;
  ${smallerScreen({ fontSize: "14px" })}
`;
const Num = styled.span`
  font-size: 28px;
  font-weight: 300;
  ${smallerScreen({ fontSize: "22px" })}
`;
const Img = styled.img`
  margin-top: 30px;
  ${bigMobiles({ display: "none" })}
`;
const Img3 = styled.img`
  padding-left: 15px;
`;
const Dashboard1 = () => {
  return (
    <>
      <Top>
        <Img3 src="notification.svg" />
        <Img3 src="profile.svg" />
      </Top>
      <Container>
        <Wrapper>
          <H1>Dashboard Overview</H1>
          <Div>
            <Revenue>
              <Card style={{ backgroundColor: "#0694A2" }}>
                <Img1 src="todayorder.svg" />
                <SecondaryDiv>
                  <Span>Total Order</Span>
                  <Amount>$300</Amount>
                </SecondaryDiv>
              </Card>
              <Cardx style={{ backgroundColor: "#3F83F8" }}>
                <Img1 src="cart.svg" />
                <SecondaryDiv>
                  <Span>This Month</Span>
                  <Amount>$500</Amount>
                </SecondaryDiv>
              </Cardx>
              <Card style={{ backgroundColor: "#0E9F6E" }}>
                <Img1 src="creditcard.svg" />
                <SecondaryDiv>
                  <Span>Total Order</Span>
                  <Amount>$95000</Amount>
                </SecondaryDiv>
              </Card>
            </Revenue>
            <OrderHistory>
              <OCard>
                <ImgDiv>
                  <ImgBg src="scbg.svg" />
                  <Img2 src="sc.svg" />
                </ImgDiv>
                <Right style={{ paddingRight: "30px" }}>
                  <Span2>Total Order</Span2>
                  <Num>169</Num>
                </Right>
              </OCard>
              <OCard>
                <ImgDiv>
                  <ImgBg src="bg.svg" />
                  <Img2 />
                </ImgDiv>
                <Right style={{ paddingRight: "20px" }}>
                  <Span2>Order Pending</Span2>
                  <Num>34</Num>
                </Right>
              </OCard>
              <OCard>
                <ImgDiv>
                  <ImgBg src="dtbg.svg" />
                  <Img2 src="dt.svg" />
                </ImgDiv>
                <Right>
                  <Span2>Order Processing</Span2>
                  <Num>59</Num>
                </Right>
              </OCard>
              <OCard>
                <ImgDiv>
                  <ImgBg src="tickbg.svg" />
                  <Img2 src="tick.svg" />
                </ImgDiv>
                <Right>
                  <Span2>Orders Delivered</Span2>
                  <Num>65</Num>
                </Right>
              </OCard>
            </OrderHistory>
          </Div>
          <Img src="stats.svg" />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard1;
