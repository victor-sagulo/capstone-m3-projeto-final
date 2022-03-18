import { GamesContext } from "../../Providers/Games";
import { UserContext } from "../../Providers/user";
import { useContext } from "react";
import Header from "../../Components/Header";
import Modals from "../../Components/Modal";
import FullCardGame from "../../Components/FullCardGame";
import CardComment from "../../Components/CardComment";
import CommentsList from "../../Components/CommentsList";

const Game = () => {
  const { gameInfo } = useContext(GamesContext);
  const { postsList } = useContext(UserContext);
  console.log(gameInfo);

  const arrayOfComments = () => {
    return postsList.map((post) => post.game === gameInfo.name);
  };

  return (
    <main>
      <div className="home-top">
        <Header />
      </div>
      <FullCardGame game={gameInfo} grade={5} />
      <CommentsList comments={arrayOfComments} />
    </main>
  );
};

export default Game;
