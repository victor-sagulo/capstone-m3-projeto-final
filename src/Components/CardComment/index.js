import { FaThumbsUp } from "react-icons/fa";

const CardComment = ({ img, name, comment, likes }) => {
  return (
    <div className="card-comment">
      <div className="img-holder">
        <img src={img}></img>
      </div>
      <div className="content-holder">
        <span className="name">{name}</span>
        <p className="comment">{comment}</p>
        <span className="like-holder">
          {likes}
          <FaThumbsUp />
        </span>
      </div>
    </div>
  );
};

export default CardComment;
