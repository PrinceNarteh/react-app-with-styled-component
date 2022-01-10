import { InfoSection, Pricing } from "../../components";
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
      <Pricing />
      <InfoSection {...homeObjectFour} />
    </>
  );
};

export default Home;
