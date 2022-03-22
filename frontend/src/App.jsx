// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import VideoPage from

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

  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
    getSearchResults()
  }, [])

async function getSearchResults(searchTerm='bob ross'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=AIzaSyBbA6kd-75ETcRF6u7jQBx11Sw93UnWmUw`);
  console.log(response.data)
  setSearchResults(response.data)
}

  return (
    <div className="App">
      <SearchBar getSearchResults={getSearchResults}/>
      <VideoPlayer />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
               <HomePage />
            // </PrivateRoute>
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
