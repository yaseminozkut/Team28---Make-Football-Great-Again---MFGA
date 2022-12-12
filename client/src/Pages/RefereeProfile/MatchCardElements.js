import styled from "styled-components";
import {Card,Button} from "reactstrap";

export const ContainerCard = styled(Card)`
  position:relative;
  height: 6rem;
  width: 55%;
  border-width: 3px;
  border-color: black;
  top: 20%;
  margin: 20px auto; /* Added */
  float: none; /* Added */
  


  background: #DD5353;
  
`;

export const HomeTitle = styled.h1`
  position: absolute;
  display:table;
  left: 10%;
  top: 30%;
  color: black;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.4rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const AwayTitle = styled.h1`
  position: absolute;
  display:table;
  right: 10%;

  top: 30%;
  color: black;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.4rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const VsTitle = styled.h1`
  position: absolute;
  display:table;
  right: 50%;

  top: 40%;
  color: black;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.8rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const DateTitle = styled.h1`
  position: absolute;
  display:table;
  right: 46%;

  top: 10%;
  color: white;
  margin: 0 auto 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.2rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

