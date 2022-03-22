import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Game, Profile } from "./style";

const CardComment = ({
  img = "",
  gameName,
  comment,
  likes,
  username="",
  profile,
}) => {

  return (
    <>
      {profile ? (
        <Profile className="card-comment">
          <div className="content-holder">
            <span className="game--name">{gameName}</span>
            <p className="comment">{comment}</p>
            <span className="like-holder">
              {likes}5
              <FaThumbsUp className="like-icon" />
            </span>
          </div>
        </Profile>
      ) : (
        <Game>
          <div className="img-holder">
            <img className="img-user-comment" src={img} alt={username}></img>
          </div>
          <div className="content-holder">
            <span className="name">{username}</span>
            <p className="comment">{comment}</p>
            <span className="like-holder">
              {likes}5
              <FaThumbsUp className="like-icon" />
            </span>
          </div>
        </Game>
      )}
    </>
  );
};

export default CardComment;
