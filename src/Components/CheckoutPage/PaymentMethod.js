import React from 'react'
import styled from "styled-components";
import { bigMobiles } from '../../Responsive';

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  margin-top: 60px;
  ${bigMobiles({ marginTop:"20px" })}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 32px;
  ${bigMobiles({ fontSize:"22px" })}
`;
const Span = styled.div`
  display: flex;
  justify-content: space-between;
`;
const S1 = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #a9a9a9;
  ${bigMobiles({ fontSize:"12px" })}
`;
const S2 = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #a9a9a9;
  ${bigMobiles({ fontSize:"12px" })}
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  margin: 16px 0px; 
`;
const Top1 = styled.div`
  display: flex;
  margin: 30px;
  margin-bottom: 10px;
  align-items: center;
  ${bigMobiles({ margin:"20px" })}
`;
const Bottom = styled.div`
  margin: 30px;
  margin-top: 15px;
  margin-bottom: 150px;
  ${bigMobiles({margin:"20px", marginBottom:"100px",marginTop:"0"  })}
  
`;
const Input = styled.input`
   border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  font-weight: 400;
  font-size: 18px;
  padding: 15px 20px;
  width: 96%;
  ${bigMobiles({ padding:"10px 15px", width:"90%", fontSize:"15px" })}
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 17px 0;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  padding: 15px 20px;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10px;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
`;
const PaymentMethod = () => {
  return (
    <Container>
        <Top>
        <H1>Payment method</H1>
        <Span>
          <S1>Please enter your payment method</S1>
          <S2>Step 3 of 5</S2>
        </Span>
      </Top>
      <Card>
          <Top1>
          <img style={{height:"20px", width:"20px"}} src='circle.png'/>
              <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                <h3 style={{fontSize:"18px", fontWeight:"600"}}>Credit card</h3>
                <img src='visa.png'/>
              </div>
          </Top1>
          <Bottom>
              <h3 style={{fontSize:"18px", fontWeight:"600"}}>Card number</h3>
              <Input placeholder='Card number'/>
          </Bottom>
      </Card>
      <Row>
          <input type="radio" />
          <Div>
              <Name>PayPal</Name>
              <img src="paypal.png" />
          </Div>
        </Row>
    </Container>
  )
}

export default PaymentMethod