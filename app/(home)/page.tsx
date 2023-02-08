import { Carousel } from "@/components/Carousel";
import { CtaSections } from "@/components/CtaSections";
import { GradList } from "@/components/GradLists";
import { Stats } from "@/components/Stats";

const Home = () => {
  return (
    <main>
      <Carousel />
      <CtaSections />
      <Stats />
      <GradList />
    </main>
  );
};

export default Home;
