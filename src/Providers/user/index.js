import app from "../../Services/api.js";
import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@GamesHub user")) || false
  );

  const history = useHistory();

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
        setUser(response.data.user);

        toast.success("Usuário logado com sucesso!");

        history.push("/")
      })
      .catch(() => toast.error("Email ou senha inválidos"));
  };

  const handleRegister = ({ username, email, password, plataform }) => {
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

  const handleLogOut = () => {
    localStorage.removeItem("@GamesHub Token");
    localStorage.removeItem("@GamesHub user");
    setUser(false);
    history.push("/");
  };

  return (
    <UserContext.Provider
      value={{ user, handleLogin, handleLogOut, handleRegister, handlePost }}
    >
      {children}
    </UserContext.Provider>
  );
};
