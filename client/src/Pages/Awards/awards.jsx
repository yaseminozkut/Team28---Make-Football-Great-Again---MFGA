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
import { OldAwardCard } from "../../components/Awards/OldAward/oldAwardCard";

export const Awards = () => {
<<<<<<< Updated upstream
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
=======
  const [award, setAward] = useState({});
  const [oldAwards,setOldAwards] = useState([]);
  const [applied, setApplied] = useState(false);
  const [points, setPoints] = useState(0);
  const [isOldAwards, setIsOldAwards] = useState(false);
  const [isOldAwardsRender, setIsOldRewardsRender] = useState(false)
  const [isResFull, setisResFull] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if(!isOldAwards){
        axios
        .get("http://localhost:4000/api/currentAward")
        .then((res) => {
          setAward(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .post("http://localhost:4000/api/isApplied", {
          email: user !== null ? user.email : "",
        })
        .then((res) => {
          setApplied(res.data);
          var array = [];
          array.push(res);
          setisResFull(array);
        })
        .catch((err) => {
          console.log(err);
        });
  
      axios
        .post("http://localhost:4000/api/getPoints", {
          email: user !== null ? user.email : "",
        })
        .then((res) => {
          setPoints(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }, []);

  useEffect(() => {
    if(isOldAwardsRender) {
        console.log("here")
        axios
        .get("http://localhost:4000/api/oldAwards")
        .then((res) => {
          setOldAwards(res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
        if(oldAwards.length > 0)
            setIsOldRewardsRender(false);
    }
  })


  if (award === {}) {
    return <Loading></Loading>;
  }
  if (isResFull.length !== 1) {
    return <Loading></Loading>;
  }

  
  function createOldAwardCard(oldAward) {
    console.log(oldAward.title)
    return (
      <OldAwardCard
        key={oldAward._id}
        title={oldAward.title}
        image={oldAward.image}
        description={oldAward.description}
        pointsNeeded={oldAward.pointsNeeded}
        winner={oldAward.winner}
      />
    );
  }

  const handleApply = (e) => {
    e.preventDefault();
    if (points <= 0 || points < award.pointsNeeded) {
      window.alert("You don't have enough points");
    } else {
      axios
        .post("http://localhost:4000/api/applyAward", { email: user.email })
        .then((res) => {
          window.alert(res.data.message);
          console.log(award.pointsNeeded);
          setApplied(true);
          axios
          .post("http://localhost:4000/api/getPoints", {
            email: user !== null ? user.email : "",
          })
          .then((res) => {
            setPoints(res.data);
          })
          .catch((err) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    }
=======
        .catch((err) => {
          console.log(err);
        });
      });
  };
  
>>>>>>> Stashed changes

  return (
    <ProSidebarProvider>
    <PRGlobalContainer>
        <CustomSidebar>
<<<<<<< Updated upstream
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
=======
          <Menu>
            <MenuItem onClick={() => {setIsOldAwards(false); setIsOldRewardsRender(false)}}> Current Award </MenuItem>
            <MenuItem onClick={() => {setIsOldAwards(true); setIsOldRewardsRender(true)}}> Old Awards </MenuItem>
          </Menu>
        </CustomSidebar>
        {!isOldAwards? 
        <>
        <PRContainer>
          <ActiveAwardCard key={award._id} props={award}></ActiveAwardCard>
        </PRContainer>
        <DisplayAuth>
          <UserDisp>
            <PointsTitle>Your Total Points: {points}</PointsTitle>
          </UserDisp>
        </DisplayAuth>
        <DisplayAuth>
          <AdminDisp>
            <FinishButton>Finish Applications</FinishButton>
          </AdminDisp>
        </DisplayAuth>
        {!applied ? (
          <DisplayAuth>
            <UserDisp>
              <AwardButton onClick={handleApply}>Apply Award</AwardButton>
            </UserDisp>
          </DisplayAuth>
        ) : (
          <DisplayAuth>
            <UserDisp>
              <UnapplyAwardButton onClick={handleUnapply}>
                Unapply Award
              </UnapplyAwardButton>
            </UserDisp>
          </DisplayAuth>
        )}
        </>
        : 
        <PRContainer>{oldAwards.map(createOldAwardCard)}</PRContainer>
        }
      </PRGlobalContainer>
>>>>>>> Stashed changes
    </ProSidebarProvider>
  );
};
