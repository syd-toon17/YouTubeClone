import React from "react";


const SearchPage = (props) =>{


   const handleClick = (event, id, title, description) => {
   event.preventDefault();
   props.setCurrentVideoId(id);
   props.setCurrentVideoTitle(title);
   props.setCurrentVideoDescription(description);
   console.log(id, title, description)
   }

    return (
    <div>
        <div className="container">
            <h1>Here are some videos based on your search!</h1>
            
        </div>
        <div>   
            <table> 
                <tbody>
                {props.searchResults.map((video, index) => {
                    return(
                        
                        <tr key={index}>
                            <td>{video.snippet.title}</td>
                            <td>{video.snippet.description}</td>
                            <input type="image" src={video.snippet.thumbnails.medium.url} 
                            onClick={(event) => handleClick(event, video.id.videoId, video.snippet.title, video.snippet.description)}
                            />
                        </tr>
                    )
                })}
                </tbody>
            </table>

        </div>
    </div>
    );
};
    


// this page should have a search bar
// be able to take in keyword searches (not search by video_id)
// after search is successful allow user to select the video they want
// then take user to specific video page
// use filter to search?

export default SearchPage