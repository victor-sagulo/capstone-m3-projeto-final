import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { LikeButtonContainer } from "./style";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const LikeButton = ({ gameInfo }) => {
  const { handleGameLike, user } = useContext(UserContext);

  const findGame = user.likedGames.some(
    (element) => element.slug === gameInfo.slug
  );

  return (
    <LikeButtonContainer>
      <button onClick={() => handleGameLike(gameInfo)}>
        {findGame ? <AiFillLike /> : <AiOutlineLike />}
      </button>
    </LikeButtonContainer>
  );
};

export default LikeButton;
