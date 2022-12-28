import React from "react";
import { CustomAssistCount, CustomAssistTitle, CustomPassAccuracyCount, CustomPassAccuracyTitle, CustomTotalPassesCount, CustomTotalPassesTitle } from "./topAssistCardElements";
import { CustomCard, CustomAssistCard2, CustomBox, CustomBox2, CustomName, CustomSurname, CustomName2, CustomImage, CustomGoalCount, CustomGoalTitle, CustomTotalShotsCount, CustomTotalShotsTitle, CustomOnShotsTitle, CustomOnShotsCount, CustomTeamImage, CustomLogoImage, CustomAssistRankTitle, CustomTeamImage2, CustomAssistCount2} from "./topAssistCardElements";

export const TopAssistCard = ({props}) => {
  return (
    <CustomCard>
    
    <CustomBox>
        <CustomName>{props.player.firstname}</CustomName>
        <CustomSurname>{props.player.lastname}</CustomSurname>
        <CustomAssistCount>{props.statistics[0].goals.assists}</CustomAssistCount>
        <CustomAssistTitle>Assists</CustomAssistTitle>
        <CustomTotalPassesCount>{props.statistics[0].passes.total}</CustomTotalPassesCount>
        <CustomTotalPassesTitle>Passes</CustomTotalPassesTitle>
        <CustomPassAccuracyCount>{props.statistics[0].passes.accuracy}</CustomPassAccuracyCount>
        <CustomPassAccuracyTitle>Accurate Passes</CustomPassAccuracyTitle>

    </CustomBox>
    <CustomLogoImage src="https://upload.wikimedia.org/wikipedia/tr/e/ef/S%C3%BCper_Lig_logo.png" alt="Logo"></CustomLogoImage>
    <CustomImage src={props.player.photo} alt="Top Player"></CustomImage>
    <CustomTeamImage src={props.statistics[0].team.logo} alt="Team"></CustomTeamImage>
    <CustomBox2>Top Assist</CustomBox2>
    </CustomCard>
  );
};

