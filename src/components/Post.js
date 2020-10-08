import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import "./post.css";

const Post = React.forwardRef(
  ({ displayName, userName, isVerified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headersp">
                  {isVerified && <VerifiedUser className="post__badge" />}@
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image?.length >= 5 && (
            <a href={image} target="_blank" without rel="noopener noreferrer">
              <img src={image} alt={displayName} />
            </a>
          )}
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" className="post__footerIcons" />
            <Repeat fontSize="small" className="post__footerIcons" />
            <FavoriteBorder fontSize="small" className="post__footerIcons" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
