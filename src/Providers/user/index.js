import app from "../../Services/api.js";
import { useState, createContext } from "react";

export const userContext = createContext();

export const userProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const handleLogin = (email, password) => {
    app
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "@GamesHub Token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@GamesHub user",
          JSON.stringify(response.data.user)
        );
      });
  };

  const handleRegister = (username, email, password, plataform) => {
    app.post("/register", {
      username,
      email,
      password,
      plataform,
    });
  };

  const handlePost = (text, game) => {
    app.post("/post", {
      text,
      game,
      userId: user.id,
      likes: 0,
      usefullPost: 0,
      comments: [],
    });
  };

  return (
    <userContext.Provider
      value={{ user, handleLogin, handleRegister, handlePost }}
    >
      {children}
    </userContext.Provider>
  );
};
