import UserInfo from "../../Components/UserInfo";
import LikedGames from "../../Components/LikedGames";
import Header from "../../Components/Header";
// import RecentComents from "../../Components/RecentComents"

const Profile = () =>{
    return (
        <div>
            <Header/>
            <div>
                <UserInfo/>
                <LikedGames/>
            </div>
            {/* <RecentComents/> */}
        </div>
    )
}

export default Profile