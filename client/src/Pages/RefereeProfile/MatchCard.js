import React from "react";
import {HomeTitle,AwayTitle,ContainerCard, VsTitle, DateTitle}from "./MatchCardElements"



export const MatchCard = (props)=>{


    
    return(
        <ContainerCard>
            <HomeTitle>{props.home}</HomeTitle>
            <AwayTitle>{props.away}</AwayTitle>
            <DateTitle>{props.date}</DateTitle>
            <VsTitle>VS</VsTitle>
        </ContainerCard>
    )

}