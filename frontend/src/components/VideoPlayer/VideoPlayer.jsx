import React from 'react';
import axios from 'axios';

const VideoPlayer = () => {


// fix searchTerm
    return(
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameborder="0">
            </iframe>
        </div>
    );
}

export default VideoPlayer