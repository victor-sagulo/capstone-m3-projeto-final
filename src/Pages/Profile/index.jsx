import UserInfo from "../../Components/UserInfo";
import LikedGames from "../../Components/LikedGames";
import Header from "../../Components/Header";
import { ContentWraper, DivProfileContainer } from "./style";
import RecentComents from "../../Components/RecentComents";

const Profile = () => {
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
