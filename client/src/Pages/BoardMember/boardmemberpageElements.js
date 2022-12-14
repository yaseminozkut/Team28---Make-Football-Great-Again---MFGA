import styled from "styled-components";
import {Card,Button} from "reactstrap";

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
`;

export const GoButton = styled(Button)`
  position: absolute;
  display:table;
  left:5%;
  top: 10%;
  margin: 0 auto 0 auto;
  width: 10rem;
  height: 2rem;

  border: none;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;

  color: white;

  background: black;
`;

export const InnerContainer = styled.div`
  position: relative;
  padding-top: 10%;
  width: 100%;
  height: 100%;
`