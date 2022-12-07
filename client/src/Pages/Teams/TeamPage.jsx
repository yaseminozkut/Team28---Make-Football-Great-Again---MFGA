import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ContainerDiv, PlayerTitle, StyledHr, TeamCard, TeamImg,TeamNameTitle,StatsTitle} from "./teamsElements";
import { PlayerCard } from "./PlayerCard";

var stop = true;
export const TeamPage= () =>{


  const [players,SetPlayers] = useState([]);
  const {team} = useParams();

  axios.get('http://localhost:4000/teams/'+team)
  .then(res =>{
      const players = res.data;
      SetPlayers(players)
  })
  .catch((err)=>{
      console.log(err);
  })

  const [teamsInfo,SetTeamInfo] = useState([]);
  const [teamsName,SetName] = useState([]);
  const [teamsImg,SetImg] = useState([]);
  axios.get('http://localhost:4000/profile')
  .then(res =>{
      const teamsInfo = res.data;
      SetTeamInfo(teamsInfo);
      teamsInfo.forEach(element => {
        var cleanName = element.name;
        cleanName = cleanName.replace(" ", "")
        cleanName = cleanName.replace(" ", "")
        cleanName = cleanName.replace(" ", "")
        if(cleanName === team){
          SetName(element.name);
          SetImg(element.url);
        }
        
      });
  })
  .catch((err)=>{
      console.log(err);
  })


  
  
   
  function createCard(player) {
      var playerTeam = player.team;
      playerTeam = playerTeam.replace(" ", "")
      playerTeam = playerTeam.replace(" ", "")
      if (playerTeam === team) {
        return (<PlayerCard

          key={player._id}
          name={player.name}
          position={player.position}
          birth={player.birth}
        />
              );
      }
          

      

    }
  
  return(
    <ContainerDiv>
    <TeamCard>
    <TeamImg src={teamsImg}/>
    <TeamNameTitle>{teamsName}</TeamNameTitle>
    <PlayerTitle>Players</PlayerTitle>
    <StatsTitle>Stats</StatsTitle>
    <StyledHr></StyledHr>
       {players.map(createCard)}
    </TeamCard>
    </ContainerDiv>
  )
}

  

  
