import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 100%;
`;
const Slider = () => {
  return (
    <Container>
      <Img src="1.png"/>
    </Container>
  )
}

export default Slider