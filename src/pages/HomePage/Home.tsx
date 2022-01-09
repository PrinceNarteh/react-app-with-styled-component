import { InfoSection } from "../../components";
import { homeObjectOne } from "./HomeData";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
    </>
  );
};

export default Home;
