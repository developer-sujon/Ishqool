// PostList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentPosts } from "../redux/features/postSlice";

const PostList = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecentPosts());
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  if (loading === "rejected") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
