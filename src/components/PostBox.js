import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";
import firebase from "firebase";
import "./postbox.css";

function PostBox({ userData }) {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.length > 5) {
      db.collection("posts").add({
        displayName: userData?.fullName,
        userName: userData?.userName,
        text: postText,
        isVerified: userData?.isVerified,
        image: postImage,
        avatar: `https://api.adorable.io/avatars/285/${userData?.uid}@adorable.io.png`,
        postedDate: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setPostText("");
      setPostImage("");
    }
  };

  return (
    <div className="postbox">
      <form onSubmit={handleSubmit}>
        <div className="postbox__input">
          <Avatar
            src={`https://api.adorable.io/avatars/285/${userData?.uid}@adorable.io.png`}
          />
          <input
            type="text"
            placeholder="Hey,What's Happening ?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="You can add your Image URL here :)"
          className="postbox__imageInput"
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
        />
        <Button className="postbox__submit" type="submit">
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostBox;
