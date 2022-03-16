import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Desktop, Mobile } from "./style";

const CardComment = ({ img, name, comment, likes }) => {
  const [width, setWidth] = useState("");

  window.onresize = window.onload = () => {
    setWidth(window.innerWidth);
  };

  return (
    <>
      {width < 768 ? (
        <Mobile className="card-comment">
          <div className="img-holder">
            <img src={img}></img>
          </div>
          <div className="content-holder">
            <span className="name">{name}</span>
            <p className="comment">{comment}</p>
            <span className="like-holder">
              {likes}5
              <FaThumbsUp className="like-icon" />
            </span>
          </div>
        </Mobile>
      ) : (
        <Desktop>
          <div className="img-holder">
            <img src={img}></img>
          </div>
          <div className="content-holder">
            <span className="name">{name}</span>
            <p className="comment">{comment}</p>
            <span className="like-holder">
              {likes}5
              <FaThumbsUp className="like-icon" />
            </span>
          </div>
        </Desktop>
      )}
    </>
  );
};

export default CardComment;
