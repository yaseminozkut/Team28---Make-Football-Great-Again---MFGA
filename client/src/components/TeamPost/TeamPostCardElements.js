import { Card, CardText } from "reactstrap";
import styled from "styled-components";

export const CustomCard = styled(Card)`
  margin-top: 81px;
  left: 8rem;

  width: 71%;
  height: 14rem;
  margin-bottom: 15px;
  background-color: white;
  font-family: sans-serif, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  position: relative;

  text-align: left;
`;

export const CustomCardText = styled(CardText)`
  position: relative;
  margin-top: 5px;
  top: 1rem;
  font-size: 15px;
  padding: 1rem 0.5rem;
`;

export const TFFAvatar = styled.img`
  position: relative;
  width: 40px;
  height: 40px;

  left: 0.8rem;
  top: 0.5rem;
`;
