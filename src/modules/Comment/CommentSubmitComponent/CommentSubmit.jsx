import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import styles from "./CommentSubmit.module.css";

const initialValues = {
  author: "",
  rating: "1",
  text: "",
  date: new Date().toISOString().substring(0, 10),
};

const CommentSubmit = ({ onAddComment }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newComment = { ...values, id: Date.now() };
    onAddComment(newComment);
    resetForm(); // Очищення форми після сабміту
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.formContainer}>
        <h2 className={styles.feedback} id="Comments">
          We appreciate your feedback, add Your Comment.
        </h2>

        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="author" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rating">Rating:</label>
          <Field as="select" id="rating" name="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="comment">
            Comment:
          </label>
          <Field as="textarea" id="comment" name="text" />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

CommentSubmit.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};

export default CommentSubmit;
