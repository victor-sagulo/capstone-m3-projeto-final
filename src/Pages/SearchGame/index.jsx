import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";
import { Container } from "./style";
import { useContext } from "react";
import { GamesContext } from "../../Providers/Games";
import { Modal } from "./style";

const SearchGame = () => {
  const { searched, current } = useContext(GamesContext);

  return (
    <Container>
      <div className="home--top">
        <Header />
        {searched.length === 0 && (
          <Modal>
            <h2>Nenhum resultado encontrado 😔</h2>
            <p>
              Que tal buscar pelo seu <span>game favorito?</span>
            </p>
          </Modal>
        )}
      </div>
      {searched.length > 0 && (
        <div className="home--bottom">
          {current !== "" ? (
            <h2 className="main--title">
              Resultados da pesquisa por <h4>{current}</h4>
            </h2>
          ) : (
            <h2 className="main--title">Resultados da pesquisa</h2>
          )}
          <GamesList type="search" />
        </div>
      )}
    </Container>
  );
};

export default SearchGame;
