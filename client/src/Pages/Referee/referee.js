import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ContainerDiv, Title,DropDownContainer2,DropDownHeader2,DropDownList2,ListItem2,DropDownListContainer2 } from "./RefereeElements";
import { Footer } from "../../components/Footer/Footer";
import { RefereeCard } from "../../components/RefereeCard/refereeCard";

export const Referee = (props) => {
  const [referees, SetReferees] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [1, 2, 3,4,5];
  const toggling = () => setIsOpen(!isOpen);

  useEffect(() => {
    axios
        .get("http://localhost:4000/referees")
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
        rating ={5}
      />
    );
  }
  
  
  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
   
  };
  
  return (
    <ContainerDiv>

    <Title>Referees</Title>
    
      
    {referees.filter((a)=> a.name === "Arda Kardesler" ).map(createCard)}

      
      <DropDownContainer2>
        <DropDownHeader2 onClick={toggling}>
          {selectedOption||"Select a number to see higher rated referees"}
        </DropDownHeader2>
        {isOpen && (
          <DropDownListContainer2>
            <DropDownList2>
              {options.map(option => (
                <ListItem2 onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem2>
              ))}
            </DropDownList2>
          </DropDownListContainer2>
        )}
      </DropDownContainer2>
       {referees.filter((a)=> a.rating === "5" ).map(createCard)}
      <Footer></Footer>
    </ContainerDiv>
  );
};
