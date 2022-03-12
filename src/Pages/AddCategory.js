import React from 'react'
import styled from 'styled-components';
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
`;
const H4 = styled.h4`
  font-weight: 400;
  font-size: 15px;
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
`;
const SpanM = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #9E9E9E;
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
`;
const Input = styled.input`
  flex: 2;
  border: 1px solid #D1D1D1;
  background-color: #F9F9F9;
  color: #A9A9A9;
  border-radius: 12px;
  padding: 14px 20px;

`;
const AddCategory = () => {
  return (
    <Container>
        <Wrapper>
        <Top>
                <H1>Add Product</H1>
                <H4>Add your product and necessary information from here</H4>
            </Top>
            <Bottom>
                <Row>
                    <Span>Product Image</Span>
                    <Div>
                        <img src='upload.svg'/>
                        <h3 style={{fontWeight:"500", color:"#707275"}}>Drag your image here</h3>
                        <SpanM>(Only *.jpeg and *.png images will be accepted)</SpanM>
                    </Div>
                </Row>
                <Row>
                    <Span>Parent Category</Span>
                    <Input placeholder='Parent Category'/>
                </Row>
                <Row>
                    <Span>Child Category</Span>
                    <Input placeholder='Child Category'/>
                </Row>
                </Bottom>
        </Wrapper>
    </Container>
  )
}

export default AddCategory