import React from "react";


const RelatedVideos = (props) =>{


   const handleClick = (event, id, title) => {
   event.preventDefault();
   props.currentVideoId(id);
   props.currentVideoTitle(title);
   
   console.log(id, title)
   }

    return (
    <div>
        <div className="container">
            <h1>Here are some videos related to your selection!</h1>
            
        </div>
        <div>   
            <table> 
                <tbody>
                {props.relatedVideos.map((video, index) => {
                    return(

                        
                        <tr key={index}>
                            <td>{video.snippet.title}</td>
                            <input type="image" src={video.snippet.thumbnails.medium.url} 
                            onClick={(event) => handleClick(event, video.id.videoId, video.snippet.title)}
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
    


export default RelatedVideos