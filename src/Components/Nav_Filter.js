import React from "react";
import styled from "styled-components";
import { bigMobiles, smallTablets, tablets } from "../Responsive";

const Container = styled.div`
  font-family: "Poppins";
`;
const Nav = styled.div`
  display: flex;
  margin: 20px 50px;
  margin-bottom: 30px;
  justify-content: space-between;
  ${bigMobiles({margin:"20px"})}
`;
const Left = styled.div`
  display: flex;
`;
const Li1 = styled.h4`
  font-weight: 300;
  font-size: 12px;
  color: #a9a9a9;
  ${bigMobiles({fontSize:"10px"})}
`;
const Li = styled.h4`
  font-weight: 300;
  font-size: 12px;
  padding: 0 10px;
  ${bigMobiles({fontSize:"10px"})}
`;
const Right = styled.div`
  display: flex;
  ${bigMobiles({display:"none"})}
`;
const Ri = styled.div`
  display: flex;
  padding: 0 10px;
`;
const Icon = styled.img`
  object-fit: contain;
  padding-right: 5px;
  padding-left: 5px;
`;
const H5 = styled.h5`
  font-size: 12px;
  font-weight: 300;
  color: #a9a9a9;
  ${bigMobiles({fontSize:"10px"})}
`;
const H51 = styled.h5`
  font-size: 12px;
  font-weight: 300;
  ${bigMobiles({fontSize:"10px"})}
`;
const Button = styled.button`
  border: none;
  background-color: #f4f8ec;
  color: #6a983c;
  border-radius: 12px;
  margin-right: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
const Filter = styled.div`
  margin: 20px 50px;
  ${bigMobiles({margin:"20px"})}
`;
const Top = styled.div`
  display: flex;
  margin-bottom: 20px;
  ${bigMobiles({display:"none"})}

`;
const Bottom = styled.div`
  display: flex;
`;
const H3 = styled.h3`
  padding-right: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #a9a9a9;
`;
const FilterText = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  width: 20%;
  display: flex;
  align-items: center;
  ${tablets({width:"30%"})}
  ${smallTablets({fontSize:"12px"})}
`;
const FilterNbm = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  margin: 0px 16px;
  padding: 9px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${smallTablets({fontSize:"12px"})}
`;
const FilterSelect = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  margin: 0px 16px;
  padding: 9px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${smallTablets({fontSize:"12px"})}
`;
const Input = styled.input`
  /* margin: 0 10px; */

  /* background-color: #6a983c; */
`;
const Label = styled.label`
  width: "100%";
  margin-left: 5px;
`;

const Nav_Filter = () => {
  return (
    <Container>
      <Nav>
        <Left>
          <Li1>Homepage /</Li1>
          <Li>Gifts for Mom /</Li>
          <Li>Photo Frame</Li>
        </Left>
        <Right>
          <Ri>
            <Icon src="Layer.png" />
            <H51>Grid View</H51>
          </Ri>
          <Ri>
            <Icon src="listview.png" />
            <H5>List View</H5>
          </Ri>
          <Ri>
            <Button>117</Button>
            <H5>Products</H5>
          </Ri>
        </Right>
      </Nav>
      <Filter>
        <Top>
          <FilterText>
            <Input
              style={{ border: "0px", width: "15%", height: "1.5rem" }}
              type="radio"
            />
            <Label style={{}}>Filter text</Label>
            <Input
              style={{ border: "0px", width: "15%", height: "1.5rem" }}
              type="radio"
            />
            <Label>Filter text</Label>
          </FilterText>
          <FilterNbm>
            <Input type="checkbox" />
            <Label>Filter</Label>
            <Icon src="nbm.png" />
          </FilterNbm>
          <FilterNbm>
            <Input type="checkbox" />
            <Label>Filter</Label>
            <Icon src="nbm.png" />
          </FilterNbm>
          <FilterSelect>
            <Input type="checkbox" />
            <Label>Filter</Label>
            <Icon src="12.png" />
            <h4 style={{ padding: "0 5px", fontWeight: "100" }}>|</h4>
            <select style={{ border: "none", backgroundColor: "#f9f9f9", fontWeight:"600" }}>
              <option >select</option>
            </select>
          </FilterSelect>
        </Top>
        <Bottom>
          <H3>Applied filters :</H3>
          <Button>
            Selected Filter <Icon src="cross.png" />
          </Button>
          <Button>
            Selected Filter <Icon src="cross.png" />
          </Button>
        </Bottom>
      </Filter>
    </Container>
  );
};

export default Nav_Filter;
