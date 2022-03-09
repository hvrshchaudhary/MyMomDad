import React from "react";
import styled from "styled-components";
import { smallerTablets, smallTablets, tablets } from "../Responsive";
import CardListView from "./CardListView";
import FilterGroup69 from "./SubcategoryFilter/FilterGroup69";
import FilterGroupWSearch from "./SubcategoryFilter/FilterGroupWSearch";
import Stars from "./SubcategoryFilter/Stars";

const Parent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
`;
const Left = styled.div`
  ${smallTablets({display:"none"})}
  
`;
const FilterType = styled.div`
  display: flex;
  flex-direction: column;
`;
const Fe = styled.div`
  background-color: #6a983c;
  color: white;
  border-radius: 8px;
  padding: 10px 8px;
  margin: 6px 0;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
`;
const Img = styled.img`
  padding-left: 10px;
`;
const FilterGroup = styled.div``;
const Fi = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchContainer = styled.div`
  margin: 15px 0;
`;
const Input = styled.input`
  border: none;
  padding-left: 10px;
  font-size: 14px;
`;
const Subcategories = () => {
  return (
    <Parent>
      <Left>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Poppins",
          
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F5F5F5",
            padding: "30px",
            borderRadius: "12px",
            flex: "1"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{ fontWeight: "600", fontSize: "24px", padding: "10px 0" }}
            >
              Subcategories
            </h1>
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "500",
                fontSize: "14px",
                paddingBottom: "14px",
              }}
            >
              back to{" "}
              <h5
                style={{
                  color: "#6a983c",
                  fontWeight: "600",
                  fontSize: "14px",
                  paddingLeft: "3px",
                }}
              >
                {" "}
                Category 1
              </h5>
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <input type="checkbox" />
              <label
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  paddingLeft: "3px",
                }}
              >
                Subcategory 2
              </label>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                149
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <input type="checkbox" />
              <label
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  paddingLeft: "3px",
                }}
              >
                Subcategory 3
              </label>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                882
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <input type="checkbox" />
              <label
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  paddingLeft: "3px",
                }}
              >
                Subcategory 4
              </label>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                1156
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <input type="checkbox" />
              <label
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  paddingLeft: "3px",
                }}
              >
                Subcategory 5
              </label>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                4345
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <input type="checkbox" />
              <label
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  paddingLeft: "3px",
                }}
              >
                Subcategory 6
              </label>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                19
              </label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{ fontWeight: "600", fontSize: "24px", padding: "10px 0" }}
            >
              Filters
            </h1>
            <FilterType>
              <Fe style={{ width: "64%" }}>
                Filters group: Filter 1 <Img src="crosss.png" />{" "}
              </Fe>
              <Fe style={{ width: "34%" }}>
                Filters 2 <Img src="crosss.png" />
              </Fe>
              <Fe style={{ width: "52%" }}>
                Filters group 3 <Img src="crosss.png" />
              </Fe>
              <Fe style={{ width: "64%" }}>
                Filter group: Filter 4<Img src="crosss.png" />
              </Fe>
              <h4
                style={{
                  color: "#6A983C",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "5px",
                }}
              >
                Clear all
              </h4>
            </FilterType>
          </div>
          <SearchContainer>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src="search.png" />
              <Input placeholder="Search Filter" />
            </div>
          </SearchContainer>
          <FilterGroup style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{fontWeight:"500", margin:"10px 0"}}>Filter group</h4>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 1
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 1
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 1
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 1
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 1
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 1
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 7
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 8
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <Fi
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <div>
                <input type="checkbox" />
                <label
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingLeft: "3px",
                  }}
                >
                  Filter 9
                </label>
              </div>
              <label
                style={{
                  color: "#737B7D",
                  fontWeight: "400",
                  paddingLeft: "80px",
                }}
              >
                99
              </label>
            </Fi>
            <h4
              style={{
                color: "#6A983C",
                fontSize: "16px",
                fontWeight: "500",
                padding: "5px",
              }}
            >
              Show more
            </h4>
          </FilterGroup>
        <FilterGroup69/>
        <FilterGroupWSearch/>
        <Stars/>
        </div>
      </div>
      </Left>
      <div style={{display:"flex",flex:"3", flexDirection:"column", width:"100%", marginRight:"40px"}}>
        <CardListView />
        <CardListView />
        <CardListView />
        <CardListView />
      </div>
    </Parent>
  );
};

export default Subcategories;
