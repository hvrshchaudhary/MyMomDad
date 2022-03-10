import React from "react";
import styled from "styled-components";
import { bigMobiles, mediumTablets } from "../../../Responsive";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  margin: 20px 30px;
  margin-top: 0;
  border-radius: 12px;
  padding: 30px 20px;
  column-gap: 10px;
  align-items: center;
  ${bigMobiles({flexDirection:"column", margin:"10px", padding:"20px 0"})}
`;
const Main = styled.div`
  flex: 7;
  display: flex;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #008000;
`;
const Span = styled.span`
  color: #707275;
`;
const Upload = styled.div`
  flex: 1;
  border: 2px solid #46760a;
  background-color: #E5E7EB;
  border-radius: 10px;
  font-weight: 700;
  color: #6A983C;
  padding: 12px;
  margin-top: 10px;
  ${mediumTablets({fontSize:"12px", padding:"8px"})}
  ${bigMobiles({width:"75%"})}
`;
const Download = styled.div`
  flex: 1;
  border: 2px solid #46760a;
  background-color: #6a983c;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  padding: 12px;
  margin-top: 10px;
  ${mediumTablets({fontSize:"12px", padding:"8px"})}
  ${bigMobiles({width:"75%"})}
`;
const DropCsv = () => {
  return (
    <Container>
      <Main>
        <Span>Drop CSV file</Span>
      </Main>
      <Upload>Upload</Upload>
      <Download>Download</Download>
    </Container>
  );
};

export default DropCsv;
