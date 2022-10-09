import { useSession } from "@inrupt/solid-ui-react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const Authentication = (props: { children: ReactNode }) => {
  const router = useRouter();
  const { session, sessionRequestInProgress } = useSession();

  if (sessionRequestInProgress) {
    return <div>Loading...</div>;
  }

  if (
    !session.info.isLoggedIn &&
    !(router.pathname.includes("login") || router.asPath.includes("code")) &&
    !sessionRequestInProgress
  ) {
    router.replace({
      pathname: "/login",
    });
    return <div>Loading...</div>;
  }

  return <>{props.children}</>;
};

export default Authentication;
