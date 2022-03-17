import UserInfo from "../../Components/UserInfo";
import LikedGames from "../../Components/LikedGames";
// import RecentComents from "../../Components/RecentComents"

const Profile = () =>{
    return (
        <div>
            <div>
                <UserInfo/>
                <LikedGames/>
            </div>
            {/* <RecentComents/> */}
        </div>
    )
}

export default Profile