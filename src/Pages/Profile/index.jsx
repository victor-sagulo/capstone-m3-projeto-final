import UserInfo from "../../Components/UserInfo";
import LikedGames from "../../Components/LikedGames";
import Header from "../../Components/Header";
import { ContentWraper, DivProfileContainer } from "./style";
import RecentComents from "../../Components/RecentComents";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { userPosts, listUserPosts } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    listUserPosts(id);
  }, []);

  return (
    <>
      <Header />
      <DivProfileContainer>
        <ContentWraper>
          <UserInfo />
          <LikedGames />
        </ContentWraper>
        <RecentComents userPosts={userPosts}/>
      </DivProfileContainer>
    </>
  );
};

export default Profile;
