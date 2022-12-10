import styled from "styled-components";
import {Card } from "reactstrap";


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

  overflow-x: auto;
  background: linear-gradient(
    to bottom,
    #ff3838 0%,
    #ff4d4d 15.48%,
    #ffffff 90%
  );

`;

export const NameTitle = styled.h1`
width:30%;
top:10%;
  margin:2rem auto;



  color: white;

  font-size: 2.5rem;
  text-align: center;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const Rating = styled.h1`
position: absolute;
width:30%;
top:5%;
  margin:30px auto;



  color: white;

  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const RedCardTitle = styled.h1`
position:absolute;
width:10%;
left: 10%;
top:40%;




  color: red;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const RedCard = styled.h1`
position:absolute;
width:10%;
top:43%;
left: 10%;




  color: white;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const YellowCardTitle = styled.h1`
position:absolute;
width:10%;
left: 26%;
top:40%;




  color: yellow;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const YellowCard = styled.h1`
position:absolute;
width:10%;
top:43%;
left: 26%;




  color: white;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const YellowRedCardTitle = styled.h1`
position:absolute;
width:15%;
left: 43%;
top:40%;




  color: orange;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const YellowRedCard = styled.h1`
position:absolute;
width:15%;
top:43%;
left: 43%;




  color: white;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const MatchCountTitle = styled.h1`
position:absolute;
width:10%;
right: 28%;
top:40%;




  color: black;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const MatchCount = styled.h1`
position:absolute;
width:10%;
top:43%;
right: 28%;





  color: white;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const PenaltyTitle = styled.h1`
position:absolute;
width:10%;
right: 15%;

top:40%;




  color: green;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const Penalty = styled.h1`
position:absolute;
width:10%;
top:43%;
right: 15%;




  color: white;

  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;


export const RefereeCard = styled(Card)`
position: relative;
  height: 75rem;  
  width: 80%;
  border-width: 3px;
  border-color: black;
  border-top-right-radius:2%;
  border-bottom-left-radius: 2%;
  border-top-left-radius: 2%;
  border-bottom-right-radius:2%;
  
  
  top: 10%;
  
  
  

  margin:  auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */

  background:#434242 /*#6B728E*/;
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const RefereeImg = styled.img`
 margin:30px auto 0 auto;
  border: 7px black;
  border-radius: 100%;
  width: 300px;
  height: 300px;

`;

