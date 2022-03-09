import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { smallTablets, tablets ,bigMobiles} from "../Responsive";
const carsRenderer = [2,1,2,1]
const Container = styled.div`
  background-color: #f1f1f1;
  padding-bottom:5rem;
  font-family: "Poppins", sans-serif;
  ${bigMobiles({
    height: "800px`"
  })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${bigMobiles({
    padding: "1rem",
    paddingLeft:"1rem"
  })}
  ${tablets({ paddingLeft:"30px" })}
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Heading = styled.h1`
  font-weight: 500;
  margin:2rem 4rem 2rem;
  ${tablets({ fontSize:"22px", fontWeight:"450" })}
  ${bigMobiles({ margin:"12px", fontSize:"18px" })}
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  margin:2rem 4rem 2rem;
  font-size: 15px;
  border: none;
  height: 30px;
  padding: 20px 25px;
  font-weight: 700;
  background-color: white;
  color: black;
  border-radius: 10px;
  ${bigMobiles({marginLeft:"0rem",minWidth:'10rem'})}
  ${tablets({ fontSize:"13px" })}
`;
const Bottom = styled.div`
`;
const Cards = styled.div`
  height: auto;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  ${bigMobiles({ display:"flex", flexDirection:"column", height:"auto",alignItems:"center"})}
  /* ${smallTablets({ display:"flex", flexDirection:"column", alignItems:"center" })} */

`;
const Cardnum = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  position: static;
  justify-content: center;
  align-items: flex-end;
  ${bigMobiles({marginTop:"15px"})}
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  ${smallTablets({ padding:"10px", width:"150px" })}
  ${bigMobiles({ width:"auto" })}
`;
const ProductTitle = styled.h3`
  padding: 10px 0;
  font-weight: 500;
  font-size: 16px;
  ${tablets({ fontSize:"14px" })}
  ${bigMobiles({ fontSize:"18px" })}
`;
const PDesc = styled.span`
  font-size: 12px;
  color: gray;
  ${tablets({ fontSize:"11px" })}
  ${bigMobiles({ fontSize:"14px" })}
`;
const Img = styled.img`
  cursor: pointer;
  ${tablets({ height:"150px", width:"200px" })}
  ${smallTablets({ height:"110px", width:"150px" })}
  ${bigMobiles({ height:"185px", width:"250px" })}
`;
const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;
const L = styled.div`
  display: flex;
  align-items: center;
  ${tablets({ fontSize:"14px" })}
`;
const R = styled.div`
  display: flex;
  align-items: center;
`;
const BuyNow = styled.button`
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  padding: 8px 15px;
  border: 2px solid #46760a;
  background-color: #6a983c;
  color: white;
  font-weight: 700;
  ${tablets({ fontSize:"13px", padding:"5px 12px" })}
  ${smallTablets({ fontSize:"11px", padding:"3px 9px" })}
`;  

const TrendingProducts = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Heading>Trending Products</Heading>
          <Button>
            View More Products <IoIosArrowForward color="gray" />
          </Button>
        </Top>
        <Bottom>
          <Cards>
            {carsRenderer.map((item)=>{
              return(
            <Cardnum>
              <Card>
                <Img src={`trendingProduct${item}.png`} />
                <ProductTitle>Product Title</ProductTitle>
                <PDesc>Space for small product description</PDesc>
                <CardBottom>
                  <L>₹ 234</L>
                  <R>
                    <BuyNow><Link to="/productdetail" style={{textDecoration:"none",color:"white"}}>Buy Now</Link></BuyNow>
                  </R>
                </CardBottom>
              </Card>
            </Cardnum> )})} 
          </Cards>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default TrendingProducts;
