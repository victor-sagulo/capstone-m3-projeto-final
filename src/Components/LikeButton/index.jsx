import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { LikeButtonContainer } from "./style";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const LikeButton = ({ gameInfo,...rest }) => {
  const { handleGameLike, user } = useContext(UserContext);

  const findGame = user.likedGames.some(
    (element) => element.slug === gameInfo.slug
  );

  return (
    <LikeButtonContainer onClick={() => handleGameLike(gameInfo)} {...rest}>
      {findGame ? <AiFillLike /> : <AiOutlineLike />}
    </LikeButtonContainer>
  );
};

export default LikeButton;
