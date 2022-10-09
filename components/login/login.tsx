import { useSession } from "@inrupt/solid-ui-react";

const LoginForm = () => {
  const { session } = useSession();

  const login = () => {
    session.login({
      oidcIssuer: "https://inrupt.net",
      redirectUrl: window.location.origin,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        flexDirection: "row",
      }}
    >
      <div style={{ margin: "5px 5px 5px 5px" }}>
        Dropdown will be here. Login button redirrects to https://inrupt.net
      </div>

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
          marginLeft: "auto",
          marginRight: "5px",
          marginTop: "5px",
        }}
        onClick={login}
      >
        Login
      </div>
    </div>
  );
};

export default LoginForm;
