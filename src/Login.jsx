import { useState } from "react";
import { useGlobalState } from "./context";
import { Link } from "react-router-dom";

export default function Login() {
  let [errorMessage, setMessage] = useState();
  const { token } = useGlobalState();
  console.log(token);

  if (token != "" && token != "null" && token != null) {
    window.location.href = "http://localhost:5173/GetTables";
  }

  const handleLoginButton = async () => {
    const data = {
      username: getUsersData("username"),
      password: getUsersData("password"),
    };

    const response = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      localStorage.removeItem("token");
      localStorage.removeItem("id");

      console.log(response);
      if (response.status == "403") {
        setMessage("Złe hasło");
      }
      if (response.status == "400") {
        setMessage("Zły nick");
      }
      console.log(result);
      return;
    }

    // if logged succeed
    console.log(result);

    // Ustawiamy token i ID w localStorage
    if (response.ok) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("id", result.id);
    }

    window.location.href = "http://localhost:5173/GetTables";
  };

  function getUsersData(elementName) {
    return document.getElementsByName(elementName)[0].value;
  }

  return (
    <>
      <div className="container">
        <p className="header-text">Logowanie</p>
        <form action="" method="post">
          <label htmlFor="username">Nazwa użytkownika</label>
          <input name="username" type="text" />
          <p className="error-message">{errorMessage}</p>
          <label htmlFor="password">Hasło</label>
          <input name="password" type="password" />
          <p className="error-message">{errorMessage}</p>
          <button
            className="form-button"
            type="button"
            onClick={() => {
              handleLoginButton();
            }}
          >
            Zaloguj się
          </button>

          <br></br>
          <p className="login-form">
            {" "}
            <Link to="/registration"> Nie masz konta? Stwórz konto</Link>
          </p>
        </form>
      </div>
    </>
  );
}
