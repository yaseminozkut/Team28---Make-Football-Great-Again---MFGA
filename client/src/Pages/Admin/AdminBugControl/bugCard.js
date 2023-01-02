import React,{useState} from "react";
import axios from "axios";
import { ContainerCard, Comment, TypeTitle, DoneButton, DeleteButton, DateTitle } from "./bugCardElements";
import { useNavigate } from "react-router-dom";



export const BugCard = (props)=>{
    const navigate = useNavigate();


    const handleDelete = (e)=>{
        e.preventDefault();
        const id = props.id;
        console.log(props.id)

        axios.delete("http://localhost:4000/bugs",{data: {id:id}})
        .then((res)=>{
            if(res.status===200){
                console.log("Deleted");
                
                window.alert(res.data.messsage)
                window.location.reload();
            }
            else{
                console.log("Error happened, cannot delete!");
            }
        })
        .catch((err)=>{
            console.log(err);
        });
        
    }
    
    return(
        <ContainerCard>
            <TypeTitle>{props.type}</TypeTitle>
            <DateTitle>{props.time}</DateTitle>
            <Comment>{props.comment}</Comment>
            <DeleteButton onClick = {handleDelete}>Delete</DeleteButton>
            <DoneButton>Done</DoneButton>
        </ContainerCard>
    )
}