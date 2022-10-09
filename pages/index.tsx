import { useSession } from "@inrupt/solid-ui-react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { session } = useSession();
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      {session.info.isLoggedIn && session.info.webId}
    </div>
  );
};

export default Home;
