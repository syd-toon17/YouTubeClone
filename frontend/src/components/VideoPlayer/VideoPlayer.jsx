import React from 'react';
import axios from 'axios';
import AddCommentForm from '../AddCommentForm/AddCommentForm';
import AddReplyForm from '../AddReplyForm/AddReplyForm';
import { Routes, Route } from 'react-router-dom';

const VideoPlayer = (props) => {

const videoId = props.currentVideoId
// fix searchTerm
    return(
        <div>
            <h4>{props.currentVideoTitle}</h4>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${videoId}`}
  frameborder="0"></iframe>
  <p>{props.currentVideoDescription}</p>
        <Routes>
            <Route 
            path='/add_comment'
            element={
                <PrivateRoute>
                    <AddCommentForm />
                </PrivateRoute>
            }
        />
        </Routes>
        </div>
        
    );
}


export default VideoPlayer