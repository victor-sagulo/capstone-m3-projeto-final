import UserInfo from "../../Components/UserInfo";
import LikedGames from "../../Components/LikedGames";
import Header from "../../Components/Header";
import { ContentWraper, DivProfileContainer } from "./style";
import RecentComents from "../../Components/RecentComents";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import app from "../../Services/api";

const Profile = () => {
  const { userPosts, setUserPosts } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    app
      .get(`/comments/user/${id}`)
      .then((response) => {
        setUserPosts(response.data.comments);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <DivProfileContainer>
        <ContentWraper>
          <UserInfo id={id} />
          <LikedGames />
        </ContentWraper>
        <RecentComents userPosts={userPosts} />
      </DivProfileContainer>
    </>
  );
};

export default Profile;
