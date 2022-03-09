import React from "react";
import styled from "styled-components";
import { bigMobiles, smallTablets } from "../../Responsive";

const Container = styled.div`
  height: auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
  ${smallTablets({ fontSize: "14px", marginBottom: "12px" })}
`;
const H2 = styled.h1`
  font-weight: 500;
  font-size: 18px;
  padding-left: 20px;
  ${smallTablets({fontSize:"14px", fontWeight:"400"})}
  ${bigMobiles({fontSize:"11px"})}
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Titles = styled.div`
  display: flex;
  flex-direction: row;
`;
const L = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const R = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${smallTablets({ flex: "1.5" })}
`;
const Span = styled.span`
  ${smallTablets({ fontSize: "14px" })}
  ${bigMobiles({fontSize:"11px"})}
`;
const Span2 = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #6a983c;
  ${smallTablets({fontSize:"18px"})}
  ${bigMobiles({fontSize:"14px"})}
`;
const Img = styled.img`
  ${bigMobiles({height:"40px"})}
`;
const DetailsB = () => {
  return (
    <Container>
      <Wrapper>
        <H1>List of products:</H1>
        <Div>
          <Titles>
            <L>
              <Span style={{ paddingRight: "20px" }}>S No.</Span>
              <Span>Product Name</Span>
            </L>
            <R>
              <Span>Quantity</Span>
              <Span>Price(net)</Span>
              <Span>Price(gross)</Span>
            </R>
          </Titles>
          <hr style={{ margin: "15px 0", borderTop: "2px solid #6A983C" }} />
          <Titles>
            <L>
              <Span style={{ paddingRight: "20px" }}>1.</Span>
              <Img src="generic.png" />
              <H2>Product title</H2>
            </L>
            <R>
              <Span>1</Span>
              <Span>₹890.84</Span>
              <Span2>₹890.84</Span2>
            </R>
          </Titles>
          <hr style={{ margin: "15px 0", borderTop: "2px solid white" }} />
          <Titles>
            <L>
              <Span style={{ paddingRight: "20px" }}>2.</Span>
              <Img src="generic.png" />
              <H2>Product title</H2>
            </L>
            <R>
              <Span>1</Span>
              <Span>₹890.84</Span>
              <Span2>₹890.84</Span2>
            </R>
          </Titles>
          <hr style={{ margin: "15px 0", borderTop: "2px solid white" }} />
          <Titles>
            <L>
              <Span style={{ paddingRight: "20px" }}>3.</Span>
              <Img src="generic.png" />
              <H2>Product title</H2>
            </L>
            <R>
              <Span>1</Span>
              <Span>₹890.84</Span>
              <Span2>₹890.84</Span2>
            </R>
          </Titles>
          <hr style={{ margin: "15px 0", borderTop: "2px solid white" }} />
          <Titles>
            <L>
              <Span style={{ paddingRight: "20px" }}>4.</Span>
              <Img src="generic.png" />
              <H2>Product title</H2>
            </L>
            <R>
              <Span>1</Span>
              <Span>₹890.84</Span>
              <Span2>₹890.84</Span2>
            </R>
          </Titles>
          <hr style={{ margin: "15px 0", borderTop: "2px solid white" }} />
        </Div>
      </Wrapper>
    </Container>
  );
};

export default DetailsB;
