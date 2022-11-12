import styled from "styled-components";
import { Button, Card, Form, Input, Label, NavLink } from "reactstrap";

export const ContainerCard = styled(Card)`
position:absolute;

  left: 75%;
  height: 32rem;
  width: 22rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:20%;
  border-bottom-left-radius: 20%;
  border-top-left-radius: 20%;
  border-bottom-right-radius:20%;
  top: 30%;

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const Title = styled.h1`
  position: absolute;
  top: 10px;
  left: 20%;
  right: 20%;

  color: rgb(0, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 1.5rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  height: 60%;
  position: absolute;
  top: 8rem;
  left: 1.6rem;
  right: 1.6rem;
`;

export const StyledInputName = styled(Input)`
  position: absolute;
  top: -3rem;
  left: 2rem;
  width: 80%;
  height: 12%;

  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;
  background: rgb(0, 0, 0, 0.1);
`;

export const StyledInputEmail = styled.input`
  position: absolute;
  top: 2.6rem;
  left: 2rem;
  width: 80%;
  height: 12%;


  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;

  background: rgb(0, 0, 0, 0.1);
`;

export const StyledInputPass = styled(Input)`
  position: absolute;
  top: 8.4rem;
  left: 2rem;
  width: 80%;
  height: 12%;


  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;

  background: rgb(0, 0, 0, 0.1);
`;

export const StyledInputUsername = styled(Input)`
  position: absolute;
  top: 13.6rem;
  left: 2rem;
  width: 80%;
  height: 12%;


  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;
  background: rgb(0, 0, 0, 0.1);
`;

export const StyledNameLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: -4.5rem;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledEmailLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 0.8rem;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledPassLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 7rem;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;
export const StyledUsernameLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 12rem;

  font-size: 1.1rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledNameError = styled(Label)`
  position: absolute;
  left: 1rem;
  top: -0.4rem;
  text-align: center;
  font-size: 9px;
  color: red;
`;

export const StyledEmailError = styled(Label)`
  position: absolute;
  left: 1rem;
  top: 4.8rem;
  text-align: center;
  font-size: 9px;
  color: red;
`;

export const StyledPassError = styled(Label)`
  position: absolute;
  left: 1rem;
  top: 11rem;
  text-align: center;
  font-size: 9px;
  color: red;
`;

export const StyledUsernameError = styled(Label)`
  position: absolute;
  left: 1rem;
  top: 15.8rem;
  text-align: center;
  font-size: 9px;
  color: red;
`;


export const StyledButton = styled(Button)`
  position: absolute;
  top: 18rem;
  display: flex;
  width: 50%;
  height: 12%;
  left: 5rem;

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