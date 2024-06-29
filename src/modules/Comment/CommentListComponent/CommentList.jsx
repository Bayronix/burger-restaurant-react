import PropTypes from "prop-types";
import styles from "./CommentList.module.css";

const CommentList = ({ comments }) => {
  return (
    <div className={styles.commentList}>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}</strong> - Rating: {comment.rating}
            <p>{comment.text}</p>
            <small>{comment.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
