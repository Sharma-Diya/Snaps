import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AddComments.scss";
const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function AddComments({ fetchComments }) {
  const { id } = useParams();
  const [commentName, setCommentName] = useState("");
  const [commentDescription, setCommentDescription] = useState("");
  const [error, setError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("added");

    if (!commentName || !commentDescription) {
      setError(true);
      alert("Please fill out both fields before submitting.");
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${backendUrl}/photos/${id}/comments`,
        {
          name: commentName,
          comment: commentDescription,
        }
      );
      fetchComments();
      setCommentName("");
      setCommentDescription("");

      console.log("Comment added:", response.data);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleFormSubmit} className="comment-form__container">
        <label className="comment-form__label">Name</label>
        <input
          className={`comment-form__input ${
            error && !commentName ? "error" : ""
          }`}
          value={commentName}
          onChange={(event) => {
            setCommentName(event.target.value);
            if (error) setError(false);
          }}
        />

        <label className="comment-form__label">Comment</label>
        <textarea
          className={`comment-form__textarea ${
            error && !commentDescription ? "error" : ""
          }`}
          value={commentDescription}
          onChange={(event) => {
            setCommentDescription(event.target.value);
            if (error) setError(false);
          }}
        ></textarea>

        <button className="comment-form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComments;
