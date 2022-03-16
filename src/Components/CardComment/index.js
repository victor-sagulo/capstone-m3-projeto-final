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
            <span className="name">{name}name</span>
            <p className="comment">
              {comment}Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
            <span className="name">{name}name</span>
            <p className="comment">
              {comment}Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
