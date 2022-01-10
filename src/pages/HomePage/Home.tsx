import { InfoSection } from "../../components";
import {
  homeObjectFour,
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
} from "./HomeData";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <InfoSection {...homeObjectFour} />
    </>
  );
};

export default Home;
