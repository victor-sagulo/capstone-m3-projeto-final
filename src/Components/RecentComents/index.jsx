import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { FaThumbsUp } from "react-icons/fa";
import { useEffect } from "react";
import CardComment from "../CardComment"
import { DivRecentContainer } from "./style";
import { useParams } from "react-router-dom";

const RecentComents = ({userPosts}) => {
 
  return (
    <DivRecentContainer>
      <h3 className="comment-tittle">Comentários</h3>
      {userPosts.posts && userPosts.posts.length !==0 ? (
        <div>
        {userPosts.posts.map((comment, index)=>{
          return <CardComment
            profile
            gameName={comment.gameName}
            comment = {comment.text}
            likes = {comment.likes}
            key = {index}/>
            
        })}
        </div>
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
