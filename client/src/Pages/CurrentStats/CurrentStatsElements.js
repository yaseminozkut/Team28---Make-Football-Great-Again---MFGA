import { Button, Table, Container} from "reactstrap";
import styled from "styled-components";
import {
  Sidebar,
} from "react-pro-sidebar";

export const PRGlobalContainer = styled.div`
  position: relative;
`

export const PRContainer = styled( Container )`
  position: absolute;
  padding-top: 4rem;
  width: 70%;
  height: 40rem;
  right: -12rem;
  top: 0;
  overflow: scroll;
  border-width: 2px;
  border-color: black;
  @media screen and (max-width: 795px) {
        width: 40%;
  }
`
export const CustomSidebar = styled( Sidebar )`
  height: 48rem;
  background-color: #E8E8E8;
`

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

export const LeagueTableContainer = styled.div`
    background: white;
    position: absolute;
    left: 25%;
    width: 60rem;
    height: 58rem;
    margin-top: 2rem;
`

export const LeagueTable = styled(Table)`
    position: relative;

    

`

export const RefreshButton = styled( Button )`
  position: relative;
  left: 50rem;
  top: 0.4rem;
  width: 9rem;
`