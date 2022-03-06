import React from "react";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
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
} from "../../Responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  max-width: 100%;
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
`;
const CItemg = styled.h5`
  font-weight: 300;
  margin: 0 15px;
  color: #6a983c;
  font-size: 14px;
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
const Option = styled.option``;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  font-family: "Bakbak One", cursive;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;
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
  padding: 8px 15px;
  align-items: center;
  justify-content: space-around;
  background-color: #f9f9f9;
  width: 55%;
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
  justify-content: center;
  ${tablets({ fontSize: "18px" })}
`;
const Bottom = styled.div`
  display: flex;
  padding: 35px 30px;
  padding-bottom: 15px;
`;
const L1 = styled.div`
  padding-right: 5px;
  font-weight: 400;
  font-size: 13px;
  color: #A9A9A9;
`;
const L2 = styled.div`
  font-size: 13px;
`;
const H1 = styled.h1`
  padding-left: 30px;
  margin-bottom: 30px;
  font-weight: 600;
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
            <Logo>MyMomDad</Logo>
          </Left>
          <Center>
            <SearchContainer>
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
            </SearchContainer>
          </Center>
          <Right>
            <AiOutlineUser />
          </Right>
        </Top>
        <Bottom>
          <L1>Homepage /</L1>
          <L2>Blog</L2>
        </Bottom>
        <H1>Blog</H1>
        <img style={{margin:'20px 35px', width:"96%"}} src="blog.png"/>
      </Wrapper>
    </Container>
  );
};

export default Header;
