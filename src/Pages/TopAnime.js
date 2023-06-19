import React from 'react'
import { useState,useEffect } from 'react'
import Card from "../Components/Card";
import axios from "axios";

const TopAnime = () => {
  const [topAnimeList,setTopAnimeList]=useState([]);
  useEffect(()=>{
    axios
    .get(`https://api.jikan.moe/v4/anime?q=top anime&limit=20`)
    .then(function (response) {
      // handle success
      setTopAnimeList(response.data.data);
      console.log(response.data.data);
    });
  },[]);
  return (
    <div className='cardWrapper'>
         {topAnimeList.map((item, index) => (
          <>
            <Card item={item} />
          </>
        ))}
    </div>
  )
}

export default TopAnime
