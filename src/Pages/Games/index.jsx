import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";
import { Container } from "./style";

const GamesPage = () =>{
    return(
        <Container>
            <Header/>
            <main>
                <h2 className="main--title">Games</h2>
                <GamesList type={"games"}/>
            </main>
        </Container>
    )

}

export default GamesPage