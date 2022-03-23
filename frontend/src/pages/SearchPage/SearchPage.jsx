import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const SearchPage = (props) =>{

    return (
        <div>   
                <table> 
                    <tbody>
                    {props.video.map((video, index) => {
                        return(
                            <tr key={index}>
                                <td>{video.title}</td>
                                <td>{video.description}</td>
                                <td>{video.thumbnail}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

        </div>
    )
}
    


// this page should have a search bar
// be able to take in keyword searches (not search by video_id)
// after search is successful allow user to select the video they want
// then take user to specific video page
// use filter to search?

export default SearchPage