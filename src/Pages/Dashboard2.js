import React from 'react'
import styled from 'styled-components'
import Dashboard20 from '../Components/AdminPanel/Dashboard/Dashboard20';
import Sidebar from '../Components/AdminPanel/Sidebar'

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
const Dashboard2 = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Sidebar/>
            </Left>
            <Right>
                <Dashboard20/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Dashboard2