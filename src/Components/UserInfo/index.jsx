import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Providers/user";
import { useState } from "react";
import {BsFillPencilFill} from "react-icons/bs"
import UserEdit from "../UserEdit";
import Buttons from "../Buttons";

const UserInfo = ()=>{
    const [modal,setModal] = useState(true)
    const { user } = useContext(UserContext);
    const history = useHistory()

    if (!user){history.push("/login")}

    const handleModal = () => {
        setModal(!modal)
        console.log(modal)
    }

    return(
        <div className="user-info">
            <figure>
                <img src={user.img}/>
            </figure>
            <div>
                <div>
                    <h2>{user.username}</h2>
                    <h3>{user.plataform}</h3>
                </div>
                <p>{user.description}</p>
            </div>
            <Buttons onClick={handleModal}><BsFillPencilFill/></Buttons>

            {!modal&&<UserEdit handleModal={handleModal}/>}
        </div>)
}

export default UserInfo