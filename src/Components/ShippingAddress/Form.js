import React from "react";
import styled from "styled-components";
import { bigMobiles, smallTablets, tablets } from "../../Responsive";

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  background-color: #F5F5F5;
  border-radius: 12px;
  padding: 30px;
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
  ${smallTablets({fontSize:"22px"})}
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 17px 0;
  ${smallTablets({justifyContent:"space-around"})}
  ${bigMobiles({flexDirection:"column", marginBottom:"0"})}
`;
const C1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 29vw;
  ${smallTablets({width:"36vw"})}
  ${bigMobiles({width:"100%"})}
`;
const C2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 29vw;
  ${smallTablets({width:"36vw"})}
  ${bigMobiles({width:"100%"})}
`;
const H3 = styled.h3`
  font-weight: 400;
  font-size: 15px;
  color: #434447;
`;
const Input = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  background-color: white;
  font-weight: 400;
  font-size: 18px;
  padding: 15px 20px;
  width: 90%;
  ${smallTablets({padding:"10px 20px"})}
`;
const Button = styled.button`
  padding: 10px 6px;
  background-color: #6a983c;
  border: 2px solid #46760a;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
  width: 15%;
  ${tablets({width:"25%"})}
  ${smallTablets({padding:"6px", fontSize:"12px"})}
  ${bigMobiles({width:"70%"})}
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Form = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <H1>Add New Shipping Address</H1>
        </Top>
        <Bottom>
          <Row>
            <C1>
              <H3>Address name</H3>
              <Input/>
            </C1>
            <C2>
              <H3>Street</H3>
              <Input />
            </C2>
          </Row>
          <Row>
            <C1>
              <H3>Name</H3>
              <Input />
            </C1>
            <C2>
              <H3>City</H3>
              <Input />
            </C2>
          </Row>
          <Row>
            <C1>
              <H3>Surname</H3>
              <Input />
            </C1>
            <C2>
              <H3>Postal code</H3>
              <Input />
            </C2>
          </Row>
          <Row>
            <C1>
              <H3>E-mail</H3>
              <Input />
            </C1>
            <C2>
              <H3>State/Provice</H3>
              <Input placeholder="Any State/Provice" />
            </C2>
          </Row>
          <Row>
            <C1>
              <H3>Phone</H3>
              <Input />
            </C1>
            <C2>
              <H3>Country</H3>
              <Input placeholder="Any Country" />
            </C2>
          </Row>
          <hr style={{margin:"15px 0", borderTop:"2px solid white"}}/>
          <Row2>
              <span style={{color:"#6A983C", paddingRight:"20px"}}>Cancel</span>
              <Button>Add new shipping address</Button>
          </Row2>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Form;