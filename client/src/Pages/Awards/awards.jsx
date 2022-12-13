import React, { useEffect, useState } from "react";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import axios from "axios";
import { UnapplyAwardButton, FinishButton, AwardButton, CustomSidebar, PointsTitle, PRContainer, PRGlobalContainer } from "./awardsElements";
import { ActiveAwardCard } from "../../components/Awards/ActiveAward/activeAwardCard";
import { AdminDisp, DisplayAuth, UserDisp } from "../../components/PageDirect/NavbarDisplay";
import Loading from "../../components/Loading/loading";

export const Awards = () => {
    const [award, setAward] = useState({})
    const [applied, setApplied] = useState(false)
    const [isResFull, setisResFull] = useState([])
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userPoints = user.points
    useEffect( () => {
        axios.get("http://localhost:4000/api/currentAward")
        .then((res) =>{
            setAward(res.data)
        }
        ).catch((err)=>{
            console.log(err);
        });
        axios.post("http://localhost:4000/api/isApplied", {email: user.email})
        .then((res) =>{
            setApplied(res.data)
            var array = []
            array.push(res)
            setisResFull(array)
        }
        ).catch((err)=>{
            console.log(err);
        });
    }, [])
    
    if(award === {}){
        return <Loading></Loading>
    }
    if(isResFull.length !== 1){
        return <Loading></Loading>
    }

    const handleApply = (e) => {
        e.preventDefault()
        if(user.points <= 0 || user.points < award.pointsNeeded){
            window.alert("You don't have enough points")
        }
        else{
            axios.post("http://localhost:4000/api/applyAward", {email: user.email})
            .then((res)=> {
                window.alert(res.data.message)
                console.log(award.pointsNeeded)
                const newPoint = user.points - award.pointsNeeded
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify({
                      name: user.name,
                      username: user.username,
                      email: user.email,
                      role: user.role,
                      password: user.password,
                      points: newPoint,
                      team: user.team,
                    })
                  );
                  setApplied(true)
            })
        }
    }


    const handleUnapply = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/api/unapplyAward", {email: user.email})
        .then((res)=> {
            window.alert(res.data.message)
            const newPoint = user.points + award.pointsNeeded
            localStorage.setItem(
                "currentUser",
                JSON.stringify({
                  name: user.name,
                  username: user.username,
                  email: user.email,
                  role: user.role,
                  password: user.password,
                  points: newPoint,
                  team: user.team,
                })
              );
              setApplied(false)
        })
    }

  return (
    <ProSidebarProvider>
    <PRGlobalContainer>
        <CustomSidebar>
            <Menu>
            <MenuItem> Current Award </MenuItem>
            <MenuItem> Old Awards </MenuItem>
            </Menu>
        </CustomSidebar>
        <PRContainer><ActiveAwardCard key={award._id} props={award}></ActiveAwardCard></PRContainer>
        <DisplayAuth><UserDisp><PointsTitle>Your Total Points: {userPoints}</PointsTitle></UserDisp></DisplayAuth>
        <DisplayAuth><AdminDisp><FinishButton>Finish Applications</FinishButton></AdminDisp></DisplayAuth>
        {!applied ? 
            <DisplayAuth><UserDisp><AwardButton onClick={handleApply}>Apply Award</AwardButton></UserDisp></DisplayAuth>
            :
            <DisplayAuth><UserDisp><UnapplyAwardButton onClick={handleUnapply}>Unapply Award</UnapplyAwardButton></UserDisp></DisplayAuth>
        }
    </PRGlobalContainer>
    </ProSidebarProvider>
  );
};
