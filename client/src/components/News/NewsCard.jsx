import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import { CustomCard, TFFAvatar, CustomCardText } from './NewsCardElements'

export const NewsCard = (props) => {
  return (
    
    <CustomCard>

      <TFFAvatar src="https://pbs.twimg.com/profile_images/1333774609494241281/BPF9ei6K_400x400.jpg" alt="Tff Logo" />

      <CustomCardText>
        {props.full_text}
      </CustomCardText>

    </CustomCard>

  )
}