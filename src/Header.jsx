import { useGlobalState } from "./context";
import { Link } from "react-router-dom";

function LogOutButton() {
  let { token, setToken, id, setId } = useGlobalState();

  console.log(token == null);
  console.log(token == "");

  if (token != null && token != "null" && token != "") {
    return (
      <button
        className="headerButton"
        style={{
          marginLeft: "10px",
          borderRadius: "5px",
          padding: "3px",
          fontWeight: "bold",
          fontSize: "15px",
        }}
        onClick={() => {
          setToken(null);
          setId(null);
          window.location.href = "http://localhost:5173/";
        }}
      >
        Wyloguj się
      </button>
    );
  }
  return <p></p>;
}
function Header() {
  return (
    <div id="header">
      <Link to="/GetTables" style={{ color: "white", textDecoration: "none" }}>
        <span className="headerSpan">Learn Better!</span>
      </Link>

      <LogOutButton />
    </div>
  );
}

export default Header;
