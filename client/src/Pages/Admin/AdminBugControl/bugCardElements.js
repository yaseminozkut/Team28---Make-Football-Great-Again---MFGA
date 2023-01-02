import styled from "styled-components";
import {Card,Button} from "reactstrap";

export const ContainerCard = styled(Card)`
  display: inline-block;
  
  height: 15rem;
  width: 30rem;
  border-width: 3px;
  border-color: black;
  top: 12rem;
  left:10%;
  right:10%;

  justify-content: center;
  margin: 15px 20px 15px 20px; /* Added */
  float: none; /* Added */


  background: white;
  
`;

export const TypeTitle = styled.h1`
  position: absolute;
  display:table;
  top: 5%;
  left:10%;
  right:10%;

  color: #A92C2C;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.2rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const DateTitle = styled.h1`
  position: absolute;
  display:table;
  top: 5%;
  right:5%;

  color: #A92C2C;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const Comment = styled.p`
  position: absolute;
  
  width: 80%;
  height:50%;
  top: 20%;
  left:10%;
  right:10%;
  color: black;
  margin: 0 auto;
  font-weight: bold;
  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const DeleteButton = styled(Button)`
  position: absolute;
  display:table;
  bottom: 5%;
  left: 20%;
  margin: 0 auto 0 auto;
  width: 7rem;
  height: 1.8rem;

  border: none;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;

  color: white;

  background: red;
`;
export const DoneButton = styled(Button)`
  position: absolute;
  display:table;
  bottom: 5%;
  right: 20%;

  margin: 0 auto 0 auto;
  width: 7rem;
  height: 1.8rem;

  border: none;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;

  color: white;

  background: green;
`;

