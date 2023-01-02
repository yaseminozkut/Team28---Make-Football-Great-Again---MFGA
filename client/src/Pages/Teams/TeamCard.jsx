import React from "react";
import { ContainerCard, GoButton, NameTitle,ContainerDiv,TeamImg} from "./TeamCardElements";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const TeamCard = (props)=>{
    const [name,SetName] = useState([]);
    const navigate = useNavigate();
    

    
    const handleSubmit = ()=>{
        var navigateName = props.name;
        navigateName = navigateName.replace(" ", "")
        navigateName = navigateName.replace(" ", "")
        console.log(navigateName)
        navigate("/teams/"+navigateName)
        
    }

    
    return(
        <ContainerCard>
            <TeamImg src={props.image}/>        
            <NameTitle>{props.name}</NameTitle>
            <GoButton onClick={handleSubmit}>Go team Page</GoButton>          
        </ContainerCard>
    )

}
