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
        console.log(res);
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
        `/users/${user._id}`,
        { username, plataform, img, description, email, password },
        {
          headers: {
            "auth-token": `${token}`,
          },
        }
      )
      .then((response) => {
        app.get(`/users/${user._id}`);
      })
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

  const listUserPosts = (id = user._id) => {
    app
      .get(`/comments/user/${id}`)
      .then((response) => {return (response.data)})
      .catch((err) => console.log(err));
  };

  const handlePost = (text, gameName, gameSlug) => {
    app.post("/comments", {
      text,
      gameName,
      gameSlug,
      userId: user._id,
    });
  };

  const handleLogOut = () => {
    localStorage.removeItem("@GamesHub Token");
    localStorage.removeItem("@GamesHub user");
    toast(`Até mais, ${user.username}! 👋`, { theme: "dark" });
    setUser(false);
    history.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userPosts,
        listPosts,
        listUserPosts,
        handleLogin,
        handleLogOut,
        handleRegister,
        handleEditUser,
        handlePost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
