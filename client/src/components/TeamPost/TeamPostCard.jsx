import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { CustomCard, TFFAvatar, CustomCardText } from "./TeamPostCardElements";

export const TeamPostCard = ({content, imageURL}) => {
  return (
    <CustomCard>
      <TFFAvatar
        src={imageURL}
        alt="Team Logo"
      />

      <CustomCardText>
        {content}
      </CustomCardText>
    </CustomCard>
  );
};
