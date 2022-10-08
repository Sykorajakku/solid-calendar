const Navbar = () => {
  return (
    <div style={{ flex: "0 1 auto" }}>
      <header
        style={{
          height: "70px",
          backgroundColor: "#9063CD",
          paddingTop: "5px",
          paddingBottom: "5px",
          margin: "5px 5px 0 5px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <div
          style={{
            minWidth: "1000px",
            display: "flex",
            paddingLeft: "100px",
          }}
        >
          <div style={{ fontSize: "30px", color: "#CBC3E3" }}>
            SOLID{" "}
            <span
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Calendar
            </span>
          </div>
        </div>
      </header>

      <div
        style={{
          height: "7px",
          backgroundColor: "#CBC3E3",
          margin: "0px 5px 0 5px",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      />
    </div>
  );
};

export default Navbar;
