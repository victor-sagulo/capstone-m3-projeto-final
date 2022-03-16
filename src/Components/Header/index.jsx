import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Providers/user"
import {Desktop,Mobile,DefaultNav,LoggedNav} from "./style"
import g4HUB from "../../images/g4HUB.svg"
import userImg from "../../images/userImg.svg"
import gamesHubLogo from "../../images/gamesHubLogo.svg"
import {FaBars,FaAngleDown,FaAngleUp} from "react-icons/fa"
import {Link} from "react-router-dom"
import InputHeader from "../InputHeader"

const Header = () => {

    const [width,setWidth] = useState("")

    const {user} = useContext(UserContext)

    window.onresize = window.onload = () => {
        setWidth(window.innerWidth)
    }

    const [userModal,setUserModal] = useState(false)

    const handleModal = () =>{
        setUserModal(!userModal)
    }

    return(
    <>
        {width>768 ? <Desktop>
            <figure>
                <img src={gamesHubLogo} alt="GamesHub logo"/>
                <figcaption>GamesHub logo</figcaption>
            </figure>
            {user === false?
            <>
                <DefaultNav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li></li>
                    <li></li>
                    <li></li> 
                    </ul>
                    <InputHeader/>
                </DefaultNav>
                <div>
                    <figure>
                        <img src={userImg} alt="user image" />
                        <figcaption>user image</figcaption>
                    </figure>
                </div>
            </>
            :
            <>
                <LoggedNav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/games">Games</Link></li>
                    </ul>
                    <InputHeader/>
                </LoggedNav> 
                <div>
                    <figure>
                        <img src={userImg} alt="user image" />
                        <figcaption>user image</figcaption>
                    </figure>
                    <h3>{user.username}</h3>
                    {userModal?<FaAngleUp/> : <FaAngleDown/>}
                </div>
                {userModal && <div className="modal--user"></div>}
            </>
            }
        </Desktop>
         : 
        <Mobile>
            <figure>
                <img src={g4HUB} alt="GamesHub logo"/>
                <figcaption>GamesHub logo</figcaption>
            </figure>
            <div>
                <figure>
                    <img src={userImg} alt="user image" />
                    <figcaption>User image</figcaption>
                </figure>
                <FaBars/>
            </div>
        </Mobile>}
    </>
    )
}

export default Header