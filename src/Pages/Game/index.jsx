import Header from "../../Components/Header";
import FullCardGame from "../../Components/FullCardGame";
import {useContext} from "react"
import { UserContext } from "../../Providers/user";
import CommentsList from "../../Components/CommentsList";
import { useParams } from "react-router-dom";

const Game = () => {

  const { slug } = useParams();
  const {postsList} = useContext(UserContext)
  const filteredComments = postsList.filter((post)=>post.game === slug)

  return (
    <main>
      <div className="home-top">
        <Header />
      </div>
      <FullCardGame grade={5} />
      <CommentsList comments={filteredComments} profile/>
    </main>
  );
};

export default Game;
