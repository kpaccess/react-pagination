import React from "react";

const Posts = ({ loading, posts }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h5 className="font-bold text-2xl">{post.title}</h5>
          <div className="mt-5 bg-blue-500 text-yellow-50 p-4">{post.body}</div>
        </div>
      ))}
    </>
  );
};

export default Posts;
