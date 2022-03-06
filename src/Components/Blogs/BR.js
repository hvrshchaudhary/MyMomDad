import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  height: 100%;
`;
const Cards = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px , 1fr));
  grid-gap: 30px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img``;
const Button = styled.button`
  border: none;
  margin: 10px 0;
  font-weight: 300;
  font-size: 12px;
  padding: 1px 7px;
  border-radius: 12px;
  color: #6A983C;
  background-color: #f4f8ec;
  width: 30px;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
`;
const Div = styled.div``;
const A = styled.span`
  font-weight: 300;
  font-size: 14px;
  padding-right: 10px;
`;
const D = styled.span`
  font-weight: 300;
  font-size: 14px;
`;
const BR = () => {
  return (
    <Container>
      <Cards>
        <Card>
          <Img src="b2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="B2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="b2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="B2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="b2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="B2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="b2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="B2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="b2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="B2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="b2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
        <Card>
          <Img src="B2.png"/>
          <Button>Tag</Button>
          <H1>Space for your heading is here, write what you need</H1>
          <Div>
            <A>Author</A>
            <D>15.6.22</D>
          </Div>
        </Card>
      </Cards>
    </Container>
  );
};

export default BR;
