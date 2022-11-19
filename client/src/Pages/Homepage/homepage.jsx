import axios from "axios";
import React, { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import useFetch from "../../Hooks/useFetch";

import {
  ContainerDiv,
  Fixture,
  InnerContainer,
  UpcomingMatch,
  UpComingMatchContainer,
} from "./HomepageElements";

const Homepage = () => {
  // const { data, loading, error } = useFetch(
  //   "https://api.collectapi.com/sport/results?data.league=super-lig"
  // );
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (error) {
  //   console.log(error);
  // }

  // console.log(data);
  return (
    <>
      <ContainerDiv>
        <InnerContainer>
          <UpComingMatchContainer>
            <Fixture>Recent matches</Fixture>
            {/* {data &&
              data.result.map((d) => (
                <UpcomingMatch key={d.home}>
                  {d.date} <br /> {d.away} - {d.home} <br/> {d.skor}
                </UpcomingMatch>
              ))} */}
          </UpComingMatchContainer>
        </InnerContainer>
        <Footer></Footer>
      </ContainerDiv>
    </>
  );
};

export default Homepage;
