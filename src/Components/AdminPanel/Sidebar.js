import React from "react";
import styled from "styled-components";
import { mediumTablets, smallMobiles } from "../../Responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6a983c;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  margin: 20px;
  ${mediumTablets({ marginRight:"0" })}
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavItem = styled.div`
  display: flex;
  margin: 20px ;
  cursor: pointer;
  align-items: center;
  ${mediumTablets({ margin:"20px 0", justifyContent:"center" })}
`;
const Img = styled.img`
  height: 25px;
  padding-right:20px ;
  ${mediumTablets({ paddingRight:"0" })}
  ${smallMobiles({ height:"15px"})}
`;
const Img1 = styled.img`
  height: 50px;
  ${smallMobiles({ height:"35px"})}
`;
const H1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  color: white;
  ${mediumTablets({ display:"none" })}
`;
const NText = styled.span`
  font-weight: 400;
  color: white;
  ${mediumTablets({ display:"none" })}
`;
const Logout = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 110px;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  ${mediumTablets({ width:"100%" })}
`;
const Text = styled.span`
  color: #6a983c;
  font-weight: 600;
  ${mediumTablets({ display:"none" })}
`;
const Sidebar = () => {
  return (
    <Container>
      <Logo>
        <Img1 src="logo.png" />
        <H1>MyMomDad</H1>
      </Logo>
      <Wrapper>
        <Nav>
          <NavItem>
            <Img src="dashboard.svg" />
            <NText>Dashboard</NText>
          </NavItem>
          <NavItem>
            <Img src="products.svg" />
            <NText>Products</NText>
          </NavItem>
          <NavItem>
            <Img style={{height:"18px"}} src="category.svg" />
            <NText>Category</NText>
          </NavItem>
          <NavItem>
            <Img src="orders1.svg" />
            <NText>Orders</NText>
          </NavItem>
          <NavItem>
            <Img src="user.svg" />
            <NText>Our staff</NText>
          </NavItem>
          <NavItem>
            <Img src="settings.svg" />
            <NText>Settings</NText>
          </NavItem>
        </Nav>
        <Logout>
          <Button>
            <Img src="login.svg" />
            <Text>Log Out</Text>
          </Button>
        </Logout>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
