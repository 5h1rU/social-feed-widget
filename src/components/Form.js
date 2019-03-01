import React from "react";
import "./Form.css";
const Form = React.memo(({ handleRequest }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { url, posts, interval } = e.target.elements;
    const options = {
      url: url.value,
      numberOfPosts: posts.value
    };

    handleRequest(options, interval);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">Feed URL</label>
      <input id="url" type="url" name="url" required placeholder="https://" />

      <label htmlFor="posts">Number of posts</label>
      <input id="posts" type="text" name="posts" required />

      <label htmlFor="interval">Update Interval</label>
      <input id="interval" type="number" name="interval" required />

      <button type="submit" disabled={false}>
        Fetch the posts!
      </button>
    </form>
  );
});

export default Form;
