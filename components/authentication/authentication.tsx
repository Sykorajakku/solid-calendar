import { useSession } from "@inrupt/solid-ui-react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const isBrowser = () => typeof window !== "undefined";

const Authentication = (props: { children: ReactNode }) => {
  const router = useRouter();
  const { session } = useSession();

  if (
    isBrowser() &&
    !session.info.isLoggedIn &&
    !router.pathname.includes("login")
  ) {
    router.push("/login");
  }
  return <>{props.children}</>;
};

export default Authentication;
