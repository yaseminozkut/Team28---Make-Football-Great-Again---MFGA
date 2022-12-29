import styled from "styled-components";
import {Card,Button } from "reactstrap";



export const ContainerCard = styled(Card)`
  height: 15rem;  
  width: 25rem;
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
  bottom: 12%;
  left: 5%;
  right: 5%;



  color: black;
  
  text-decoration-thickness: 1px;
  text-align: center;
  font-weight: bold;

  font-size: 1.5rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const TeamImg = styled.img`
  position:absolute;
  top: 5%;
  border: 7px #432C7A;
  width: 110px;
  left:10%;
  right:10%;


  height: auto;
  margin: 0 auto;

`;

export const GoButton = styled(Button)`
  position: absolute;
  bottom:1%;
  left:10%;
  right:10%;
  display: flex;
  width: 7rem;
  margin: 0 auto;
  height: 1.8rem;
  border: none;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;

  color: white;

  background: #A92C2C;
`;


