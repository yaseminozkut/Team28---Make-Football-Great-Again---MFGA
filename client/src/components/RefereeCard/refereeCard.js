import React from "react";
import { ContainerCard,GoButton,NameTitle, Rating } from "./RefereeCardElements";
import { useNavigate } from "react-router-dom";


export const RefereeCard = (props)=>{
    const navigate = useNavigate();
    

    
    const handleSubmit = ()=>{
        var navigateName = props.name;
        navigateName = navigateName.replace(" ", "")
        navigateName = navigateName.replace(" ", "")
        console.log(navigateName)
        navigate("/referee/"+navigateName)
        
    }


    
    return(
        <ContainerCard>
            <NameTitle>{props.name}</NameTitle>
            <Rating>Rating: {props.rating}</Rating>
            <GoButton onClick ={handleSubmit}>Go to page</GoButton>
        </ContainerCard>
    )

}