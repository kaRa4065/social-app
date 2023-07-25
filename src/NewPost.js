import React from "react";

const NewPost = ({
  data,
  postTitle,
  postBody,
  setPostTitle,
  setPostBody,
  handleSubmit,
}) => {
  return (
    <>
      <main className="NewPost">
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title</label>
          <input
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
            id="postTitle"
            type="text"
            required
          ></input>
          <label htmlFor="postBody"></label>
          <textarea
            value={postBody}
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
            id="postBody"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default NewPost;
