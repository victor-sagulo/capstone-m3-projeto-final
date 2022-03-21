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
  const [userPosts, setUserPosts] = useState([]);
  const [gameExist, setGameExist] = useState(false);

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

        toast.success("Usuário logado com sucesso!", { theme: "dark" });

        history.push("/");
      })
      .catch(() => toast.error("Email ou senha inválidos", { theme: "dark" }));
  };

  const handleRegister = ({ username, email, password, plataform }) => {
    app
      .post("/register", {
        username,
        email,
        password,
        plataform,
        img: userImg,
        description: "Olá eu estou usando o G4Hub",
        likedGames: [],
      })
      .then((_) => {
        toast.success("Conta criada com sucesso!", { theme: "dark" });
        history.push("/login");
      })
      .catch((_) => toast.error("Usuário já cadastrado", { theme: "dark" }));
  };

  const handleEditUser = (
    {
      username = user.username,
      plataform = user.plataform,
      img = user.img,
      description = user.description,
      password,
      email = user.email,
    },
    handleModal
  ) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));
    app
      .put(
        `/users/${user.id}`,
        { username, plataform, img, description, email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("@GamesHub user", JSON.stringify(response.data));
        toast.success("Informações de usuário alteradas com sucesso!", {
          theme: "dark",
        });
        handleModal();
      })
      .catch((_) =>
        toast.error("Ops, algo deu errado, revise as infromaçoes passadas", {
          theme: "dark",
        })
      );
  };

  const listUserPosts = (id = user.id) => {
    app
      .get(`/users/${id}?_embed=posts`)
      .then((response) => setUserPosts(response.data))
      .catch((err) => console.log(err));
  };

  const handlePost = (text, gameName, gameSlug) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));

    app.post(
      "/posts",
      {
        text,
        gameName,
        gameSlug,
        userId: user.id,
        likes: 0,
        usefullPost: 0,
        comments: [],
        img: user.img,
        username: user.username,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const handleLogOut = () => {
    localStorage.removeItem("@GamesHub Token");
    localStorage.removeItem("@GamesHub user");
    toast(`Até mais, ${user.username}! 👋`, { theme: "dark" });
    setUser(false);
    history.push("/");
  };

  const getUserPassword = () => {
    app
      .get(`https://games-hub-api.herokuapp.com/users/${user.id}`)
      .then((response) => setUserPassword(response.data.password));
  };

  const [userPassword, setUserPassword] = useState(getUserPassword());

  const handleGameLike = (game) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));

    const removeGameFromList = user.likedGames.filter(
      (element) => element.slug !== game.slug
    );

    const findGameInList = user.likedGames.some(
      (element) => element.slug === game.slug
    );

    setGameExist(findGameInList);

    app
      .put(
        `/users/${user.id}`,
        {
          ...user,
          likedGames: !findGameInList
            ? [...user.likedGames, game]
            : removeGameFromList,
          password: userPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        localStorage.setItem("@GamesHub user", JSON.stringify(response.data));
        setUser(JSON.parse(localStorage.getItem("@GamesHub user")));

        console.log(response.data);
        toast.success("Jogo Curtido :D", {
          theme: "dark",
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listPosts();
    listUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        userPosts,
        postsList,
        userList,
        listUserPosts,
        handleLogin,
        handleLogOut,
        handleRegister,
        handleEditUser,
        handlePost,
        handleGameLike,
        gameExist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
