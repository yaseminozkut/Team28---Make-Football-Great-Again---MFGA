import React from "react";
import {HomeTitle,AwayTitle,RefereeTitle,GoButton,ContainerCard,vsTitle}from "./nextMatchesElements"
import { useNavigate } from "react-router-dom";



export const MatchCard = (props)=>{
    const navigate = useNavigate();
    
    const handleSubmit = ()=>{
        // var navigateHomeName = props.home;
        // navigateHomeName = navigateHomeName.replace(" ", "")
        // navigateHomeName = navigateHomeName.replace(" ", "")
        // var navigateAwayName = props.home;
        // navigateAwayName = navigateAwayName.replace(" ", "")
        // navigateAwayName = navigateAwayName.replace(" ", "")
        

        navigate("/board/"+props.home +"/"+ props.away)
        
    }


    
    return(
        <ContainerCard>
            <HomeTitle>{props.home}</HomeTitle>
            <AwayTitle>{props.away}</AwayTitle>
            <RefereeTitle>{props.referee}</RefereeTitle>
            <GoButton onClick ={handleSubmit}>Select Referee</GoButton>
        </ContainerCard>
    )

}