import { createContext, useState } from "react";
import axios from "axios";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [page, setPage] = useState(1);

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
        `https://api.rawg.io/api/games?key=870a1b01479c4490b54b590b47f030f9&dates=2019-09-01,2019-09-30&page_size=12&page=${page}`
      )
      .then((response) => {
        console.log(response.data.results);

        return response.data.results;
      });
  };
  const initialState = listGames;
  const [gamesList, setGamesList] = useState(initialState);
  console.log(gamesList);
  return (
    <GamesContext.Provider value={{ gamesList, nextPage, previousPage }}>
      {children}
    </GamesContext.Provider>
  );
};
