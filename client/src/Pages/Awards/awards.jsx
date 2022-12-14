import React, { useEffect, useState } from "react";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import axios from "axios";
import {
  UnapplyAwardButton,
  FinishButton,
  AwardButton,
  CustomSidebar,
  PointsTitle,
  PRContainer,
  PRGlobalContainer,
} from "./awardsElements";
import { ActiveAwardCard } from "../../components/Awards/ActiveAward/activeAwardCard";
import {
  AdminDisp,
  DisplayAuth,
  UserDisp,
} from "../../components/PageDirect/NavbarDisplay";
import Loading from "../../components/Loading/loading";

export const Awards = () => {
  const [award, setAward] = useState({});
  const [applied, setApplied] = useState(false);
  const [points, setPoints] = useState(0);
  const [isResFull, setisResFull] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
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
  }, []);

  if (award === {}) {
    return <Loading></Loading>;
  }
  if (isResFull.length !== 1) {
    return <Loading></Loading>;
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
            console.log(err);
          });
        });
    }
  };

  const handleUnapply = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/unapplyAward", { email: user.email })
      .then((res) => {
        window.alert(res.data.message);
        setApplied(false);
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
      });
  };

  return (
    <ProSidebarProvider>
      <PRGlobalContainer>
        <CustomSidebar>
          <Menu>
            <MenuItem> Current Award </MenuItem>
            <MenuItem> Old Awards </MenuItem>
          </Menu>
        </CustomSidebar>
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
      </PRGlobalContainer>
    </ProSidebarProvider>
  );
};
