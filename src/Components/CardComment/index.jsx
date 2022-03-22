import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Game, Profile } from "./style";
import { Link } from "react-router-dom";

const CardComment = ({
  img = "",
  gameName,
  comment,
  likes,
  username = "",
  profile,
  gameSlug = "",
  id = "",
}) => {
  return (
    <>
      {profile ? (
        <Profile className="card-comment">
          <div className="content-holder">
            <span className="game--name">
              <Link to={`/gameInfo/${gameSlug}`}>{gameName}</Link>
            </span>
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
            <h3 className="name">
              <Link to={`/profile/${id}`}><span className="name">{username}</span></Link>
            </h3>
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
