import styled from "styled-components";

export const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0;
  padding: 0;
  text-align: center;

  height: 120%;
  width: 100%;  
  background: #EAE7E7;
  flex: 1;

  /* @media screen and (max-width: 768px) {
        display: none;
  } */
`;

export const Title = styled("h1")`
  position: absolute;
  text-align: center;
  width: 15%;
  right: 10%;
  margin: 0 auto;
  left: 10%;
  top: 7%;
  font-size: 2.2rem;
  font-weight:bold;

`;