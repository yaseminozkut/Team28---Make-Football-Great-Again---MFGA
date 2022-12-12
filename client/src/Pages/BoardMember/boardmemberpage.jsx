import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { ContainerDiv, InnerContainer } from "./boardmemberpageElements";
import { MatchCard } from "./nextMatchCard";

const BoardMember = () => {
  const [matches,SetMatches] = useState([]);



  useEffect(() => {
    axios
        .get("http://localhost:4000/board/nextMatches")
        .then( (res) => {
          const matches = res.data;
          SetMatches(matches);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  if (matches === 0) {
    return <h1>Loading...</h1>;
  }

  function createCard(matches) {
    return (
      <MatchCard
        key={matches._id}
        home={matches.home}
        away={matches.away}
        date={matches.date}
        referee={matches.referee}
      />
    );
  }
  return (
    <ContainerDiv>
    {matches.map(createCard)}

    </ContainerDiv>
  );
};

export default BoardMember;
