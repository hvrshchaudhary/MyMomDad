import React from "react";
import styled from "styled-components";
import { bigMobiles, smallTablets } from "../Responsive";

const Container = styled.div``;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 22px;
  margin: 48px;
  margin-left: 20px;
  ${bigMobiles({
    fontSize:"17px",
    marginBottom:"10px"
  })}
`;
const H5 = styled.h5`
  font-weight: 600;
  font-size: 12px;
`;
const Form = styled.form``;
const T = styled.div`
  display: flex;
  ${bigMobiles({flexDirection:"column"})}
`;
const Peice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  ${bigMobiles({
    marginLeft:"10px",
    marginTop:"10px",
    marginBottom:"10px",
  })}
`;
const M = styled.div`
  display: flex;
  ${bigMobiles({flexDirection:"column"})}
  
`;
const Input = styled.input`
  background-color: #f9f9f9;
  padding: 18px 21px;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  width: 90%;
`;
const Message = styled.textarea`
  background-color: #f9f9f9;
  padding: 12px 21px;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  width: 93%;
  height: 200px;
  ${bigMobiles({
    maxWidth:"14rem"
  })}
  
`;
const Button = styled.button`
  /* width: 15%; */
  margin: 20px;
  background-color: #6a983c;
  color: white;
  font-size: 15px;
  font-weight: 700;
  border: 2px solid #46760a;
  border-radius: 10px;
  padding: 7px;
`;
const Contact = () => {
  return (
    <Container>
      <H1>Send Us a Message</H1>
      <Form>
        <T>
          <Peice>
            <H5>First Name</H5>
            <Input placeholder="First name" />
          </Peice>
          <Peice>
            <H5>Last Name</H5>
            <Input placeholder="Last name" />
          </Peice>
        </T>
        <M>
          <Peice>
            <H5>Email address</H5>
            <Input placeholder="Email address" />
          </Peice>
          <Peice>
            <H5>Subject</H5>
            <Input placeholder="Subject" />
          </Peice>
        </M>
        <Peice>
          <H5>Message</H5>
          <Message placeholder="Message" />
        </Peice>
      </Form>
      <Button>Send Message</Button>
    </Container>
  );
};

export default Contact;
