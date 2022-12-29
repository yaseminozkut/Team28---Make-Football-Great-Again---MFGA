import React from "react";
import { ContainerCard, Comment, TypeTitle, DateTitle } from "./fixedCardElements";




export const FixedCard = (props)=>{
    return(
        <ContainerCard>
            <TypeTitle>{props.type}</TypeTitle>
            <DateTitle>Fix Time: {props.time}</DateTitle>
            <Comment>{props.comment}</Comment>
        </ContainerCard>
    )
}