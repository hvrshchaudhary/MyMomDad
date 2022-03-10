import React from "react";
import styled from "styled-components";
import { bigMobiles, mediumTablets, smallerTablets } from "../../../Responsive";
import SearchCategory from "./SearchCategory";
const Map = [1, 2, 3, 4, 5, 6, 7, 8];
const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: white;
  padding: 18px;
  ${bigMobiles({ padding: "8px" })}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  ${bigMobiles({ margin: "12px" })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-weight: 400;
  color: #24262d;
  padding-bottom: 20px;
  ${mediumTablets({ fontSize: "26px" })}
  ${bigMobiles({ fontSize: "22px", paddingBottom: "20px" })}
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
`;
const Titles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f4f5f7;
  height: 50px;
  align-items: center;
  ${bigMobiles({ columnGap: "2px", margin: "0 3px" })}
`;
const Span = styled.span`
  color: #707275;
  font-weight: 300;
  ${mediumTablets({ fontSize: "12px" })}
  ${smallerTablets({ fontSize: "10px" })}
  ${bigMobiles({ fontSize: "9px" })}
`;
const SpanM = styled.span`
  color: #707275;
  font-weight: 300;
  ${mediumTablets({ fontSize: "12px" })}
  ${smallerTablets({ fontSize: "10px" })}
  ${bigMobiles({ display: "none" })}
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-around;
  height: 50px;
  align-items: center;
`;
const SpanR = styled.div`
  ${mediumTablets({ fontSize: "12px" })}
  ${smallerTablets({ fontSize: "10px" })}
`;
const SpanRM = styled.div`
  ${mediumTablets({ fontSize: "12px" })}
  ${smallerTablets({ fontSize: "10px" })}
  ${bigMobiles({ display: "none" })}
`;
const Button = styled.button`
  border: none;
  background-color: #def7ec;
  color: #0e9f6e;
  border-radius: 90px;
  ${mediumTablets({ fontSize: "12px" })}
`;
const Img3 = styled.img`
  padding-left: 15px;
`;
const DashboardC = () => {
  return (
    <>
      <Top>
        <Img3 src="notification.svg" />
        <Img3 src="profile.svg" />
      </Top>
      <Container>
        <H1>Category</H1>
        <SearchCategory/>
        <Wrapper>
          <Body>
            <Titles>
            </Titles>
            {Map.map((item) => {
              return (
                <>
                  <Row>
                    <SpanR>{item}</SpanR>
                    <SpanRM><img src="sample.svg"/></SpanRM>
                    <SpanR>Photoframe</SpanR>
                    <SpanRM>1</SpanRM>
                    <SpanR>Gifts</SpanR>
                    <SpanR><img src="on.svg"/></SpanR>
                    <SpanR>
                      <img src="delete.png"/>
                    </SpanR>
                  </Row>
                  <hr style={{ borderTop: "1px solid #E5E7EB" }} />
                </>
              );
            })}
          </Body>
        </Wrapper>
      </Container>
    </>
  );
};

export default DashboardC;
