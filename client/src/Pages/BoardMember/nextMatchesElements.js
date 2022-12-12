import styled from "styled-components";
import {Card,Button} from "reactstrap";

export const ContainerCard = styled(Card)`
  
  height: 6rem;
  width: 55%;
  border-width: 3px;
  border-color: black;
  top: 6.5rem;
  margin: 20px auto; /* Added */
  float: none; /* Added */
  


  background: #A92C2C;
  
`;

export const HomeTitle = styled.h1`
  position: absolute;
  display:table;
  left: 20%;
  top: 8%;
  color: black;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.8rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const AwayTitle = styled.h1`
  position: absolute;
  display:table;
  right: 20%;

  top: 8%;
  color: black;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
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
  right: 46%;

  top: 5%;
  color: white;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const RefereeTitle = styled.h1`
  position: relative;
  display:table;
  top: 30%;
  color: white;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.4rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const GoButton = styled(Button)`
  position: absolute;
  display:table;
  left:45%;
  top: 65%;
  margin: 0 auto 0 auto;
  width: 7rem;
  height: 1.8rem;

  border: none;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;

  color: white;

  background: black;
`;

