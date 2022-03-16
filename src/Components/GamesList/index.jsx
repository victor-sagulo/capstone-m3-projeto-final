import { useContext } from "react"
import { GamesContext } from "../../Providers/Games"


const GamesList = () =>{

    const {gamesList,previousPage,nextPage} = useContext(GamesContext)

    return(
        <div>
            <ul>{gamesList.map(game =><li><img src={game.background_image} style={{maxWidth:"300px"}}/></li>)}</ul>
            <div>
              <button onClick={previousPage}>previous</button>
              <button onClick={nextPage}>next</button>
            </div>
        </div>
    )
}