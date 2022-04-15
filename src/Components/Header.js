import React from "react";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import {
  smallScreen,
  smallerScreen,
  tablets,
  smallTablets,
  smallerTablets,
  bigMobiles,
  mobiles,
  smallMobiles,
} from "../Responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  /* font-family: "Bakbak One", cursive; */
`;
const Wrapper = styled.div``;
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  margin-bottom: 10px;
`;
const CLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const CItem = styled.h5`
  margin: 0 15px;
  font-weight: 300;
  font-size: 14px;
  ${bigMobiles({display:"none"})}
`;
const CItemg = styled.h5`
  font-weight: 300;
  margin: 0 15px;
  color: #6a983c;
  font-size: 14px;
  ${bigMobiles({marginTop:"10px",marginBottom:"10px"})}

`;
const CRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
const Country = styled.select`
  background-color: #e6e6e6;
  border: none;
  border-radius: 5px;
  padding: 4px;
`;
const Option = styled.option`
  padding: 1rem;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  font-family: "Bakbak One", cursive;
  ${bigMobiles({height:"50px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  ${bigMobiles({marginLeft:"10px"})}
`;
const Logo = styled.h1`
  font-weight: 300;
  display: flex;
  align-items: center;
  ${smallScreen({ fontSize: "28px" })}
  ${smallerScreen({ fontSize: "24px" })}
  ${tablets({ fontSize: "20px" })}
  ${smallerTablets({ fontSize: "16px", paddingLeft: "15px" })}
`;
const Img = styled.img`
${bigMobiles({display:"none "})}
`;
const Center = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const SearchContainer = styled.div`
  border: none;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 5px 15px;
  align-items: center;
  justify-content: space-around;
  background-color: #f9f9f9;
  width: 40%;
  ${smallTablets({ justifyContent: "space-between" })}
`;
const L = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  ${tablets({ display: "none" })}
`;
const Selector = styled.h3`
  padding: 5px;
  font-weight: 100;
  ${smallScreen({ fontSize: "15px" })}
  ${smallerScreen({ fontSize: "12px" })}
`;
const C = styled.div`
  display: flex;
  align-items: center;
  ${smallScreen({ fontSize: "15px" })}
  ${smallerScreen({ fontSize: "12px" })}
  ${tablets({ fontSize: "13px" })}
`;
const Input = styled.span`
  display: flex;
  font-weight: 100;
  color: lightgray;
  width: 100%;
  ${smallScreen({ fontSize: "15px" })}
  ${smallerScreen({ fontSize: "12px" })}
  ${tablets({ fontSize: "13px" })}
  ${smallTablets({ display: "none" })}
`;
const Search = styled.div`
  color: lightgray;
  font-weight: 100;
  padding-right: 2.5px;
`;
const R = styled.div`
  font-size: 20px;
  align-content: flex-end;
  cursor: pointer;
  ${smallScreen({ fontSize: "15px" })}
  ${smallerScreen({ fontSize: "12px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: space-evenly;
  ${tablets({ fontSize: "18px" })}
`;
const Bottom = styled.div`
  background-color: #f9f9f9;
  height: 50px;
  align-content: center;
  ${smallerTablets({ height: "30px" })}
  font-family: "Bakbak One", cursive;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MenuItem = styled.h3`
  font-weight: 450;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 30px;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  ${smallScreen({ fontSize: "16px" })}
  ${smallerScreen({ fontSize: "14px" })}
  ${tablets({ fontSize: "12px" })}
  ${smallerTablets({
    fontSize: "10px",
    padding: "7px 25px",
    fontWeight: "300",
  })}
  ${bigMobiles({ fontSize: "9px", padding: "6px 18px" })}
  ${mobiles({ fontSize: "9px", padding: "6px 10px" })}
  ${smallMobiles({ fontSize: "9px", padding: "6px 6px" })}
`;
const MenuItem2 = styled.h3`
  font-weight: 450;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 30px;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  ${smallScreen({ fontSize: "16px" })}
  ${smallerScreen({ fontSize: "14px" })}
  ${tablets({ fontSize: "12px" })}
  ${smallerTablets({
    fontSize: "10px",
    padding: "7px 25px",
    fontWeight: "300",
  })}
  ${bigMobiles({ display:"none" })}
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Contact>
          <CLeft>
            <CItemg>Chat with us</CItemg>
            <CItem>+91 987654321</CItem>
            <CItem>info@mymomdad.com</CItem>
          </CLeft>
          <CRight>
            <Country>
              <Option>Country: India</Option>
              <Option>Country: Option 1</Option>
              <Option>Country: Option 2</Option>
            </Country>
          </CRight>
        </Contact>
        <hr />
        <Top>
          <Left>
            <Logo><Img src="logo.png"/>MyMomDad</Logo>
          </Left>
          <Center>
            {/* <SearchContainer>
              <L>
                <Selector>All Categories </Selector>
                <IoIosArrowDown />
              </L>
              <C>
                <Search>Search</Search>
                <Input> Products, categories ...</Input>
              </C>
              <R>
                <AiOutlineSearch />
              </R>
            </SearchContainer> */}
          </Center>
          <Right>
            <AiOutlineUser style={{cursor:"pointer"}}/>
            <AiOutlineShoppingCart style={{cursor:"pointer"}}/>
          </Right>
        </Top>
        <Bottom>
          <Menu>
            <MenuItem>
            <Link to="/" style={{textDecoration:"none",color:"black"}}>
              Home
            </Link>
              <IoIosArrowDown />
            </MenuItem>
            <MenuItem2 >
              For Mom Dad
              <IoIosArrowDown />
            </MenuItem2>
            <MenuItem2>
              From Mom Dad
              <IoIosArrowDown />
            </MenuItem2>
            <MenuItem>
            <Link to="/about" style={{textDecoration:"none",color:"black"}}>
              About
            </Link>
              <IoIosArrowDown />
            </MenuItem>
            <MenuItem>
            <Link to="/contactus" style={{textDecoration:"none",color:"black"}}>
              Contact
            </Link>
              <IoIosArrowDown />
            </MenuItem>
          </Menu>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Header;
