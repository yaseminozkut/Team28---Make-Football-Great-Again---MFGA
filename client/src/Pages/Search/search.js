import React,{useState,useEffect} from "react";
import axios from "axios";
import { ContainerDiv,DataDiv,SearchButton,SearchDiv, SearchInput, SearchLogo, SmallDataA,SmallDataP, Title } from "./searchPageElements";



export const Search = ()=>{
    const [data,setData] = useState([])
    const [filteredData,setFiltered] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:4000/referees")
            .then( (res) => {
              const data = res.data;
              setData(data);
            })
            .catch((err) => {
              console.log(err);
            });
      }, []);

      const handleFilter =(event)=>
      {
        const searchWord = event.target.value;
        const newFilter = data.filter((value)=>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFiltered([]);
        }else{
            setFiltered(newFilter);
        }
        

      }



    return(
        <ContainerDiv>
        <Title>Search Engine 🔍</Title>
            <SearchDiv>
                <SearchInput type = "text" placeholder = "Enter something..." onChange ={handleFilter}/>
            </SearchDiv>
            {filteredData.length != 0 && (
            <DataDiv>
                {filteredData.slice(0,15).map((value) =>{
                    return(<SmallDataA href="">
                    <SmallDataP>{value.name}</SmallDataP>
                    </SmallDataA>
                    );
                })}
            </DataDiv>
            )}
        </ContainerDiv>
    )
}