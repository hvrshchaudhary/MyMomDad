import React from 'react'
import styled from "styled-components";
import { bigMobiles, smallMobiles, smallScreen, smallTablets } from '../../Responsive';

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
  margin-bottom:20px ;
  ${smallScreen({ fontSize: "17px", marginBottom: "14px" })}
  ${smallTablets({ fontSize: "14px", marginBottom: "12px" })}
`;
const H2 = styled.h1`
  font-weight: 500;
  font-size: 18px;
  padding-left: 20px;
  ${smallScreen({ fontSize: "14px" })}
  ${smallTablets({fontSize:"12px", fontWeight:"400"})}
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
`;
const Span = styled.span`
  ${smallScreen({ fontSize: "14px" })}
  ${smallTablets({ fontSize: "14px" })}
  ${bigMobiles({fontSize:"11px"})}
`;
const Img = styled.img`
  ${bigMobiles({height:"50px"})}
  ${smallMobiles({display:"none"})}
`;
const RDetailsB = () => {
  return (
    <Container>
        <Wrapper>
            <H1>List of products:</H1>
            <Div>
              <Titles>
                <L>
                  <Span style={{paddingRight:"20px"}}>S No.</Span>
                  <Span>Product Name</Span>
                </L>
                <R>
                  <Span>Quantity</Span>
                  <Span>Condition</Span>
                  <Span>Resolution</Span>
                </R>
              </Titles>
              <hr style={{margin:"15px 0", borderTop:"2px solid #6A983C"}}/>
              <Titles>
                <L>
                  <Span style={{paddingRight:"20px"}}>1.</Span>
                  <Img src='generic.png'/>
                  <H2>Product title</H2>
                </L>
                <R>
                  <Span>1</Span>
                  <Span>opened</Span>
                  <Span>exchange</Span>
                </R>
              </Titles>
              <hr style={{margin:"15px 0", borderTop:"2px solid white"}}/> 
              <Titles>
                <L>
                  <Span style={{paddingRight:"20px"}}>1.</Span>
                  <Img src='generic.png'/>
                  <H2>Product title</H2>
                </L>
                <R>
                  <Span>1</Span>
                  <Span>opened</Span>
                  <Span>refund</Span>
                </R>
              </Titles>
              <hr style={{margin:"15px 0", borderTop:"2px solid white"}}/>    
              <Titles>
                <L>
                  <Span style={{paddingRight:"20px"}}>1.</Span>
                  <Img src='generic.png'/>
                  <H2>Product title</H2>
                </L>
                <R>
                  <Span>1</Span>
                  <Span>opened</Span>
                  <Span>gift card</Span>
                </R>
              </Titles>
              <hr style={{margin:"15px 0", borderTop:"2px solid white"}}/>              
            </Div>
        </Wrapper>
    </Container>
  )
}

export default RDetailsB