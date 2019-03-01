import React from "react";
import "./Post.css";

const Post = ({ text, user, created_at }) => {
  const d = new Date();
  const dformat =
    [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
    " " +
    [d.getHours(), d.getMinutes()].join(":");
  return (
    <dl>
      <dt>Date</dt>
      <dd>{dformat}</dd>

      <dt>Author</dt>
      <dd>{user.name}</dd>
      <dt>Message</dt>
      <dd>{text}</dd>
    </dl>
  );
};

export default Post;
