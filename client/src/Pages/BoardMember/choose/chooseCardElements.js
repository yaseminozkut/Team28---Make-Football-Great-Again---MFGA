import styled from "styled-components";
import {Card,Button} from "reactstrap";

export const ContainerCard = styled(Card)`
  display: inline-block;
  height: 25rem;
  width: 30rem;
  border-width: 3px;
  border-color: black;
  top: 6.5rem;
  justify-content: center;
  margin: 40px 20px 15px 20px; /* Added */
  float: none; /* Added */
  background: white;
  
`;
export const NameTitle = styled.h1`
  position: absolute;
  display:table;
  top: 10%;
  color: black;
  left:10%;
  right:10%;

  margin: 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 2rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const MatchCount = styled.h1`
  position: absolute;
  display:table;
  top: 25%;
  color: grey;
  left:10%;
  right:10%;
  margin: 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.4rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const Rating = styled.h1`
  position: absolute;
  display:table;
  top: 35%;
  color: grey;
  left:10%;
  right:10%;
  margin: 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.2rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const Point = styled.h1`
  position: absolute;
  display:table;
  bottom: 20%;
  color: #A92C2C;
  left:10%;
  right:10%;
  margin: 0 auto;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.4rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const GoButton = styled(Button)`
  position: absolute;
  display:table;
  bottom: 5%;
  left:10%;
  right:10%;
  margin: 0 auto 0 auto;
  width: 15rem;
  height: 2rem;

  border: none;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;

  color: white;

  background: black;
`;


