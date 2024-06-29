import PropTypes from "prop-types";

const CommentList = ({ comments }) => {
  return (
    <div>
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
