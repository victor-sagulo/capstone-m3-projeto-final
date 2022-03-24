import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";
import Modals from "../../Components/Modal";
import { motion } from "framer-motion";
import { Container, Background } from "./style";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <Background />
        <div className="home--top">
          <Header />
          <motion.div
            initial={{ marginLeft: "-100px" }}
            animate={{ marginLeft: "0px" }}
            transition={{ duration: 0.7 }}
          >
            <Modals />
          </motion.div>
        </div>
        <div className="home--bottom">
          <h2 className="main--title">Mais Populares</h2>
          <GamesList type="home" />
        </div>
      </Container>
    </motion.div>
  );
};

export default HomePage;
