import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AddComments.scss";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function AddComments({ fetchComments }) {
  const { id } = useParams();
  const [commentName, setCommentName] = useState("");
  const [commentDescription, setCommentDescription] = useState("");
  const [error, setError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!commentName || !commentDescription) {
      setError("Please fill out both fields before submitting.");
      return;
    }
    setError("");

    try {
       await axios.post(`${backendUrl}/photos/${id}/comments`, {
        name: commentName,
        comment: commentDescription,
      });
      fetchComments();
      setCommentName("");
      setCommentDescription("");
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

        {error && <p className="error-message">{error}</p>}

        <button className="comment-form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComments;
