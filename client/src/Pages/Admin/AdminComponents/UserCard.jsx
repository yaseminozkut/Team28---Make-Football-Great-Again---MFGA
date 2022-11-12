import React from "react";
import axios from "axios";
import { ContainerCard, UserTitle,MailTitle,StyledButton} from "./UserCardElements";

export const UserCard = (props)=>{
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const banned ={
            name: props.name,
            email: props.mail,
            id: props._id

        }

        axios
        .post("http://localhost:4000/admin/" + props.id, banned)
        .then((response) => {
            window.alert("User successfully banned from the system")
            
          
        });
    }
    
    return(
        <ContainerCard>
            <UserTitle>{props.name}</UserTitle>
            
            <MailTitle>{props.mail}</MailTitle>
            <StyledButton onClick={handleSubmit}>Ban</StyledButton>
        </ContainerCard>
    )

}