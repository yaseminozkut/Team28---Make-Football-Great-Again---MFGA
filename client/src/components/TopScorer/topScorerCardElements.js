import {Card } from "reactstrap";
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
export const CustomEmptyContainer = styled.div`
    position: relative;
    top: 62rem;
    border-radius: 0;
    width: 25rem;
    height: 3rem;
    margin-bottom: 2rem;
    margin-left: 22rem;
`

export const CustomCardContainer = styled.div`
    position: absolute;
    top: 4rem;
    border-radius: 0;
    width: 25rem;
    height: 57rem;
    margin-bottom: 2rem;
    margin-left: 22rem;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14);
`

export const CustomCard = styled(Card)`
    position: relative;
    background: #1e1c1c;
    border-radius: 0;
    width: 25rem;
    height: 25rem;
    font-size: 12px;
`
export const CustomCard2 = styled(Card)`
    position: relative;
    border-radius: 0;
    width: 22rem;
    height: 3rem;
    left: 1.5rem;
    border: hidden;
    border-bottom-style: outset;
    background: transparent;
`
export const CustomBox = styled(Card)`
    position: absolute;
    background: #bb2424;
    top: 2rem;
    left: 2rem;
    border-radius: 0;
    width: 16rem;
    height: 92%;
    font-size: 12px;
    margin-bottom: 2rem;
    margin-left: 1rem;
`
export const CustomBox2 = styled(Card)`
    position: absolute;
    background: white;
    top: 0rem;
    left: 3rem;
    border-radius: 0;
    width: 5rem;
    height: 25%;
    font-size: 2rem;
    font-family: 'Bebas Neue',sans-serif;
    font-weight: bold;
    margin-bottom: 2rem;
    margin-left: 1rem;
    vertical-align: baseline;
    text-align: center;
`
export const CustomName = styled.p`
    position: absolute;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 1.5rem;
    top: 1rem;
    left: 7rem;
`
export const CustomSurname = styled.p`
    position: absolute;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    top: 3rem;
    left: 7rem;
`

export const CustomName2 = styled.p`
    position: absolute;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 1rem;
    top: 1rem;
    left: 11rem;
`
export const CustomNameTitle = styled.p`
    position: absolute;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 1rem;
    font-weight: bold;
    top: 1rem;
    left: 11rem;
`

export const CustomImage = styled.img`
    position: absolute;
    left: 12rem;
    top: 8rem;
    width: 50%;
`
export const CustomTeamImage = styled.img`
    position: absolute;
    width: 14%;
    top: 18.5rem;
    left: 21.1rem;
    border-radius: 100%;
    opacity: 0.85;
`
export const CustomTeamImage2 = styled.img`
    position: absolute;
    width: 10%;
    top: 0.5rem;
    left: 5.8rem;
    border-radius: 100%;
    opacity: 0.85;
`
export const CustomRankTitle = styled.p`
    position: absolute;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 1rem;
    font-weight: bold;
    top: 1rem;
    left: 1.5rem;
`
export const CustomTeamTitle = styled.p`
position: absolute;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 1rem;
    font-weight: bold;
    top: 1rem;
    left: 6rem;
`
export const CustomLogoImage = styled.img`
    position: absolute;
    width: 25%;
    top: 2rem;
    left: 19rem;
    border-radius: 100%;
`

export const CustomGoalTitle = styled.p`
    position: absolute;
    width: 4.5rem;
    font-size: 24px;
    font-family: 'Bebas Neue',sans-serif;
    top: 8rem;
    left: 2rem;
    color: #f1dada;
`
export const CustomGoalTitle2 = styled.p`
    position: absolute;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 1rem;
    font-weight: bold;
    top: 1rem;
    left: 19rem;
`
export const CustomGoalCount = styled.p`
    position: absolute;
    width: 2.5rem;
    font-size: 44px;
    font-family: 'Bebas Neue',sans-serif;
    top: 5rem;
    left: 2rem;
    font-weight: bold;
`
export const CustomGoalCount2 = styled.p`
    position: absolute;
    font-family: 'Bebas Neue',sans-serif;
    font-size: 1rem;
    top: 1rem;
    left: 19rem;
`

export const CustomTotalShotsTitle = styled.p`
    position: absolute;
    width: 4.5rem;
    font-size: 24px;
    font-family: 'Bebas Neue',sans-serif;
    top: 13rem;
    left: 2rem;
    color: #f1dada;
`
export const CustomTotalShotsCount = styled.p`
    position: absolute;
    width: 2.5rem;
    font-size: 44px;
    font-family: 'Bebas Neue',sans-serif;
    top: 10rem;
    left: 2rem;
    font-weight: bold;
`
export const CustomOnShotsTitle = styled.p`
    position: absolute;
    width: 4.5rem;
    font-size: 24px;
    font-family: 'Bebas Neue',sans-serif;
    top: 18rem;
    left: 2rem;
    color: #f1dada;
`
export const CustomOnShotsCount = styled.p`
    position: absolute;
    width: 2.5rem;
    font-size: 44px;
    font-family: 'Bebas Neue',sans-serif;
    top: 15rem;
    left: 2rem;
    font-weight: bold;
`