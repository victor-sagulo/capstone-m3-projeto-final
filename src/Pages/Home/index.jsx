import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";
import Modals from "../../Components/Modal";

const HomePage = () => {
    return(
        <main>
            <div className="home-top">
                <Header/>
                <Modals/>
            </div>
            <div className="home-bottom">
                <h2>Mais Populares</h2>
                <GamesList type={"home"}/>
            </div>
        </main>
    )
}

export default HomePage