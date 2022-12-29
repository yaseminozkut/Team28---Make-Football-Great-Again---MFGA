import styled from "styled-components";
import { Button, Card, Form, Input } from "reactstrap";

export const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;

  
  background: #EAE7E7;
  flex: 1;

`;
export const Title = styled.h1`
  position: absolute;
  top:10%;
  left: 20%;
  right: 20%;

  color: #A92C2C;
  font-weight: bold;
  text-align: center;

  font-size: 2.5rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const SearchDiv = styled.div`
  position: absolute;
  top:20%;
  left:20%;
  right:20%;
  width:50%;
  margin: 0 auto;
  padding: 0;
 
  background: #EAE7E7;

`;
export const DataDiv = styled.div`
  position: absolute;
  top:25%;
  left:20%;
  right:20%;
  width:50%;
  height: 300px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  overflow-y:auto;
  background: white;
`;
export const SmallDataA = styled.a`
  &:hover {
    background-color: lightgrey;
  }
  width:100%;
  color:black;
  display:flex;
  text-decoration: 0;
  margin-top: 10px;
  padding: 0;
`;
export const SmallDataP = styled.p`
  width:100%;
  color:black;
  display:flex;
  margin-top: 10px;
  margin-left: 5px;

  padding: 0;
`;
export const SearchInput = styled(Input)`
    width:100%;
    display:flex;
`;
