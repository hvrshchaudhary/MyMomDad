import React from "react";
import styled from "styled-components";
import { bigMobiles, mediumTablets } from "../../../Responsive";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  margin: 20px 30px;
  column-gap: 20px;
  margin-top: 0;
  border-radius: 12px;
  padding: 30px;
  align-items: center;
  ${bigMobiles({flexDirection:"column", margin:"10px", padding:"20px 0"})}
`;
const Search = styled.div`
  flex: 6;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  justify-content: space-around;
  ${bigMobiles({flexDirection:"column"})}
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  ${bigMobiles({width:"100%"})}
`;
const Span = styled.span`
  font-weight: 600;
  font-size: 12px;
`;
const Input = styled.input`
  border: 1px solid #d1d1d1;
  background-color: #f9f9f9;
  padding: 12px;
  border-radius: 10px;
`;
const Div = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  ${bigMobiles({width:"100%", justifyContent:"center"})}
`;
const Button = styled.button`
  border: 2px solid #46760a;
  background-color: #6a983c;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  padding: 12px;
  margin-top: 10px;
  ${mediumTablets({fontSize:"12px", padding:"8px"})}
  ${bigMobiles({width:"75%"})}
`;
const SearchByPhone = () => {
  return (
    <Container>
      <Search>
        <Item>
          <Input placeholder="Search by Phone" />
        </Item>
        <Item>
          <Input placeholder="Status" />
        </Item>
        <Item>
          <Input placeholder="Order limits" />
        </Item>
      </Search>
      <Div>
        <Button>Download All Orders</Button>
      </Div>
    </Container>
  );
};

export default SearchByPhone;
