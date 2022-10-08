import type { NextPage } from "next";
import LoginForm from "../components/login/login";

const Login: NextPage = () => {
  return (
    <div
      style={{
        flex: "1 1 auto",
        display: "grid",
        gridTemplateColumns: "20% 60% 20%",
        gridTemplateRows:
          "50px fit-content(100px) minMax(10px, 150px) auto auto 50px",
      }}
    >
      <div
        style={{
          gridColumnStart: 2,
          gridColumnEnd: 2,
          gridRowStart: 2,
          gridRowEnd: 2,
          backgroundColor: "#f7f9fb",
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 0px 5px 5px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            color: "#9063CD",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          Where is your Pod hosted?
        </div>

        <LoginForm />
      </div>

      <div
        style={{
          gridColumnStart: 2,
          gridColumnEnd: 2,
          gridRowStart: 4,
          gridRowEnd: 4,
          backgroundColor: "#f7f9fb",
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 0px 10px 5px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            color: "#9063CD",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          How to start using SOLID Calendar?
        </div>
      </div>
    </div>
  );
};

export default Login;
