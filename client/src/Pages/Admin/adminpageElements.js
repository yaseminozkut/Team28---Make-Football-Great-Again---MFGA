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
  background: #EAE7E7;
  flex: 1;
`;

export const BanDiv = styled.div`
  position: absolute;
  top:25%;
  left:5%;
  width:40rem;
  height: 300px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  overflow-y:auto;
  background: #EAE7E7;
`;
export const BannedDiv = styled.div`
  position: absolute;
  top:75%;
  left:5%;
  width:40rem;
  height: 300px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  overflow-y:auto;
  background: #EAE7E7;
`;

export const UserTitle = styled.h1`
position:absolute;
 width:15%;

  top: 20%;
  left: 10%;



  color: black;
  text-decoration: underline;
  text-decoration-thickness: 1px;

  font-size: 1.6rem;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const BannedTitle = styled.h1`
  position:absolute;
  width:15%;

  top: 70%;
  left: 10%;



  color: black;
  text-decoration: underline;
  text-decoration-thickness: 1px;

  font-size: 1.6rem;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;


export const InnerContainer = styled.div`
  position: relative;
  padding-top: 10%;
  width: 100%;
  height: 100%;
`