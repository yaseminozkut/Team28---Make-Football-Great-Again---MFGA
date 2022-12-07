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
  
  background: linear-gradient(
    to bottom,
    #ff3838 0%,
    #ff4d4d 15.48%,
    #ffffff 90%
  );
  flex: 1;

  /* @media screen and (max-width: 768px) {
        display: none;
  } */
`;

export const ContainerCard = styled(Card)`
  position: relative;
  height: 43.75rem;
  width: 27rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius: 17%;
  border-bottom-left-radius: 20%;
  border-top-left-radius: 10%;
  top: 6.5rem;

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);

  
`;

export const Title = styled.h1`
  position: relative;
  margin: auto;
  top: 65px;

  color: black;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-align: center;

  font-size: 2.18rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
