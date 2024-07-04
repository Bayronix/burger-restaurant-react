import PropTypes from "prop-types";
import styles from "./CommentList.module.css";
import { MdOutlineStarHalf } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

// Default avatar image URL

const CommentList = ({ comments }) => {
  return (
    <div className={styles.commentList}>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className={styles.commentItem}>
            <FaUserCircle className={styles.commentAvatar} />

            <div className={styles.commentContent}>
              <strong>{comment.author}</strong> Rating {comment.rating}{" "}
              <MdOutlineStarHalf />
              <p>{comment.text}</p>
              <small>{comment.date}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      text: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
};

export default CommentList;
