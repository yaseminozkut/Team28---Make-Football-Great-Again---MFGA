import React, { useEffect, useState } from "react";
import axios from "axios";


import {
  CustomSidebar,
  PostButton,
  PostContainer,
  GlobalContainer,
  CustomContainer,
} from "./CommunityElements";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { PostCard } from "../../components/PostCard/PostCard";
import Loading from "../../components/Loading/loading";
import { PostForm } from "../../components/PostForm/PostForm";
import { DisplayAuth } from "../../components/PageDirect/NavbarDisplay";


export const Community = () => {

  const checkUser = localStorage.getItem("currentUser");


  const [posts, SetPosts] = useState([]);
  const [isForm, setForm] = useState(false);

  var email;

  if (checkUser) {
    email = JSON.parse(localStorage.getItem("currentUser")).email;
  } else {
    email = "anonym"
  }


  // console.log(isForm);

  useEffect(() => {

    axios
        .get("http://localhost:4000/api/getAllPost")
        .then( (res) => {
          console.log(res.data)
          const posts = res.data;
          SetPosts(posts);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);



  if (posts === 0) {
    return <Loading></Loading>;
  }



  const CreatePostHandler = () => {
      setForm(!isForm)
  }


  function createCard(post) {

    var isLiked = false;

    for(var i = 0 ; i < post.likeUser.length ; i++) {
      if(post.likeUser[i] === email) {
        isLiked = true;
      }
    }

    console.log(isLiked);


    return (
      <PostCard
        key={post._id}
        name={post.postedBy.name}
        content={post.content}
        likeCount={post.likeCount}
        commentCount={post.commentCount}
        postId= {post._id}
        isLiked = {isLiked}
      />
    );
  }

  // console.log(isForm)

  return (
    <ProSidebarProvider>
      { !isForm ?  <GlobalContainer>
        <CustomContainer>
          <CustomSidebar>
            <Menu>
              <SubMenu label="Filter by comment count">
                <MenuItem> more than 30 </MenuItem>
                <MenuItem> more than 20 </MenuItem>
                <MenuItem> more than 10 </MenuItem>
                <MenuItem> more than 5 </MenuItem>
              </SubMenu>
              <SubMenu label="Filter by like count">
                <MenuItem> more than 30 </MenuItem>
                <MenuItem> more than 20 </MenuItem>
                <MenuItem> more than 15 </MenuItem>
                <MenuItem> more than 10 </MenuItem>
              </SubMenu>

              <DisplayAuth>
                <PostButton onClick = {CreatePostHandler} >Create Post</PostButton>
              </DisplayAuth>
            </Menu>
          </CustomSidebar>
        </CustomContainer>

        
        <PostContainer>
          {[...posts]
              .sort((a, b) => (a.rank < b.rank ? 1 : -1))
              ?.map(createCard)}
        </PostContainer>
      </GlobalContainer> : <PostForm isForm={isForm} />}
      
    </ProSidebarProvider>
  );
};
