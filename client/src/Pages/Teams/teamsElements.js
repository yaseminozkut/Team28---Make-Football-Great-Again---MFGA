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
`;
export const PlayerTitle = styled.h1`
position:relative;
width:10%;

  top: 35%;
  left: 46.5%;



  color: black;

  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StyledHr = styled.hr`
   position:relative;
   width:80%;

   top: 40%;
   left:32%;


  border-style: dotted none none ;
  border-color: red;
  border-width: 15px;
  height: 15px;
  margin: 0 auto;
  width:40%;

`;

export const TeamCard = styled(Card)`
  height: 100%;  
  width: 80%;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:5%;
  border-bottom-left-radius: 5%;
  border-top-left-radius: 5%;
  border-bottom-right-radius:5%;
  display: inline-block;
  
  top: 10%;
  left:10%;
  

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  margin-left: 10px;

  background: white;
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const TeamImg = styled.img`
 position:absolute;
 left:45%;
  top: 10%;
  border-radius: 50%;
  border: 7px #432C7A;
  width: 200px;
  height: 200px;






`;