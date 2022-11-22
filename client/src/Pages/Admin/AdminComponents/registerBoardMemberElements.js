import styled from "styled-components";
import { Button, Card, Form, Input, Label, NavLink } from "reactstrap";

export const ContainerCard = styled(Card)`
position:absolute;

  left: 75%;
  height: 36rem;
  width: 24rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:20%;
  border-bottom-left-radius: 20%;
  border-top-left-radius: 20%;
  border-bottom-right-radius:20%;
  top: 20%;

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const Title = styled.h1`
  position: absolute;
  top: 2%;
  left: 20%;

  width:60%;
  height:10%;

  color: rgb(0, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 115%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  height: 85%;
  position: absolute;
  top: 13%;
  left: 5%;
`;

export const StyledInputName = styled(Input)`
  position: absolute;
  top: 8%;
  left: 2rem;
  width: 80%;
  height: 10%;

  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;
  background: rgb(0, 0, 0, 0.1);
`;

export const StyledInputEmail = styled.input`
  position: absolute;
  top: 31%;
  left: 2rem;
  width: 80%;
  height: 10%;


  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;

  background: rgb(0, 0, 0, 0.1);
`;

export const StyledInputPass = styled(Input)`
  position: absolute;
  top: 56%;
  left: 2rem;
  width: 80%;
  height: 10%;


  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;

  background: rgb(0, 0, 0, 0.1);
`;

export const StyledInputUsername = styled(Input)`
  position: absolute;
  top: 76%;
  left: 2rem;
  width: 80%;
  height: 10%;


  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;
  background: rgb(0, 0, 0, 0.1);
`;

export const StyledNameLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 1%;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledEmailLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 24%;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledPassLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 49%;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;
export const StyledUsernameLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 70%;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledNameError = styled(Label)`
  position: absolute;
  left: 1rem;
  top: 18%;
  text-align: center;
  font-size: 9px;
  color: red;
`;

export const StyledEmailError = styled(Label)`
  position: absolute;
  left: 1rem;
  top: 42%;
  text-align: center;
  font-size: 9px;
  color: red;
`;

export const StyledPassError = styled(Label)`
  position: absolute;
  left: 8%;
  top: 67%;
  text-align: center;
  font-size: 9px;
  color: red;
`;

export const StyledUsernameError = styled(Label)`
  position: absolute;
  left: 1rem;
  top: 86%;
  text-align: center;
  font-size: 9px;
  color: red;
`;


export const StyledButton = styled(Button)`
  position: absolute;
  top: 93%;
  display: flex;
  width: 50%;
  height: 7%;
  left: 25%;

  border: none;
  justify-content: center;

  color: rgb(0, 0, 0, 0.5);

  background: linear-gradient(to right, #ff3838 0%, #ff4d4d 0%, #ffffff 2000%);
`;

export const StyledHr = styled.hr`
  top: 30rem;
  left: 25%;
  position: absolute;
  width: 50%;
  height: 1px;

  color: black;
`

export const StyledP = styled.p`
  top: 27rem;
  left: 25%;
  position: absolute;
  width: 50%;
  height: 1px;
  color: black;
  text-align: center;
`

export const StyledNavLink = styled(NavLink)`
  position: absolute;
  top: 32rem;
  left: 43%;
  color: #ff3838;
`