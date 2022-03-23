import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { FaThumbsUp } from "react-icons/fa";
import { useEffect } from "react";
import CardComment from "../CardComment";
import { DivRecentContainer } from "./style";
import { useParams } from "react-router-dom";

const RecentComents = ({ userPosts }) => {
  return (
    <DivRecentContainer>
      <h3 className="comment-tittle">Principais Comentários</h3>
      {userPosts && userPosts.length !== 0 ? (
        <ul>
          {userPosts.map((comment, index) => {
            return <CardComment profile comment={comment} key={index} />;
          })}
        </ul>
      ) : (
        <div>
          <BsFillEmojiDizzyFill className="sad-icon" />
          <p className="no-comment-text">
            Não encontramos nenhum comentário seu
          </p>
        </div>
      )}
    </DivRecentContainer>
  );
};

export default RecentComents;
