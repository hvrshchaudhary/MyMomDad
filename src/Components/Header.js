import React from "react";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Container = styled.div`
  font-family: "Bakbak One", cursive;
`;
const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h1`
  font-weight: 300;
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
`;
const L = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;
const Selector = styled.h3`
  padding: 5px;
  font-weight: 100;
`;
const C = styled.div`
  display: flex;
`;
const Input = styled.span`
  font-weight: 100;
  color: lightgray;
  width: 100%;
`;
const R = styled.div`
  font-size: 20px;
  align-content: flex-end;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
`;
const Bottom = styled.div`
  background-color: #f9f9f9;
  height: 40px;
  align-content: center;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MenuItem = styled.h3`
  font-weight: 450;
  font-size: 18px;
  padding: 10px 30px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
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
                <Input> | Search Products, categories ...</Input>
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
          <Menu>
            <MenuItem>Home
            <IoIosArrowDown />
            </MenuItem>
            <MenuItem>For Mom & Dad
            <IoIosArrowDown />
            </MenuItem>
            <MenuItem>From Mom & Dad
            <IoIosArrowDown />
            </MenuItem>
            <MenuItem>About
            <IoIosArrowDown />
            </MenuItem>
            <MenuItem>Contact
            <IoIosArrowDown />
            </MenuItem>
          </Menu>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Header;
