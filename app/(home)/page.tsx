import { Carousel } from "@/app/(home)/_components/Carousel";

import { Stats } from "@/app/(home)/_components/Stats";
import { CtaSections } from "./_components/CtaSections";
import { GradList } from "./_components/GradLists";

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
