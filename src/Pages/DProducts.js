import React from 'react'
import styled from 'styled-components'
import DashboardP from '../Components/AdminPanel/Products/DashboardP';
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
const DProducts = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Sidebar/>
            </Left>
            <Right>
                <DashboardP/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default DProducts