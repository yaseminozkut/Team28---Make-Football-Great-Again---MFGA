import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ContainerDiv, PlayerTitle, StyledHr, TeamCard, TeamImg } from "./teamsElements";
import { PlayerCard } from "./PlayerCard";


export const TeamPage= () =>{


  const [players,SetPlayers] = useState([]);
  const {team} = useParams();
  console.log(useParams())

  axios.get('http://localhost:4000/teams/'+team)
  .then(res =>{
      const players = res.data;
      SetPlayers(players)
      console.log(players)
  })
  .catch((err)=>{
      console.log(err);
  })

  const [teamsInfo,SetTeamInfo] = useState([]);
  axios.get('http://localhost:4000/profile')
  .then(res =>{
      const teamsInfo = res.data;
      SetTeamInfo(teamsInfo)
      console.log(teamsInfo)
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
    <TeamImg src="https://www.fenerbahce.org/getmedia/bf4b326b-90f0-4a6a-a332-edbfb6603de7/mobile-emblem-info.png.aspx?width=410&height=410&ext=.png"/>
    <PlayerTitle>Players</PlayerTitle>
    <StyledHr></StyledHr>
       {players.map(createCard)}
    </TeamCard>
    </ContainerDiv>
  )
}

  

  
