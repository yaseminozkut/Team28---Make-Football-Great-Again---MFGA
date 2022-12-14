import { Button, Table } from "reactstrap";
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

export const LeagueTableContainer = styled.div`
    background: white;
    position: relative;
    left: 18%;
    width: 60rem;
    height: 58rem;
    margin-top: 10rem;
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