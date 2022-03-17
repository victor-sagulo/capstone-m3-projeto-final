import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";

const GamesPage = () =>{
    return(
        <main>
            <Header/>
            <div>
                <h2>Games</h2>
                <GamesList type={"games"}/>
            </div>
        </main>
    )

}

export default GamesPage