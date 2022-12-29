import { Button, Card } from "reactstrap";
import styled from "styled-components";


export const CustomCardContainer = styled.div`
    background-color: red;
`

export const CustomCard = styled(Card)`
    position: relative;

    border-radius:0;
    width: 70%;
    height: 10rem;

    font-size: 12px;
    margin-bottom: 2rem;
    margin-left: 1rem;
`

export const CustomName = styled.p`
    position: relative;
    display: inline-block;
    font-family: 'Bebas Neue';
    font-size: 16px;
    font-weight: bold;

    top: 0.5rem;
    left: 1rem;
`

export const CustomContent = styled.p`
    position: relative;
    left:1rem;
`

export const CustomLike = styled(Button)`
    position: absolute;
    width: 2.5rem;
    font-size: 11px;
    font-family: cursive, fantasy;
    right: 1.5rem;
    bottom: 0.5rem;

    border-width: 0;

    background-color: #EC2A2A;
`

export const CustomLikeTitle = styled.p`
    position: absolute;
    width: 2.5rem;
    font-size: 11px;
    font-family: 'Oswald Regular';
    right: 1.5rem;
    bottom: -0.1rem;

    border-width: 0;
`

export const CustomLikeCount = styled.p`
    position: absolute;
    font-size: 10px;
    width: 1.2rem;
    right: 2px;
    bottom: 0;
` 

export const CustomComment = styled(Button)`
    position: absolute;
    width: 2.5rem;
    font-size: 11px;
    font-family: cursive, fantasy;
    right: 6rem;
    bottom: 0.5rem;

    border-width: 0;

    background-color: #3E6D9C;
`

export const CustomCommentCount = styled.p`
    position: absolute;
    font-size: 10px;
    width: 1rem;
    right: 4.5rem;
    bottom: 0;

` 
export const CustomDelete = styled(Button)`
    position: absolute;
    z-index: 999;
    width: 1.5rem;
    font-size: 11px;
    font-family: cursive, fantasy;
    right: 0.5rem;
    top: 0.5rem;
    border-width: 0;
    background-color: #EC2A2A;
`