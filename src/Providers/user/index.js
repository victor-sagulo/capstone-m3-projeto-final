import app from "../../Services/api.js";
import { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import userImg from "../../images/userImg.svg";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@GamesHub user")) || false
  );
  const [postsList, setPostsList] = useState([]);
  const [userList, setUserList] = useState([]);

  const history = useHistory();

  const listPosts = () => {
    app
      .get("/posts")
      .then((response) => {
        setPostsList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const listUsers = () => {
    app
      .get("/users/?_embed=posts")
      .then((response) => {
        setUserList(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listPosts();
    listUsers();
  }, []);

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

        toast.success("Usuário logado com sucesso!",{theme:"dark"});

        history.push("/");
      })
      .catch(() => toast.error("Email ou senha inválidos",{theme:"dark"}));
  };

  const handleRegister = ({ username, email, password, plataform }) => {
    app.post("/register", {
      username,
      email,
      password,
      plataform,
      img: userImg,
      description: "Olá eu estou usando o G4Hub",
      likedGames: [],
    });
  };

  const handlePost = (text, game) => {
    app.post("/posts", {
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
      value={{
        user,
        postsList,
        userList,
        handleLogin,
        handleLogOut,
        handleRegister,
        handlePost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
