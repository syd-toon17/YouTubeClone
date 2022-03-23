import React from 'react';
import axios from 'axios';

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
        </div>
    );
}

export default VideoPlayer