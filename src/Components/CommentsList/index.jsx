import CardComment from "../CardComment";

const CommentsList = ({ comments, profile, user }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CardComment
          profile={profile}
          img={comment.img}
          username={comment.username}
          gameName={comment.gameName}
          gameSlug={comment.gameSlug}
          comment={comment.text}
          likes={comment.likes}
        />
      ))}
    </div>
  );
};

export default CommentsList;
