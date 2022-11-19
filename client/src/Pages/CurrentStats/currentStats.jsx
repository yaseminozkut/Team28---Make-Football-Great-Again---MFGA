import React from "react";
import { Button, Table } from "reactstrap";
import { Footer } from "../../components/Footer/Footer";
import useFetch from "../../Hooks/useFetch";
import {
  ContainerDiv,
  LeagueTable,
  LeagueTableContainer,
} from "./CurrentStatsElements";

const CurrentStats = () => {
  const ApiHandler = () => {
    const { data, loading, error } = useFetch(
      "https://api.collectapi.com/sport/league?data.league=super-lig"
    );
    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      console.log(error);
    }

    console.log(data);

    var dataArray = data.result;
  };

  return (
    <ContainerDiv>
      <LeagueTableContainer>
        <LeagueTable hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {/* {data &&
              data.result.map((d) => (
                <tr>
                  <th scope="row">{d.rank}</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
              ))} */}
          </tbody>
        </LeagueTable>
      </LeagueTableContainer>
      {/* <Button onClick={() => ApiHandler()}>Fetch API</Button> */}
      <Footer />
    </ContainerDiv>
  );
};

export default CurrentStats;