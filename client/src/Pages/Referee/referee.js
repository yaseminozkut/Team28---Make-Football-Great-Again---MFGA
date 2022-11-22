import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ContainerDiv, Title } from "./RefereeElements";
import { Footer } from "../../components/Footer/Footer";
import { RefereeCard } from "../../components/RefereeCard/refereeCard";

export const Referee = (props) => {
  const [referees, SetReferees] = useState([]);

  useEffect(() => {
    axios
        .get("https://mfga.herokuapp.com/referees")
        .then( (res) => {
          const referees = res.data;
          SetReferees(referees);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  if (referees === 0) {
    return <h1>Loading...</h1>;
  }

  function createCard(referee) {
    return (
      <RefereeCard
        key={referee._id}
        name={referee.name}
        matchCount={referee.matchCount}
        yellowCard={referee.yellowCard}
        yellowRedCard={referee.yellowRedCard}
        redCard={referee.redCard}
        penalty={referee.penalty}
      />
    );
  }

  return (
    <ContainerDiv>
    <Title>Referees</Title>
      {referees.map(createCard)}
      <Footer></Footer>
    </ContainerDiv>
  );
};
