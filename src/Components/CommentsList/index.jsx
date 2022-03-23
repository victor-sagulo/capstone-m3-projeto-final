import CardComment from "../CardComment";
import { Container } from "./style";

const CommentsList = ({ comments, profile }) => {
  return (
    <Container>
      <ul>
        {comments.map((comment, index) => (
          <CardComment key={index} profile={profile} comment={comment} />
        ))}
      </ul>
    </Container>
  );
};

export default CommentsList;
