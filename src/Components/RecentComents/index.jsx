import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DivRecentContainer } from "./style";

const RecentComents = () => {
  return (
    <DivRecentContainer>
      <h3>Comentários</h3>
      <BsFillEmojiDizzyFill />
      <p>Não encontramos nenhum comentário seu dos últimos tempos</p>
    </DivRecentContainer>
  );
};

export default RecentComents;
