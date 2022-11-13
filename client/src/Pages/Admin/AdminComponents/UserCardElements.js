import styled from "styled-components";
import { Button, Card, Form, Input, Label, NavLink } from "reactstrap";

export const ContainerCard = styled(Card)`
  height: 5rem;  
  width: 28rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:10%;
  border-bottom-left-radius: 10%;
  border-top-left-radius: 10%;
  border-bottom-right-radius:10%;
  
  top: 15%;
  right: 35%;

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;
export const MailTitle = styled.h1`
  position: absolute;
  top: 40%;
  left: 5%;


  color: rgb(0, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 1.1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const UserTitle = styled.h1`
  position: absolute;
  top: 10%;
  left: 5%;
  

  color: rgb(0, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 1.1rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 70%;
  right: 5%;
  display: flex;
  width: 20%;
  height: 30%;

  border: none;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;

  color: black;

  background: linear-gradient(to right, #ff3838 0%, #ff4d4d 0%, #ffffff 2000%);
`;

export const StyledActivateButton = styled(Button)`
  position: absolute;
  top: 70%;
  right: 5%;
  display: flex;
  width: 25%;
  height: 30%;

  border: none;
  justify-content: center;
  font-size: 70%;
  font-weight: bold;

  color: black;

  background: #25ACF0 ;
`;