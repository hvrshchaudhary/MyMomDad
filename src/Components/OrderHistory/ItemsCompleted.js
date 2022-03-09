import React from 'react'
import styled from "styled-components";
import { smallMobiles, smallTablets } from '../../Responsive';

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;  
  ${smallTablets({flex:"1.5"})}
`;
const Span = styled.span`
  font-weight: 400;
  ${smallTablets({fontSize:"11px"})}
  ${smallMobiles({fontSize:"10px"})}
`;
const Span2 = styled.span`
  padding-right:25px;
  font-size:24px;
  font-weight:600;
  color:#6A983C;
  ${smallTablets({fontSize:"13px", paddingRight:"15px"})}
  ${smallMobiles({fontSize:"10px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const R = styled.div`
  display: flex;
  align-items: center;
`;
const Img1 = styled.img`
  padding-right: 10px;
  ${smallTablets({height:"15px"})}
  ${smallMobiles({height:"12px"})}
`;
const Img2 = styled.img`
  padding-right: 25px;
  ${smallTablets({height:"15px"})}
  ${smallTablets({paddingRight:"15px"})}
  ${smallMobiles({height:"12px"})}
`;
const Img3 = styled.img`
  ${smallTablets({height:"8px"})}
  ${smallMobiles({height:"6px"})}
`;
const ItemsCompleted = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span style={{fontWeight:"500"}}>1235 2345 345605</Span>
          <Span>29.02.2022</Span>
          <Span>Aman Gupta</Span>
          <Span style={{color:"#00893A", display:"flex", alignItems:"center"}}><Img1 src='completed.png'/>Completed</Span>
        </Left>
        <Right>
          <Span2 style={{ }}>₹890.84</Span2>
          <R>
            <Img2 src='dots.png'/>
            <Img3 src='adw.png'/>
          </R>
        </Right>
      </Wrapper>
      <hr style={{margin:"15px 0", borderTop:"1px solid #EAECEE"}}/>    
    </Container>
  )
}

export default ItemsCompleted