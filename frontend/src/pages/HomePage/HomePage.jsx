import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api_key } from "../../localsettings";
import SearchBar from "../../components/SearchBar/SearchBar";

import axios from "axios";

const HomePage = () => {

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getSearchResults()
  }, [])

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
