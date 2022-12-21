import styled from "styled-components";
import {Card } from "reactstrap";

export const ContainerCard = styled(Card)`
  height: 3rem;  
  width: 16rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:5%;
  border-bottom-left-radius: 5%;
  border-top-left-radius: 5%;
  border-bottom-right-radius:5%;
  display: inline-block;
  
  top: 45%;
  

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px;
  margin-left:10px; /* Added */

  background: white;
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;
export const NameTitle = styled.h1`
  position: absolute;
  top: 5%;
  left: 5%;


  color: black;
  
  text-decoration-thickness: 1px;
  text-align: center;
  font-weight: bold;

  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const PositionTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 14%;
  

  color: red;
  
  text-decoration-thickness: 1px;
  text-align: center;
  font-weight: bold;


  font-size: 0.9rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const BirthTitle = styled.h1`
  position: absolute;

  left: 65%;
  

  color: rgb(0, 0, 0, 0.5);

  text-align: center;

  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;


