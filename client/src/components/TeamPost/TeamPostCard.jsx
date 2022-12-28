import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { CustomCard, TFFAvatar, CustomCardText } from "./TeamPostCardElements";

export const TeamPostCard = (props) => {
  return (
    <CustomCard>
      <TFFAvatar
        src="https://pbs.twimg.com/profile_images/1583812988913549312/AMcNHO2m_400x400.jpg"
        alt="Tff Logo"
      />

      <CustomCardText>
        Nef Stadyumu’nda tüyleri diken diken eden o muhteşem koreografi! 😍 “Ey
        yükselen yeni nesil, İstikbal sizindir. Cumhuriyeti biz kurduk, onu
        yüceltecek ve yaşatacak sizlersiniz.” İLELEBET İZİNDEYİZ ATAM! 🇹🇷
        #Cumhuriyetin100üGalatasaray
      </CustomCardText>
    </CustomCard>
  );
};
