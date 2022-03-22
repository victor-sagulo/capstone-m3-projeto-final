import app from "../../Services/api.js";
import { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import userImg from "../../images/userImg.svg";
import { type } from "@testing-library/user-event/dist/type";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@GamesHub user")) || false
  );
  const [userPosts, setUserPosts] = useState([]);

  const history = useHistory();

  const listPosts = (slug) => {
    app
      .get(`/comments/game/${slug}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (email, password) => {
    app
      .post("users/login", {
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
      .post(
        "users/register",
        {
          username,
          email,
          password,
          plataform,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
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
    const waintingToast = toast.loading("Atualizando o usuário...", {
      theme: "dark",
    });
    app
      .put(
        `/users/${user._id}`,
        { username, plataform, img, description, email, password },
        {
          headers: {
            "auth-token": `${token}`,
          },
        }
      )
      .then((response) => {
        app.get(`/users/${user._id}`).then((response) => {
          setUser(response.data);
          localStorage.setItem("@GamesHub user", JSON.stringify(response.data));
          toast.update(waintingToast, {
            render: "Informações de usuário alteradas com sucesso!",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          handleModal();
        });
      })
      .catch((_) =>
        toast.update(waintingToast, {
          render: "Verifique a sua senha e tente novamente",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        })
      );
  };

  const listUserPosts = (id = user._id) => {
    app
      .get(`/comments/user/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  const handlePost = (text, gameName, gameSlug, comments, setComments) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));
    app
      .post(
        "/comments",
        {
          text,
          gameName,
          gameSlug,
        },
        {
          headers: {
            "auth-token": `${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Comentário postado com sucesso!", { theme: "dark" });
        setComments([...comments, response.data]);
        document.getElementById("textAreaValue").value = "";
      })
      .catch((_) =>
        toast.error("Ops! Algo deu errado, tente novamente.", { theme: "dark" })
      );
  };

  const handleLogOut = () => {
    localStorage.removeItem("@GamesHub Token");
    localStorage.removeItem("@GamesHub user");
    toast(`Até mais, ${user.username}! 👋`, { theme: "dark" });
    setUser(false);
    history.push("/");
  };

  // const getUserPassword = () => {
  //   app
  //     .get(`https://games-hub-api.herokuapp.com/users/${user.id}`)
  //     .then((response) => setUserPassword(response.data.password));
  // };

  // const [userPassword, setUserPassword] = useState(getUserPassword());

  // const handleGameLike = (game) => {
  //   const token = JSON.parse(localStorage.getItem("@GamesHub Token"));

  //   const removeGameFromList = user.likedGames.filter(
  //     (element) => element.slug !== game.slug
  //   );

  //   const findGameInList = user.likedGames.some(
  //     (element) => element.slug === game.slug
  //   );

  //   app
  //     .put(
  //       `/users/${user.id}`,
  //       {
  //         ...user,
  //         likedGames: !findGameInList
  //           ? [...user.likedGames, game]
  //           : removeGameFromList,
  //         password: userPassword,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       localStorage.setItem("@GamesHub user", JSON.stringify(response.data));
  //       setUser(JSON.parse(localStorage.getItem("@GamesHub user")));

  //       console.log(response.data);
  //       toast.success("Jogo Curtido :D", {
  //         theme: "dark",
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <UserContext.Provider
      value={{
        user,
        userPosts,
        setUserPosts,
        listPosts,
        listUserPosts,
        handleLogin,
        handleLogOut,
        handleRegister,
        handleEditUser,
        handlePost,
        // handleGameLike,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
