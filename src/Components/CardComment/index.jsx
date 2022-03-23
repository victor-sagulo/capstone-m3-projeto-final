import { FaThumbsUp, FaTrash } from "react-icons/fa";
import Buttons from "../Buttons";
import { Game, Profile } from "./style";
import { Link } from "react-router-dom";

const CardComment = ({ comment, profile }) => {
  return (
    <>
      {profile ? (
        <Profile className="card-comment">
          <h3 className="game--name">
            <Link to={`/gameInfo/${comment.gameSlug}`}>{comment.gameName}</Link>
          </h3>
          <div className="content-holder">
            <p className="comment">{comment.text}</p>
            <span className="like-holder">
              {comment.likes}5
              <FaThumbsUp className="like-icon" />
            </span>
          </div>
        </Profile>
      ) : (
        <Game>
          <div className="img-holder">
            <img
              className="img-user-comment"
              src={comment.user.img}
              alt={comment.user.username}
            ></img>
          </div>
          <div className="content-holder">
            <div className="title-and-btn-rmv">
              <h3 className="name">
                <Link to={`/profile/${comment.user._id}`}>
                  <span className="name">{comment.user.username}</span>
                </Link>
              </h3>
              <Buttons>
                <FaTrash />
              </Buttons>
            </div>
            <p className="comment">{comment.text}</p>
            <span className="like-holder">
              {comment.likes}5
              <FaThumbsUp className="like-icon" />
            </span>
          </div>
        </Game>
      )}
    </>
  );
};

export default CardComment;
