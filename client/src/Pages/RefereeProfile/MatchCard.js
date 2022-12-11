import React from "react";
import {HomeTitle,AwayTitle,ContainerCard, VsTitle}from "./MatchCardElements"



export const MatchCard = (props)=>{


    
    return(
        <ContainerCard>
            <HomeTitle>{props.home}</HomeTitle>
            <AwayTitle>{props.away}</AwayTitle>
            <VsTitle>VS</VsTitle>
        </ContainerCard>
    )

}