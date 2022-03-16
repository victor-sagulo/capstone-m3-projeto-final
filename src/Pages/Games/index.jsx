import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";

const GamesPage = () =>{
    return(
        <main>
            <Header/>
            <body>
                <h2>Games</h2>
                <GamesList type={"games"}/>
            </body>
        </main>
    )

}

export default GamesPage