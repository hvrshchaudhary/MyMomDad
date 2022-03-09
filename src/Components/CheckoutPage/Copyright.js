import React from 'react'
import styled from 'styled-components';
import { bigMobiles } from '../../Responsive';

const Container = styled.div`
  background-color: #FDFDFD;
  padding: 80px 40px;
  padding-left: 0;
  ${bigMobiles({ padding:"40px 3px" })}
`;
const Copyright = () => {
  return (
    <Container>Copyright © 2022 MyMomDad.com</Container>
  )
}

export default Copyright