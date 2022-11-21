import styled from "styled-components";
import {Card } from "reactstrap";

export const ContainerCard = styled(Card)`
  position: relative;
  height: 6rem;
  width: 28.5rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  top: 6.5rem;
  justify-content: center;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
  
`;

export const NameTitle = styled.h1`
  position: absolute;
  top: 5%;
  left: 35%;
  color: black;
  
  text-decoration-thickness: 1px;
  text-alignment: center;
  font-weight: bold;

  font-size: 1.5rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const MatchCountTitle = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 2.2rem;
  left: 1rem;
  font-size: 12px;
  text-decoration: none;
  color: red;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`;

export const MatchCount = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 3.5rem;
  left: 3rem;
  font-size: 14px;
  text-decoration: none;
  color: black;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`;

export const YellowCardTitle = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 2.2rem;
  left: 7rem;
  font-size: 12px;
  text-decoration: none;
  color: red;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`;

export const YellowCard = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 3.5rem;
  left: 9rem;
  font-size: 14px;
  text-decoration: none;
  color: black;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`;


export const YellowRedCardTitle = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 2.2rem;
  left: 12.5rem;
  font-size: 12px;
  text-decoration: none;
  color: red;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`;

export const YellowRedCard = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 3.5rem;
  left: 15.3rem;
  font-size: 14px;
  text-decoration: none;
  color: black;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`;

export const RedCardTitle = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 2.2rem;
  left: 19.7rem;
  font-size: 12px;
  text-decoration: none;
  color: red;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`;

export const RedCard = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 3.5rem;
  left: 21rem;
  font-size: 14px;
  text-decoration: none;
  color: black;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`;

export const PenaltyTitle = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 2.2rem;
  left: 24.3rem;
  font-size: 12px;
  text-decoration: none;
  color: red;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`

export const Penalty = styled.h1`
  position: absolute;
  color: #fff;
  margin-bottom: 25px;
  top: 3.5rem;
  left: 25.3rem;
  font-size: 14px;
  text-decoration: none;
  color: black;
  
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`