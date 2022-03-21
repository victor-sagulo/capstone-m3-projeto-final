import CardComment from "../CardComment";

const CommentsList = ({ comments, profile }) => {

  console.log(comments);
  console.log(profile);

  return (
    <div>
      {comments.map((comment, index) => (
        <CardComment
          key={index}
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
