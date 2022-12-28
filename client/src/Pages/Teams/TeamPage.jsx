import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  ContainerDiv,
  PlayerTitle,
  StyledHr,
  TeamCard,
  TeamImg,
  TeamNameTitle,
  StatsTitle,
  StandingCard,
  ImgBox,
  TeamContainer,
  StatContainer,
  PlayerContainer,
} from "./teamsElements";
import { PlayerCard } from "./PlayerCard";
import CustomPaginationActionsTable from "../../components/MUITable/CustomMuıTable";


//Material UI packets

var stop = true;
export const TeamPage = () => {
  const [players, SetPlayers] = useState([]);
  const { team } = useParams();

  const [teamsInfo, SetTeamInfo] = useState([]);
  const [teamsName, SetName] = useState([]);
  const [teamsImg, SetImg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/profile")
      .then((res) => {
        const teamsInfo = res.data;
        SetTeamInfo(teamsInfo);
        teamsInfo.forEach((element) => {
          var cleanName = element.name;
          cleanName = cleanName.replace(" ", "");
          cleanName = cleanName.replace(" ", "");
          cleanName = cleanName.replace(" ", "");
          if (cleanName === team) {
            SetName(element.name);
            SetImg(element.url);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:4000/teams/" + team)
      .then((res) => {
        const players = res.data;
        SetPlayers(players);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [teamStat, setTeamStat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000/stat/getStat");

      setTeamStat(result.data);
    };

    fetchData();
  }, []);

  function createCard(player) {
    var playerTeam = player.team;
    playerTeam = playerTeam.replace(" ", "");
    playerTeam = playerTeam.replace(" ", "");
    if (playerTeam === team) {
      return (
        <tr key={player._id}>
          <th>{player.name}</th>
          <th>{player.position}</th>
          <th>{player.birth}</th>
        </tr>
      );
    }
  }

  return (
    <ContainerDiv>
      <ImgBox></ImgBox>
      <TeamContainer></TeamContainer> {/*Not functional, just styling */}
      <StatContainer></StatContainer>
      <PlayerContainer></PlayerContainer>
      <TeamImg src={teamsImg} />
      <TeamNameTitle>{teamsName}</TeamNameTitle>
      <PlayerTitle>Players</PlayerTitle>
      <StatsTitle>Stats</StatsTitle>
      {teamStat
        .filter((CurrentTeam) => CurrentTeam.team === team.trim())
        .map((filteredTeam) => (
          <StandingCard>
            <standingsTitle>Rank: {filteredTeam.rank}</standingsTitle>
            <standingsTitle>Win: {filteredTeam.win}</standingsTitle>
            <standingsTitle>Lose: {filteredTeam.lose}</standingsTitle>
            <standingsTitle>Draw: {filteredTeam.draw}</standingsTitle>
            <standingsTitle>Point: {filteredTeam.point}</standingsTitle>
          </StandingCard>
        ))}
      <StyledHr></StyledHr>
      {/* {players.map(createCard)} */}

      <CustomPaginationActionsTable players={players} team={team}></CustomPaginationActionsTable>
    </ContainerDiv>
  );
};
