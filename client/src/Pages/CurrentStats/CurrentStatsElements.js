import { Table } from "reactstrap";
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

export const LeagueTableContainer = styled.div`
    background: white;
    position: relative;
    left: 10rem;
    width: 60rem;

    margin-top: 10rem;
`

export const LeagueTable = styled(Table)`
    position: relative;

    

`