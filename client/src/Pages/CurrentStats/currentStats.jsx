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
      <Button onClick={() => ApiHandler()}>Fetch API</Button>
      <Footer />
    </ContainerDiv>
  );
};

export default CurrentStats;

{
  /* <th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">2</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">3</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">4</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">5</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">6</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">7</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">8</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">9</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">10</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">11</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">12</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">13</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">14</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">15</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">16</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">17</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">18</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>
<tr>
<th scope="row">19</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>Mark</td>
<td>Otto</td>

</tr>  */
}
