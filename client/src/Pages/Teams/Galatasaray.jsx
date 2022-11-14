import React from "react";
import axios from "axios";
import cheerio from "cheerio";
import { UserCard } from "../Admin/AdminComponents/UserCard";
import { ContainerDiv } from "./teamsElements";


export const Galatasaray= () =>{
const url = "https://www.transfermarkt.com.tr/fenerbahce-istanbul/startseite/verein/36"
const kadro_data = []
async function getKadro(url){

    try{
        const response = await axios.get(url);
            
        const $=cheerio.load(response.data)

        const kadro = $("tr");
        kadro.each(function(){
            const playerName= $(this).find(".hide").text();
            const position= $(this).find("tr:nth-child(2) td").text();
            const birthDate = $(this).find("td:nth-child(4)").text();

           if(playerName.length > 1){
            
            kadro_data.push({playerName,position,birthDate});


            

           }
           console.log(kadro_data)

            

        });
        

           

    }
    catch(err){
        console.log(err);
    }
}

getKadro(url);
function createCard(user) {
    
        return (
            <UserCard
            
              name={user.playerName}
            />
        );

    

  }
  return(
    <ContainerDiv>
       {kadro_data.map(createCard)}
    </ContainerDiv>
  )


}