import React from "react";
import "./feed.css";
import Post from "./Post";
import PostBox from "./PostBox";
import greetingTime from "greeting-time";
import FlipMove from "react-flip-move";

const Feed = ({ posts, userData }) => {
  return (
    <FlipMove className="feed">
      {/* Header */}
      <div className="feedHeader">
        <h2>
          {greetingTime(new Date())},{userData?.fullName}
        </h2>
      </div>
      {/* Posting Box */}
      <PostBox userData={userData} />
      {/* Posts Mapping */}
      {posts?.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          isVerified={post.isVerified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
          key={post.id}
        />
      ))}
    </FlipMove>
  );
};

export default Feed;
