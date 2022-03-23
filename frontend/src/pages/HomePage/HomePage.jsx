import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api_key } from "../../localsettings";
import SearchBar from "../../components/SearchBar/SearchBar";

import axios from "axios";

const HomePage = () => {

  const [searchRequest, setSearchResults] = useState([]);

  useEffect(() => {
    getSearchResults()
  }, [])


  // this is the home page suggested video
  // if they select this video it should take them to the VideoPage which will offer realated videos, comments, and replies
  async function getSearchResults(searchTerm='bob ross'){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${api_key}`);
    console.log(response.data.items)
    setSearchResults(response.data.items)
  }
  return (
    <div className="container">
      <h1>Home Page for Youtube Clone!</h1>
      <SearchBar getSearchResults={getSearchResults}/>
      
    </div>
  );
};

export default HomePage;
