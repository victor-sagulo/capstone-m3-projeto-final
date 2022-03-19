import UserInfo from "../../Components/UserInfo";
import LikedGames from "../../Components/LikedGames";
import Header from "../../Components/Header";
import { ContentWraper, DivProfileContainer } from "./style";
import RecentComents from "../../Components/RecentComents";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { useParams } from "react-router-dom";

const Profile = () => {
const {listUserPosts} = useContext(UserContext)
const {id} = useParams()
  const iniatiteProfile = () => listUserPosts(id)
  iniatiteProfile()

  return (
    <>
      <Header />
      <DivProfileContainer>
        <ContentWraper>
          <UserInfo />
          <LikedGames />
        </ContentWraper>
        <RecentComents />
      </DivProfileContainer>
    </>
  );
};

export default Profile;
