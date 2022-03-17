import UserInfo from "../../Components/UserInfo";
import LikedGames from "../../Components/LikedGames";
// import RecentComents from "../../Components/RecentComents"

const Profile = () =>{
    return (
        <body>
            <div>
                <UserInfo/>
                <LikedGames/>
            </div>
            {/* <RecentComents/> */}
        </body>
    )
}

export default Profile