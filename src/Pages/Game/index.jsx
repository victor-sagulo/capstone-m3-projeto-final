import Header from "../../Components/Header";
import FullCardGame from "../../Components/FullCardGame";

const Game = () => {

  return (
    <main>
      <div className="home-top">
        <Header />
      </div>
      <FullCardGame grade={5} />
      {/* <CommentsList comments={arrayOfComments} /> */}
    </main>
  );
};

export default Game;
