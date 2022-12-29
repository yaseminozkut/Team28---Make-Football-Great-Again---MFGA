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
  
  background: #EAE7E7;
  flex: 1;

  /* @media screen and (max-width: 768px) {
        display: none;
  } */
`;

export const ContainerCard = styled(Card)`
  position: relative;
  height: 45rem;
  width: 45rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius: 10%;
  border-bottom-left-radius: 10%;
  border-top-left-radius: 10%;
  border-bottom-right-radius: 10%;

  top: 18%;

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);

  
`;

export const Title = styled.h1`
  position: absolute;
  top:20px;
  left: 20%;
  right: 20%;

  color: #A92C2C;
  font-weight: bold;
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

export const StyledInputComment = styled.textarea`
  position: absolute;
  top: 30%;
  left: 10%;
  right: 10%;
  margin: 0 auto;
  text-align: top;
  
  Row: 3;
  Column: 10;
  width: 80%;
  height:60%;
  resize:none;
  box-shadow: 5px 5px 5px  rgba(0, 0, 0, 0.15);

  border: black;
  border-size: 5px;

  
`;
export const StyledInputType = styled(Input)`
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  margin: 0 auto;
  text-align: top;
  
  width: 80%;
  resize:none;
  box-shadow: 5px 5px 5px  rgba(0, 0, 0, 0.15);

  border: black;
  border-size: 5px;

  
`;



export const StyledTypeLabel = styled(Label)`
  position: absolute;
  left:10%;
  right:10%;
  width: 40%;

  margin: 0 auto;

  top: 0;
  text-align:center;

  font-size: 1.3rem;
  font-weight: bold;

  color: #A92C2C;
`;
export const StyledCommentLabel = styled(Label)`
  position: absolute;
  left:10%;
  right:10%;
  width: 40%;

  margin: 0 auto;

  top: 20%;
  text-align:center;

  font-size: 1.3rem;
  font-weight: bold;

  color: #A92C2C;
`;


export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0 ;
  display: flex;
  width: 50%;
  height: 35px;
  left: 10%;
  right: 10%;
  margin: 0 auto;


  border: none;
  justify-content: center;

  color: white;

  background: #A92C2C;
`;