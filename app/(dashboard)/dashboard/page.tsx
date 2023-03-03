import SignOut from "@/app/(dashboard)/_components/sign-out";
import { unstable_getServerSession } from "next-auth";

const Home = async () => {
  const session = await unstable_getServerSession();

  return (
    <>
      <SignOut /> <span>{session?.user?.email}</span>
    </>
  );
};

export default Home;
