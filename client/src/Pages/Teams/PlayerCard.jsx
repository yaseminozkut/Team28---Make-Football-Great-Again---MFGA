import React from "react";
import { BirthTitle, ContainerCard, NameTitle, PositionTitle} from "./PlayerCardElements";

export const PlayerCard = (props)=>{

    
    return(
        <ContainerCard>
        
            <NameTitle>{props.name}</NameTitle>
            <PositionTitle>{props.position}</PositionTitle>
            <BirthTitle>{props.birth}</BirthTitle>
            
        </ContainerCard>
    )

}
