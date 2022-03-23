import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_key } from "../../localsettings";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import SearchBar from "../../components/SearchBar/SearchBar";


const SearchPage = (props) =>{


    const [setsearchResults] = useState([]);

    useEffect(() => {
        searchResults()
    }, [])
    async function searchResults(searchTerm='bob ross'){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${api_key}`);
        console.log(response.data.items)
        setsearchResults(response.data.items)
      }

    return (
    <div>
        <div className="container">
            <h1>Here are some videos based on your search!</h1>
            <SearchBar searchRequest={SearchBar}/>
        </div>
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
    </div>
    );
};
    


// this page should have a search bar
// be able to take in keyword searches (not search by video_id)
// after search is successful allow user to select the video they want
// then take user to specific video page
// use filter to search?

export default SearchPage