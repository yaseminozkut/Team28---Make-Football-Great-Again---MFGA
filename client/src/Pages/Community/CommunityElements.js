import { Button, Container } from "reactstrap";
import styled from "styled-components";

import { Sidebar } from "react-pro-sidebar";

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


export const CustomSidebar = styled( Sidebar )`
  height: 40rem;
  background-color: #E8E8E8;


`

export const PostButton = styled( Button )`
  position: relative;
  background-color: #EC2A2A;
  width: 5.5rem;
  border-width: 0;

  left: 30%;
  top: 10rem;

  font-size: 12px;
  
  justify-self: center;
  justify-content: center;


  &:hover{
    background-color: #323231;
  }
`

export const GlobalContainer = styled.div`
  position: relative;
`
export const CustomContainer = styled.div`
  position: relative;
  width: 15.5rem;

`

export const PostContainer = styled( Container )`
  position: absolute;
  padding-top: 1rem;

  width: 70%;
  height: 40rem;
  right: 0;
  top: 0;

  @media screen and (max-width: 795px) {
        width: 40%;
  }
`