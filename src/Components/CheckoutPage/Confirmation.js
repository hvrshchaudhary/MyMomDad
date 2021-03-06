import React from 'react'
import styled from "styled-components";
import { bigMobiles } from '../../Responsive';

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  margin-top: 60px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
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
const Row = styled.div`
  display: flex;
  margin: 17px 0;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  padding: 15px 20px;
  width: 92%;
  align-items: center;
  ${bigMobiles({ fontSize:"12px" })}
`;
const Button = styled.button`
  padding: 20px 13px;
  margin: 20px 0;
  background-color: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  color: white;
  width: 200px;
  font-weight: 700;
  cursor: pointer;
  font-size: 18px;
  ${bigMobiles({ fontSize:"12px", width:"130px", padding:"10px" })}
`;
const Info = styled.div`
  width: 300px;
  margin-top: 20px;
`;
const Label = styled.label`
  font-size:14px;
  ${bigMobiles({ fontSize:"10px" })}
`;
const Span2 = styled.span`
  font-size: 15px;
  ${bigMobiles({ fontSize:"12px" })}
`;
const Confirmation = () => {
  return (
    <Container>
      <Top>
        <H1>Confirmation</H1>
        <Span>
          <S1>We are getting to the end. Just few clicks and your order is ready!</S1>
          <S2>Step 5 of 5</S2>
        </Span>
      </Top>
      <Row>
        <input type="checkbox" />
        <Label style={{fontWeight:"400",  paddingLeft:"10px"}}>I agree with sending an Marketing and newsletter emails. No spam, promissed!</Label>
      </Row>
      <Row>
        <input type="checkbox" />
        <Label style={{fontWeight:"400",  paddingLeft:"10px"}}>I agree with our terms and conditions and privacy policy.</Label>
      </Row>
      <Button>Complete order</Button>
      <Info>
          <img src='yes.png'/>
          <h4 style={{fontWeight:"600",fontSize:"15px"}}>All your data are safe</h4>
          <Span2 style={{fontWeight:"400", color:"#a9a9a9"}}>We are using the most advanced security to provide you the best experience ever.</Span2>
      </Info>
    </Container>
  )
}

export default Confirmation