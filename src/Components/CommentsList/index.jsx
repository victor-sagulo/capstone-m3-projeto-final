import CardComment from "../CardComment";
import { Container } from "./style";

const CommentsList = ({ comments, profile }) => {
  return (
    <Container>
      <ul>
        {comments.map((comment, index) => (
          <CardComment
            key={index}
            profile={profile}
            img={comment.user.img}
            username={comment.user.username}
            gameName={comment.gameName}
            gameSlug={comment.gameSlug}
            comment={comment.text}
            likes={comment.likes}
          />
        ))}
      </ul>
    </Container>
  );
};

export default CommentsList;
