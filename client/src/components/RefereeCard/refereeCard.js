import React from "react";
import { ContainerCard, MatchCount, MatchCountTitle, NameTitle, Penalty, PenaltyTitle, RedCard, RedCardTitle, YellowCard, YellowCardTitle, YellowRedCard, YellowRedCardTitle } from "./RefereeCardElements";

export const RefereeCard = (props)=>{

    
    return(
        <ContainerCard>
            <NameTitle>{props.name}</NameTitle>
            <MatchCountTitle>Match Count</MatchCountTitle>
            <MatchCount>{props.matchCount}</MatchCount>
            <YellowCardTitle>Yellow Card</YellowCardTitle>
            <YellowCard>{props.yellowCard}</YellowCard>
            <YellowRedCardTitle>Yellow-Red Card</YellowRedCardTitle>
            <YellowRedCard>{props.yellowRedCard}</YellowRedCard>
            <RedCardTitle>Red Card</RedCardTitle>
            <RedCard>{props.redCard}</RedCard>
            <PenaltyTitle>Penalty</PenaltyTitle>
            <Penalty>{props.penalty}</Penalty>
        </ContainerCard>
    )

}