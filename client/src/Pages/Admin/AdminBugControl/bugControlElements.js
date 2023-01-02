import styled from "styled-components";
import { Button, Card, Form, Input, Label, NavLink } from "reactstrap";

export const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0;
  padding: 0;

  height: 120%;
  width: 100%;

  

  
  background: #EAE7E7;
  flex: 1;

  /* @media screen and (max-width: 768px) {
        display: none;
  } */
`;

export const DropDownContainer2 = styled("div")`
  width: 15em;
  
  position: absolute;
  right: 10%;
  left: 10%;

  top: 12%;
  margin: 0 auto;
`;

export const DropDownHeader2 = styled("div")`
  margin-bottom: 0.8em;
  
  text-align: center;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: #A92C2C;
  background: #ffffff;
`;

export const DropDownListContainer2 = styled("div")``;

export const DropDownList2 = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  color: #A92C2C;
  font-size: 1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem2 = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export const FilterTitle = styled("h1")`
  position: absolute;
  text-align: center;

  width: 15%;
  right: 10%;
  margin: 0 auto;
  left: 10%;
  top: 7%;
  font-size: 1.8rem;
  font-weight:bold;

`;
export const NoBugTitle = styled("h1")`
  position: absolute;
  text-align: center;

  width: 30%;
  right: 10%;
  margin: 0 auto;
  left: 10%;
  top: 7%;
  font-size: 1.8rem;
  font-weight:bold;

`;