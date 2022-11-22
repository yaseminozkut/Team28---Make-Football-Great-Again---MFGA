import { Button, Card } from "reactstrap";
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

export const InnerContainer = styled.div`
  position: relative;
  padding-top: 10%;
  width: 100%;
  height: 90rem;
`;

export const UpComingMatchContainer = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.8);

  top: 5rem;
  bottom: 0;

  display: inline-block;

  text-align: center;

  height: 100rem;
  width: 20rem;

  border-top-right-radius: 5rem;

  @media screen and (max-width: 809px) {
    display: none;
  }
`;

export const Fixture = styled.h4`
  position: relative;

  margin-bottom: 4rem;

  height: 1.5rem;
  width: 100%;
  top: 1.5rem;
  left: 0rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;

export const UpcomingMatch = styled(Card)`
  position: relative;

  left: 0.7rem;
  top: 0;

  height: 8rem;
  width: 85%;
  margin-top: 2rem;

  background: rgba(255, 255, 255, 0.5);

  &:hover {
    background: linear-gradient(
      to right,
      #ff4d4d 2.48%,
      #ffffff 100%
    );

    transition: 0.2s ease-in-out;
  }
`;



export const RecentMatchButton = styled( Button ) ` 
  position: relative;
  left: 0;
  top: 5rem;
`
