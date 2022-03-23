import { FaThumbsUp, FaTrash } from "react-icons/fa";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import Buttons from "../Buttons";
import { Game, Profile } from "./style";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/user";
import { useContext } from "react";

const CardComment = ({
  comment,
  profile,
  setFilteredComments,
  comments,
  reload,
}) => {
  const { handleRemoveComment, handleLikeComment, user } =
    useContext(UserContext);
  const fill = comment.whoLiked.some((id) => id === user._id);

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
              {comment.likes}
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
              {comment.user._id === user._id && (
                <button
                  onClick={() => {
                    handleRemoveComment(comment._id);
                    setFilteredComments(
                      comments.filter((el) => el._id !== comment._id)
                    );
                  }}
                >
                  <FaTrash />
                </button>
              )}
            </div>
            <p className="comment">{comment.text}</p>
            <span className="like-holder">
              {comment.likes}
              {fill ? (
                <BsHandThumbsUpFill
                  className="like-icon"
                  onClick={() => {
                    handleLikeComment(comment._id);
                    setTimeout(reload, 1000);
                  }}
                />
              ) : (
                <BsHandThumbsUp
                  className="like-icon"
                  onClick={() => {
                    handleLikeComment(comment._id);
                    setTimeout(reload, 1000);
                  }}
                />
              )}
            </span>
          </div>
        </Game>
      )}
    </>
  );
};

export default CardComment;
