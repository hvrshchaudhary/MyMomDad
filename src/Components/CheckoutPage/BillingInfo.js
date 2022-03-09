import React from "react";
import styled from "styled-components";
import { bigMobiles, smallTablets, tablets } from "../../Responsive";

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 17px 0;
`;
const C1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 29vw;
  ${smallTablets({ width:"36vw" })}
`;
const C2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 29vw;
  ${smallTablets({ width:"36vw" })}
`;
const H3 = styled.h3`
  font-weight: 600;
  font-size: 12px;
`;
const Input = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  font-weight: 400;
  font-size: 18px;
  padding: 15px 20px;
  width: 100%;
  ${tablets({ width:"80%" })}
  ${smallTablets({ width:"100%" })}
  ${bigMobiles({ fontSize:"12px", padding:"10px 15px", width:"80%" })}

`;
const Row2 = styled.div`
  display: flex;
  margin: 17px 0;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f9f9f9;
  padding: 15px 20px;
  width: 47%;
  align-items: center;
  ${tablets({ width:"40%" })}
  ${smallTablets({ width:"43%" })}
  ${bigMobiles({ fontSize:"12px", padding:"10px 15px", width:"90%" })}
`;
const BillingInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <H1>Billing info</H1>
          <Span>
            <S1>Please enter your billing info</S1>
            <S2>Step 1 of 5</S2>
          </Span>
        </Top>
        <Bottom>
          <Row>
            <C1>
              <H3>First name</H3>
              <Input placeholder="First name" />
            </C1>
            <C2>
              <H3>Last name</H3>
              <Input placeholder="Last name" />
            </C2>
          </Row>
          <Row>
            <C1>
              <H3>Email address</H3>
              <Input placeholder="Email address" />
            </C1>
            <C2>
              <H3>Phone number</H3>
              <Input placeholder="Phone number" />
            </C2>
          </Row>
          <Row>
            <C1>
              <H3>Address</H3>
              <Input placeholder="Address" />
            </C1>
            <C2>
              <H3>Town / City</H3>
              <Input placeholder="Town or City" />
            </C2>
          </Row>
          <Row>
            <C1>
              <H3>State</H3>
              <Input placeholder="State" />
            </C1>
            <C2>
              <H3>ZIP / Postal code</H3>
              <Input placeholder="Postal code or ZIP" />
            </C2>
          </Row>
          <Row2>
            <input type="checkbox" />
            <label style={{fontWeight:"400", fontSize:"14px", paddingLeft:"10px"}}>Ship to a different address</label>
          </Row2>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default BillingInfo;
