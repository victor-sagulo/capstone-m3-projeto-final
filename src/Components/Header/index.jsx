import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/user";
import { Desktop, Mobile, DefaultNav, LoggedNav } from "./style";
import g4HUB from "../../images/g4HUB.svg";
import userImg from "../../images/userImg.svg";
import gamesHubLogo from "../../images/gamesHubLogo.svg";
import { FaBars, FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa";
import { BiLogOut, BiLogInCircle } from "react-icons/bi";
import { RiFolderUserFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { MdAccountBox } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import InputHeader from "../InputHeader";

const Header = () => {
  const [width, setWidth] = useState("");
  const history = useHistory();
  const { user, handleLogOut } = useContext(UserContext);

  const username = user.username
    ? user.username.split(" ").length > 1
      ? user.username.split(" ")[0].length > 10
        ? user.username.split(" ")[0].slice(0, 7) + "..."
        : user.username.split(" ")[0]
      : user.username.slice(0, 7) + "..."
    : "";

  window.onresize = window.onload = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [userModal, setUserModal] = useState(false);

  const [mobileModal, setMobileModal] = useState(false);

  const handleModal = () => {
    setUserModal(!userModal);
  };

  const handleMobileModal = () => {
    setMobileModal(!mobileModal);
  };

  return (
    <>
      {width > 768 ? (
        <Desktop>
          <figure>
            <img src={gamesHubLogo} alt="GamesHub logo" />
            <figcaption>GamesHub logo</figcaption>
          </figure>
          {user === false ? (
            <div className="container">
              <DefaultNav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/games">Games</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </ul>
              </DefaultNav>
              <div className="infos">
                <InputHeader />
                <figure>
                  <img src={userImg} alt="user figure" className="user--img" />
                  <figcaption>user image</figcaption>
                </figure>
              </div>
            </div>
          ) : (
            <div className="container">
              <LoggedNav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/games">Games</Link>
                  </li>
                </ul>
              </LoggedNav>
              <div className="logged-infos">
                <InputHeader />
                <figure>
                  <img
                    src={user ? user.img : userImg}
                    alt="user figure"
                    className="user--img"
                  />
                  <figcaption>user image</figcaption>
                </figure>
                <h3>{username}</h3>
                {userModal ? (
                  <FaAngleUp
                    className="icon"
                    size={"20px"}
                    onClick={handleModal}
                  />
                ) : (
                  <FaAngleDown
                    className="icon"
                    size={"20px"}
                    onClick={handleModal}
                  />
                )}
              </div>
              {userModal && (
                <div className="modal--user">
                  <div onClick={() => history.push("/profile")}>
                    <h4>Meu Perfil</h4>
                    <Link to={`/profile/${user.id}`}>
                      <RiFolderUserFill size={"20px"} />
                    </Link>
                  </div>
                  <div onClick={handleLogOut}>
                    <h4>Log out</h4> <BiLogOut size={"20px"} />
                  </div>
                </div>
              )}
            </div>
          )}
        </Desktop>
      ) : (
        <Mobile>
          <figure>
            <img src={g4HUB} alt="GamesHub logo" />
            <figcaption>GamesHub logo</figcaption>
          </figure>
          <div className="infos">
            <figure>
              <img
                src={user ? user.img : userImg}
                alt="user figure"
                className="user--img"
              />
              <figcaption>User image</figcaption>
            </figure>
            <FaBars
              className="hamburger"
              size={"25px"}
              onClick={handleMobileModal}
            />
          </div>
          {mobileModal && (
            <div className="mobile--modal">
              <nav>
                {user === false ? (
                  <ul>
                    <li>
                      <InputHeader handleMobileModal={handleMobileModal} />
                    </li>
                    <li>
                      <AiFillHome size={"25px"} className="nav--icon" />
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <CgGames size={"25px"} className="nav--icon" />
                      <Link to="/games">Games</Link>
                    </li>
                    <li>
                      <BiLogInCircle size={"25px"} className="nav--icon" />
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <MdAccountBox size={"25px"} className="nav--icon" />
                      <Link to="/signup">Signup</Link>
                    </li>
                  </ul>
                ) : (
                  <>
                    <div className="infos--mobile">
                      <figure>
                        <img
                          src={user ? user.img : userImg}
                          alt="user figure"
                          className="user--img"
                        />
                        <figcaption>user image</figcaption>
                      </figure>
                      <h3>{username}</h3>
                    </div>
                    <ul>
                      <li>
                        <InputHeader handleMobileModal={handleMobileModal} />
                      </li>
                      <li>
                        <AiFillHome size={"25px"} className="nav--icon" />
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <CgGames size={"25px"} className="nav--icon" />
                        <Link to="/games">Games</Link>
                      </li>
                      <li>
                        <RiFolderUserFill size={"25px"} className="nav--icon" />
                        <Link to="/profile">Meu Perfil</Link>
                      </li>
                      <li>
                        <BiLogOut size={"25px"} className="nav--icon" />
                        <button
                          onClick={() => {
                            handleMobileModal();
                            handleLogOut();
                          }}
                        >
                          Log out
                        </button>
                      </li>
                    </ul>
                  </>
                )}
                <button onClick={handleMobileModal} className="close--btn">
                  <VscChromeClose size={"40px"} className="close--icon" />
                </button>
              </nav>
            </div>
          )}
        </Mobile>
      )}
    </>
  );
};

export default Header;
