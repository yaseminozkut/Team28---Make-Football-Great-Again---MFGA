import styled from "styled-components";
import {Card,Button } from "reactstrap";



export const ContainerCard = styled(Card)`
  height: 5rem;  
  width: 18rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:5%;
  border-bottom-left-radius: 5%;
  border-top-left-radius: 5%;
  border-bottom-right-radius:5%;
  display: inline-block;
  
  top: 10%;
  

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  margin-left: 15px;

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

  font-size: 1.1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const GoButton = styled(Button)`
  position: absolute;
  top: 40%;
  right: 5%;
  display: flex;
  width: 7rem;
  height: 1.8rem;

  border: none;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;

  color: black;

  background: linear-gradient(to right, #ff3838 0%, #ff4d4d 0%, #ffffff 2000%);
`;


