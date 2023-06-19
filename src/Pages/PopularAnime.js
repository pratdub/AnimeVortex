import React from 'react'
import { useState,useEffect } from 'react'
import Card from "../Components/Card";
import axios from "axios";

const PopularAnime = () => {
  const [populartList,setPopularList]=useState([]);
  useEffect(()=>{
    axios
    .get(`https://api.jikan.moe/v4/anime?q=popular&limit=20`)
    .then(function (response) {
      // handle success
      setPopularList(response.data.data);
      console.log(response.data.data);
    });
  },[]);
  return (
    <div>
       {populartList.map((item, index) => (
          <>
            <Card item={item} />
          </>
        ))}
    </div>
  )
}

export default PopularAnime
