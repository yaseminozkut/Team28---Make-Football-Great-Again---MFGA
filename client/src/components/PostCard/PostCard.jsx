import React from 'react'

import {FaHeart, FaComment} from 'react-icons/fa'
import { CustomCard,CustomName,CustomContent, CustomLike, CustomComment, CustomCommentCount, CustomLikeCount } from './PostCardElements'

export const PostCard = (props) => {
  return (
        <CustomCard>
            <CustomName>
                {props.name}
            </CustomName>
            <CustomContent>
                {props.content}
            </CustomContent>
            <CustomComment>
                <FaComment></FaComment>
            </CustomComment>
            <CustomCommentCount>
                {props.commentCount}
            </CustomCommentCount>
            <CustomLike>
                <FaHeart></FaHeart>
            </CustomLike>
            <CustomLikeCount>
                {props.likeCount}
            </CustomLikeCount>
        </CustomCard>
  )
}
