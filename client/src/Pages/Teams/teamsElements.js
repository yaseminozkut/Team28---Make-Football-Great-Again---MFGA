import styled from "styled-components";

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
width:30%;

  top: 35%;
  left: 46%;



  color: black;

  font-size: 2rem;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StyledHr = styled.hr`
position:relative;
width:80%;

  top: 40%;


  border-style: dotted none none ;
  border-color: red;
  border-width: 15px;
  height: 15px;
  margin: 0 auto;
  width:40%;

`;

export const TeamImg = styled.img`
 position:absolute;
 left:44%;
  top: 10%;
  border-radius: 50%;
  border: 7px #432C7A;
  width: 200px;
  height: 200px;






`;