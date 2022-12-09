import styled from "styled-components";
import {Card,Input,Button } from "reactstrap";

export const ContainerCard = styled(Card)`
  position: absolute;
  height: 7rem;
  width: 12rem;
  left: 8%;
  top: 12%;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);

  margin: 0 auto; /* Added */
  margin-bottom: 10px; /* Added */

  background: black;
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);

  
`;
export const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0;
  padding: 0;

  height: 80%;
  width: 100%;
  
`;
export const Title = styled.h1`
width:90%;
color:white;

margin: 0 auto 0 auto;
font-size:0.8rem;
`;
export const OneInput = styled(Input)`
  position: absolute;
  top: 20%;
  left: 5%;


`;
export const TwoInput = styled(Input)`
  position: absolute;
  top: 20%;
  left: 25%;


`;
export const ThreeInput = styled(Input)`
  position: absolute;
  top: 20%;
  left: 45%;


`;
export const FourInput = styled(Input)`
  position: absolute;
  top: 20%;
  left: 65%;

`;
export const FiveInput = styled(Input)`
  position: absolute;
  top: 20%;
  
  left: 85%;

  
`;
export const One = styled.h1`
  position: absolute;
  font-size: 1rem;
  color:white;
  top: 45%;
  left: 5%;


`;
export const Two = styled.h1`
  position: absolute;
  font-size: 1rem;
  color:red;

  top: 45%;
  left: 25%;


`;
export const Three = styled.h1`
  position: absolute;
  font-size: 1rem;
  color:orange;

  top: 45%;
  left: 45%;


`;
export const Four = styled.h1`
  position: absolute;
  font-size: 1rem;
  color:yellow;

  top: 45%;
  left: 65%;

`;
export const Five = styled.h1`
  position: absolute;
  color:green;

  font-size: 1rem;

  top: 45%;
  
  left: 85%;

  
`;
export const RateButton = styled(Button)`
 position:absolute;
 width:40%;
 height:1.5rem;
 margin: 0 auto 0 auto;
 font-size:0.7rem;
 top: 70%;
 left:30%;
`;