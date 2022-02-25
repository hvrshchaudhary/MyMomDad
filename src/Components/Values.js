import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;

`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const H = styled.h1`
  font-weight: 600;
  margin: 50px;
  margin-bottom: 0px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
`;
const ImgC = styled.div`
margin:0 50px;
`;
const Img = styled.img``;
const Info = styled.div`
`;
const H2 = styled.h2`
  font-weight: 500;
  margin-bottom: 20px;
`;
const Desc = styled.p``;
const Values = () => {
  return (
    <Container>
      <H>Our Values</H>
      <Content>
        <Left>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
        </Left>
        <Right>
        <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
          <Item>
            <ImgC>
              <Img src="like.png" />
            </ImgC>
            <Info>
              <H2>Character</H2>
              <Desc>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play,
                Compliance, Transparency, Persistence, Ownership, Finishing to
                the end, Doing the most difficult task first
              </Desc>
            </Info>
          </Item>
        </Right>
      </Content>
    </Container>
  );
};

export default Values;
