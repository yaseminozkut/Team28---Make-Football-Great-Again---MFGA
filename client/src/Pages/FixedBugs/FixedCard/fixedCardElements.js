import styled from "styled-components";
import {Card} from "reactstrap";

export const ContainerCard = styled(Card)`
  display: inline-block;
  height: 15rem;
  width: 80rem;
  border-width: 3px;
  border-color: black;
  top: 12rem;
  justify-content: center;
  margin: 0 20px 15px 20px; /* Added */
  float: none; /* Added */


  background: #323231;
  
`;

export const TypeTitle = styled.h1`
  position: absolute;
  display:table;
  top: 10%;
  left:5%;
 

  color: white;
  margin: 0 auto 0 auto;
  
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.6rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const DateTitle = styled.h1`
  position: absolute;
  display:table;
  top: 5%;
  right: 2%;

  color: white;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const Comment = styled.p`
  position: absolute;
  
  width: 90%;
  height:60%;
  top: 30%;
  left: 5%;

  color: #EAE7E7;
  margin: 0 auto;
  font-weight: bold;
  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;


