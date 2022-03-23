// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
import { api_key } from "./localsettings";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from './pages/SearchPage/SearchPage';

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddCommentForm from "./components/AddCommentForm/AddCommentForm";
// import AddReplyForm from "./components/AddReplyForm/AddReplyForm";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   getSearchResults()
  // }, [])




// note is for the display search resutls Component, when you map over this data you will need to use . notation to access all of the info
// refrer to the individual objecs you are mapping over as video
// we can access the snippet data and set it equal to src={video.snippet.thumbnails.medium.url}
// each item should have a thumbnail, title and description
// async function getSearchResults(searchTerm='bob ross'){
//   let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${api_key}`);
//   console.log(response.data.items)
//   setSearchResults(response.data.items)
// }

  return (
    <div className="App">
      {/* <SearchBar getSearchResults={getSearchResults}/> */}
      <VideoPlayer />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
           <HomePage />
          }
          />
        <Route
          path="/search_result"
          element={
            <SearchPage searchResults = {SearchPage} />
          }
          />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/video" element={<VideoPage />} /> */}
        <Route 
          path='/add_comment'
          element={
            <PrivateRoute>
              <AddCommentForm />
            </PrivateRoute>
          }
      />
        {/* <Route 
          path='/add_reply' 
          element={
            <PrivateRoute>
              <AddReplyForm />
            </PrivateRoute>
          }
      /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
