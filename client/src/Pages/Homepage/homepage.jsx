// import axios from "axios";
import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { Footer } from "../../components/Footer/Footer";
// import { NEWS_API_URL } from "../../config/apikeys";
// import useFetch from "../../Hooks/useFetch";

import {
  ContainerDiv,
  Fixture,
  InnerContainer,
  NewsButton,
  // UpcomingMatch,
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

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=7560ffd5c009403fbc7477279f5090d8")
    .then((response) => {
      console.log(response)
    })
  }


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

          <NewsButton onClick = {getNews}> FETCH NEWS </NewsButton>
        </InnerContainer>
        <Footer></Footer>
      </ContainerDiv>
    </>
  );
};

export default Homepage;
