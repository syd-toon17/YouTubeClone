import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
    user: "",
    comment_id: "",
    text: "",
    
};

const AddReplyForm = (props) => {
    const [user,token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewReply)
    

    async function postNewReply(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/youtube_clone/new_reply/0/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(token)
            console.log(formData)
            console.log(error.message)
        }
    }

    return (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              User:{" "}
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Text:{" "}
              <input
                type="text"
                name="text"
                value={formData.text}
                onChange={handleInputChange}
              />
            </label>
            <label>
              CommentId:{""}
              <input
                type="text"
                name="comment_id"
                value={formData.comment_id}
                onChange={handleInputChange}
              />
            </label>
            <p style={{ fontSize: "12px" }}>
              NOTE: Add your reply here!
            </p>
            <button>Submit Reply!</button>
          </form>
        </div>
      );
}

export default AddReplyForm