import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [gamesList, setGamesList] = useState([]);
  const [listAllGames, setListAllGames] = useState([]);
  const [gameInfo, setGameInfo] = useState([]);
  const history = useHistory();

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const listGames = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?metacritc>90&key=870a1b01479c4490b54b590b47f030f9&dates=2021-12-01,2022-02-25&page_size=8&page=1`
      )
      .then((response) => {
        setGamesList(response.data.results);
      });
  };

  const listMoreGames = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=870a1b01479c4490b54b590b47f030f9&page_size=24&page=${page}`
      )
      .then((response) => {
        setListAllGames(response.data.results);
      });
  };

  const getGameInfo = (game) => {
    axios
      .get(
        `https://api.rawg.io/api/games/${game.slug}?key=870a1b01479c4490b54b590b47f030f9`
      )
      .then((response) => {
        setGameInfo(response.data);
        history.push(`/gameInfo/${game.slug}`);
      });
  };

  useEffect(() => {
    listGames();
    listMoreGames();
  }, [page]);

  return (
    <GamesContext.Provider
      value={{
        gamesList,
        listAllGames,
        gameInfo,
        nextPage,
        previousPage,
        getGameInfo,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};
