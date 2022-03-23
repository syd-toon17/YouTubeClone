// import React from "react";





// const RelatedVideos = (props) =>{


//    const handleClick = (event, id, title) => {
//    event.preventDefault();
//    props.setCurrentVideoId(id);
//    props.setCurrentVideoTitle(title);
   
//    console.log(id, title)
//    }

//     return (
//     <div>
//         <div className="container">
//             <h1>Here are some videos related to your selection!</h1>
            
//         </div>
//         <div>   
//             <table> 
//                 <tbody>
//                 {props.searchResults.map((video, index) => {
//                     return(

                        
//                         <tr key={index}>
//                             <td>{video.snippet.title}</td>
                            
//                             <input type="image" src={video.snippet.thumbnails.medium.url} 
//                             onClick={(event) => handleClick(event, video.id.videoId, video.snippet.title)}
//                             />
//                         </tr>
//                     )
//                 })}
//                 </tbody>
//             </table>

//         </div>
//     </div>
//     );
// };
    


// // this page should have a search bar
// // be able to take in keyword searches (not search by video_id)
// // after search is successful allow user to select the video they want
// // then take user to specific video page
// // use filter to search?

// export default RelatedVideos