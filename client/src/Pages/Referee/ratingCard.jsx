import React, { useState } from "react";
import { ContainerCard,FiveInput,ContainerDiv, TwoInput, ThreeInput, FourInput, OneInput, One, Two, Three, Four,Five, Title } from "./ratingCardElements";
export const RatingCard = ()=>{

    const[point,SetPoint]=useState([]);

    return(
        <ContainerCard>
        <ContainerDiv>
        <Title>Give a point to the referee</Title>
            <OneInput type="radio" name="point" value={1} onChange={e=>SetPoint(e.target.value)}/> 
            <One>1</One>
            <TwoInput type="radio" name="point" value={2} onChange={e=>SetPoint(e.target.value)}/>
            <Two>2</Two>
            <ThreeInput type="radio" name="point" value={3} onChange={e=>SetPoint(e.target.value)}/>
            <Three>3</Three>
            <FourInput type="radio" name="point" value={4} onChange={e=>SetPoint(e.target.value)}/>
            <Four>4</Four>
            <FiveInput type="radio" name="point" value={5} onChange={e=>SetPoint(e.target.value)}/>
            <Five>5</Five>
            </ContainerDiv>   
        </ContainerCard>
    )
}