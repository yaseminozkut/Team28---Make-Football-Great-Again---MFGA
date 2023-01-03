import styled from "styled-components";
import { Button, Card, Form, Input, Label, NavLink } from "reactstrap";

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

  background: #eae7e7;
  flex: 1;

  /* @media screen and (max-width: 768px) {
        display: none;
  } */
`;

export const ContainerCard = styled(Card)`
  position: relative;
  height: 39.75rem;
  width: 65rem;
  border-width: 0;
  border-color: rgba(255, 255, 255, 0.5);
  top: 5.5rem;
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  background: white;

  @media screen and (max-width: 768px) {
    position: relative;
    height: 39.75rem;
    width: 26rem;
    border-width: 0;
    border-color: rgba(255, 255, 255, 0.5);
    top: 5.5rem;
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
    background: white;
  }
`;

export const Key = styled.div`
  position: absolute;
  top: 149px;
  left: 77%;
  right: 20%;

  color: rgb(0, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 1.18rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  background: white;
  border-radius: 100%;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  height: 70%;
  position: absolute;
  top: 8rem;
  left: 1.6rem;
  right: 1.6rem;
`;

export const StyledInputEmail = styled(Input)`
  position: absolute;
  top: 7rem;
  left: 38rem;
  width: 38%;

  outline: 0;
  border-width: 0 0 2px;
  border-color: blue;
`;

export const StyledInputPass = styled(Input)`
  position: absolute;
  top: 14rem;
  left: 38rem;
  width: 38%;

  outline: 0;
  border-width: 0 0 2px;
  border-color: blue;
`;

export const StyledEmailLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 4rem;

  font-size: 1.3rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledPassLabel = styled(Label)`
  position: absolute;
  left: 1.5rem;
  top: 11rem;

  font-size: 1.3rem;

  color: rgb(0, 0, 0, 0.5);
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 21rem;
  display: flex;
  width: 38%;
  height: 35px;

  left: 65%;

  border: none;
  justify-content: center;

  color: rgb(0, 0, 0, 0.5);

  background: linear-gradient(to right, #ff3838 0%, #ff4d4d 0%, #ffffff 2000%);
`;

export const StyledHr = styled.hr`
  top: 27.5rem;
  left: 25%;
  position: absolute;
  width: 50%;
  height: 1px;

  color: black;
`;

export const StyledP = styled.p`
  top: 25rem;

  left: 49%;
  position: absolute;
  width: 50%;
  height: 1px;
  color: black;

  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  position: absolute;
  top: 25rem;
  left: 85%;
  color: #ff3838;
`;

export const Error = styled.p`
  position: absolute;
  text-align: center;
  justify-content: center;
  top: 12rem;
  left: 67%;
  color: red;
`;

export const LoginCaptureDiv = styled.div`
  position: absolute;
  width: 10rem;
  height: 29rem;
  background-color: transparent;
  border-width: 0.5px;
  border-left-style: solid;
  top: 5rem;
  left: 34rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserAvatar = styled.img`
  position: absolute;
  height: 6rem;
  left: 46.6rem;
  top: 5rem;
  border-radius: 100%;
`;

export const BubbleDiv1 = styled.div`
  position: absolute;
  width: 15rem;
  height: 20rem;

  background: #a92c2c;

  opacity: 0.6;

  border-bottom-right-radius: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BubbleDiv2 = styled.div`
  position: absolute;
  width: 9rem;
  height: 9rem;

  bottom: 0;

  background: #a92c2c;

  opacity: 0.6;

  border-top-right-radius: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Email = styled.div`
  position: absolute;
  top: 15.2rem;
  left: 57%;
  right: 20%;

  display: inline-table;

  color: rgb(29, 155, 240);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 1.18rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  background: white;
  border-radius: 100%;
`;


export const Pass = styled.div`
  position: absolute;
  top: 22.2rem;
  left: 57%;
  right: 20%;

  display: inline-table;

  color: rgb(29, 155, 240);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 1.18rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  background: white;
  border-radius: 100%;
`;

export const StyledDiv = styled.div`
  position: absolute;

  width: 15rem;
  height: 15rem;

  background: black;
`;