import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Comments.scss";
import AddComments from "../AddComments/AddComments";

const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const params = useParams();

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?api_key=${apiKey}`
      );
      const sortCommentsArray = response.data
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 3);

      setComments(sortCommentsArray);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchComments();
    }
  }, [params.id]);

  const countDisplayedComments = () => comments.length;

  return (
    <div className="comment">
      <AddComments fetchComments={fetchComments} />
      <h3 className="comment-count">{countDisplayedComments()} Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li className="comment-list" key={comment.id}>
            <div className="comment-info">
              <p className="comment-info__name">{comment.name}</p>
              <p className="comment-info__timestamp">
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsPage;
