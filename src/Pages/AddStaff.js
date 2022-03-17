import React from 'react'
import styled from 'styled-components'
import { bigMobiles } from '../Responsive';

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #F9FAFB;
`;
const H1 = styled.h1`
  font-weight: 400;
  font-size: 22px;
  ${bigMobiles({fontSize:"18px"})}
`;
const H4 = styled.h4`
  font-weight: 400;
  font-size: 15px;
  ${bigMobiles({fontSize:"12px"})}
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  ${bigMobiles({flexDirection:"column", alignItems:"start"})}
`;
const Span = styled.span`
  flex: 1;
  font-weight: 400;
  font-size: 15px;
  ${bigMobiles({fontSize:"12px"})}
`;
const SpanM = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #9E9E9E;
  ${bigMobiles({fontSize:"11px", textAlign:"center"})}
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  align-items: center;
  border: 1px solid #008000;
  padding: 40px 0;
  border-radius: 12px;
  ${bigMobiles({padding:"30px 20px", width:"90%"})}
`;
const H3 = styled.h3`
  font-weight:500;
  color:#707275;
  ${bigMobiles({fontSize:"13px"})}
  
`;
const Input = styled.input`
  flex: 2;
  border: 1px solid #D1D1D1;
  background-color: #F9F9F9;
  color: #A9A9A9;
  border-radius: 12px;
  padding: 14px 20px;
  ${bigMobiles({padding:"10px 16px", width:"90%"})}

`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px 0;
`;
const Cancel = styled.button`
  border: 2px solid #46760a;
  background-color: #F9F9F9;
  border-radius: 10px;
  font-weight: 700;
  color: #6A983C;
  padding: 12px;
  margin-right: 20px;
  ${bigMobiles({padding:"7px"})}
`;
const Add = styled.button`
  border: 2px solid #46760a;
  background-color: #6a983c;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  padding: 12px;
  ${bigMobiles({padding:"7px"})}
`;
const AddStaff = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <H1>Add Staff</H1>
                <H4>Add your product and necessary information from here</H4>
            </Top>
            <Bottom>
                <Row>
                    <Span>Staff Image</Span>
                    <Div>
                        <img src='upload.svg'/>
                        <H3>Drag your image here</H3>
                        <SpanM>(Only *.jpeg and *.png images will be accepted)</SpanM>
                    </Div>
                </Row>
                <Row>
                    <Span>Name</Span>
                    <Input/>
                </Row>
                <Row>
                    <Span>Email</Span>
                    <Input/>
                </Row>
                <Row>
                    <Span>Password</Span>
                    <Input/>
                </Row>
                <Row>
                    <Span>Contact</Span>
                    <Input/>
                </Row>
                <Row>
                    <Span>Joining Date</Span>
                    <Input/>
                </Row>
                <Row>
                    <Span>Staff Role</Span>
                    <Input/>
                </Row>
                
            <Buttons>
                <Cancel>Cancel</Cancel>
                <Add>Add Staff</Add>
            </Buttons>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default AddStaff