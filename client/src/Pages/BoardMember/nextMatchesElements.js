import styled from "styled-components";
import {Card,Button} from "reactstrap";

export const ContainerCard = styled(Card)`
  
  height: 10rem;
  width: 65%;
  border-width: 3px;
  border-color: black;
  top: 6.5rem;
  margin: 20px auto; /* Added */
  float: none; /* Added */
  


  background: grey;
  
`;

export const HomeTitle = styled.h1`
  position: absolute;
  display:table;
  left: 5%;
  width: 40%;
  top: 30%;
  color: black;
  margin: 0 auto;
  
  text-decoration-thickness: 1px;
  text-align: center;
  font-weight: bold;

  font-size: 1.8rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const AwayTitle = styled.h1`
  
  position: absolute;
  width: 40%;
  display:table;
  right: 5%;

  top: 30%;
  color: black;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-align: center;
  font-weight: bold;

  font-size: 1.8rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const vsTitle = styled.h1`
  position:relative;

  top: 8%;
  color: black;
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
  width: 20%;
  right: 10%;
  left: 10%;

  top: 15%;
  color: #A92C2C;
  margin: 0 auto;
  
  text-decoration-thickness: 1px;
  text-align: center;

  font-weight: bold;

  font-size: 1.2rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const RefereeTitle = styled.h1`
  position: absolute;
  display:table;
  width:30%;
  bottom: 27%;
  color: white;
  left:10%;
  right:10%;

  margin: 0 auto;
  
  text-decoration-thickness: 1px;
  text-align: center;
  font-weight: bold;

  font-size: 1.4rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const GoButton = styled(Button)`
  position: absolute;
  display:table;
  
  bottom: 5%;
  
  width: 15rem;
  height: 1.8rem;
  left:10%;
  right:10%;
  margin: 0 auto;


  border: none;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;

  color: white;

  background: black;
`;

