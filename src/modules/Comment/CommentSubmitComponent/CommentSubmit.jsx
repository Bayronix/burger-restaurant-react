import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

const initialValues = {
  author: "",
  rating: "1",
  text: "",
  date: new Date().toISOString().substring(0, 10),
};

const CommentSubmit = ({ onAddComment }) => {
  const handleSubmit = (values) => {
    const newComment = { ...values, id: Date.now() };
    onAddComment(newComment);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <h2>Comments</h2>

        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="author" />
        </div>

        <div>
          <label htmlFor="rating">Rating:</label>
          <Field as="select" id="rating" name="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <Field as="textarea" id="comment" name="text" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

CommentSubmit.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};

export default CommentSubmit;
