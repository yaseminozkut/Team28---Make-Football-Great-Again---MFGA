import React from "react";
import { CustomCard, CustomCard2, CustomBox, CustomBox2, CustomName, CustomSurname, CustomName2, CustomImage, CustomGoalCount, CustomGoalTitle, CustomTotalShotsCount, CustomTotalShotsTitle, CustomOnShotsTitle, CustomOnShotsCount, CustomTeamImage, CustomLogoImage, CustomRankTitle, CustomTeamImage2, CustomGoalCount2} from "./topScorerCardElements";

export const TopScorerCard = ({props}) => {
  return (
    <CustomCard>
    
    <CustomBox>
        <CustomName>{props.player.firstname}</CustomName>
        <CustomSurname>{props.player.lastname}</CustomSurname>
        <CustomGoalCount>{props.statistics[0].goals.total}</CustomGoalCount>
        <CustomGoalTitle>Goals</CustomGoalTitle>
        <CustomTotalShotsCount>{props.statistics[0].shots.total}</CustomTotalShotsCount>
        <CustomTotalShotsTitle>Shots</CustomTotalShotsTitle>
        <CustomOnShotsCount>{props.statistics[0].shots.on}</CustomOnShotsCount>
        <CustomOnShotsTitle>Shots-On</CustomOnShotsTitle>

    </CustomBox>
    <CustomLogoImage src="https://upload.wikimedia.org/wikipedia/tr/e/ef/S%C3%BCper_Lig_logo.png" alt="Logo"></CustomLogoImage>
    <CustomImage src={props.player.photo} alt="Top Player"></CustomImage>
    <CustomTeamImage src={props.statistics[0].team.logo} alt="Team"></CustomTeamImage>
    <CustomBox2>Top Player</CustomBox2>
    </CustomCard>
  );
};

export const ScorersCard = ({props,rank}) => {
    return (
      <CustomCard2>
      <CustomRankTitle>{rank}.</CustomRankTitle>
      <CustomTeamImage2 src={props.statistics[0].team.logo} alt="Team"></CustomTeamImage2>
      <CustomName2>{props.player.name}</CustomName2>
      <CustomGoalCount2>{props.statistics[0].goals.total}</CustomGoalCount2>
      </CustomCard2>
    );
  };