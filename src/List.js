import React from "react";

const List = ({ data }) => {
  return (
    <main className="Home">
      {data.map((post) => (
        <article className="postPage" key={data.id}>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className="postBody">
            {post.body?.length <= 25
              ? post.body
              : `${post.body?.slice(0, 25)}...`}
          </p>
        </article>
      ))}
    </main>
  );
};

export default List;
