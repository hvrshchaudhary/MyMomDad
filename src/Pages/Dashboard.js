import React from 'react'
import styled from 'styled-components'
import Dashboard1 from '../Components/AdminPanel/Dashboard/Dashboard1'
import Sidebar from '../Components/AdminPanel/Sidebar'
import { smallMobiles } from '../Responsive';

const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 5;
  background-color: #f5f5f5;
`;
const Dashboard = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Sidebar/>
            </Left>
            <Right>
                <Dashboard1/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Dashboard