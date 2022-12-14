import styled from "styled-components";
import { Button, Card, Form, Input, Label } from "reactstrap";

export const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;

  justify-content: center;

  z-index: 0;
  overflow-x: auto;
  background: white;
  flex: 1;
`;

export const ContainerCard = styled(Card)`
  position: relative;
  height: 25.75rem;
  width: 27rem;
  border-width: 3px;
  border-color:  #EC2A2A;
  top: 6.5rem;

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background: rgba(255, 255, 255, 0.5);

`;

export const Title = styled.h1`
  position: absolute;
  top: 20px;
  left: 20%;
  right: 20%;

  color: rgb(0, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 2.18rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  height: 70%;
  position: absolute;
  top: 8rem;
  left: 1.6rem;
  right: 1.6rem;
`;

export const StyledInputName = styled(Input)`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 50%;

  border: none;
  border-radius: 1rem;
  padding: 10px 16px 10px 16px;
  background: rgb(0, 0, 0, 0.1);
`;


export const StyledNameLabel = styled(Label)`
  position: absolute;
  left: 1rem;
  top: -2rem;

  font-size: 1.3rem;

  color: rgb(0, 0, 0, 0.5);
`;


export const StyledButton = styled(Button)`
  position: relative;
  top: 12.7rem;
  display: flex;
  width: 50%;
  height: 35px;
  left: 6rem;

  border: none;
  justify-content: center;

  color: rgb(0, 0, 0, 0.5);

  background: linear-gradient(to right, #ff3838 0%, #ff4d4d 0%, #ffffff 2000%);
`;

export const CustomExit = styled(Button)`
    position: absolute;
    padding: 1px;
    width: 25px;

    top: 0;
    right: 0;

    background-color: white;
    color: black;

    justify-content: center;
    align-items: center;

    border: none;

    &:hover {
        background-color: white;
        color: black;
    }
`