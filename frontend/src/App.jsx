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
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";

function App() {
  
  const [searchResults, setSearchResults] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(['lLWEXRAnQd0']); // this is coming from the user clicking on thumbnail
  const [currentVideoTitle, setCurrentVideoTitle] = useState(["Bob Ross - Island in the Wilderness (Season 29 Episode 1)"]); // same
  const [currentVideoDescription, setCurrentVideoDescription] = useState(["Take a walk with Bob Ross down a little lakeside path in a secluded place; you'll delight in the discovery of a small uninhabited"]); // same
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    getSearchResults()
  }, [])

  useEffect(() => {
    getRelatedVideos(currentVideoId)
  }, [])


// note is for the display search resutls Component, when you map over this data you will need to use . notation to access all of the info
// refrer to the individual objecs you are mapping over as video
// we can access the snippet data and set it equal to src={video.snippet.thumbnails.medium.url}
// each item should have a thumbnail, title and description
async function getSearchResults(searchTerm='bob ross'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${api_key}`);
  console.log("got search results")
  setSearchResults(response.data.items)
}

async function getRelatedVideos(currentVideoId= 'Z-vFWuOHkHQ'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${currentVideoId}&type=video&part=snippet&key=${api_key}`);
  console.log("got related videos")
  setRelatedVideos(response.data.items)
}


  return (
    <div className="App">
      <SearchBar getSearchResults={getSearchResults}/>
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
      <VideoPlayer 
      currentVideoDescription={currentVideoDescription}
      currentVideoId={currentVideoId}
      currentVideoTitle={currentVideoTitle}

      />
      <RelatedVideos 
      relatedVideos = {relatedVideos}
      setCurrentVideoId = {setCurrentVideoId}
      setCurrentVideoTitle = {setCurrentVideoTitle}
      setCurrentVideoDescription = {setCurrentVideoDescription} />
      <SearchPage 
      searchResults={searchResults} 
      setCurrentVideoDescription ={setCurrentVideoDescription}
      setCurrentVideoId ={setCurrentVideoId}
      setCurrentVideoTitle={setCurrentVideoTitle}
      />
      <Footer />
    </div>
  );
}

export default App;
