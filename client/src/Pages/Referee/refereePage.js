import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const RefereePage = ()=>{
    const {name} = useParams();
    const [referees,SetReferees] = useState([]);
    const [values, setValues] = useState({
        name: "",
        yellowCard: "",
        yellowRedCard: "",
        redCard: 0,
        matchCount: "",
        penalty: 0
      });
    useEffect(() => {
        axios
        .get("http://localhost:4000/referees")
        .then(res => {
          const referees = res.data;
          SetReferees(referees);
          referees.forEach(element => {
            var cleanName = element.name;
            cleanName = cleanName.replace(" ", "")
            cleanName = cleanName.replace(" ", "")
            cleanName = cleanName.replace(" ", "")
            if(cleanName === name){
                setValues(element.name,element.yellowCard,element.yellowRedCard,element.redCard,element.matchCount,element.penalty)
                console.log(values)
              }
              
          });
         
        })
        .catch((err) => {
          console.log(err);
        });
      }, [])

}