import { useSession } from "@inrupt/solid-ui-react";

const LoginForm = () => {
  const { session } = useSession();

  const login = () => {
    session.login({
      oidcIssuer: "https://inrupt.net",
      redirectUrl: "https://solid-calendar-taupe.vercel.app",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        flexDirection: "row-reverse",
      }}
    >
      <div
        style={{
          height: "25px",
          backgroundColor: "#9063CD",
          color: "white",
          margin: "5px",
          paddingLeft: "5px",
          paddingRight: "5px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={login}
      >
        Login
      </div>
    </div>
  );
};

export default LoginForm;
