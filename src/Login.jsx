import { Link } from "react-router-dom";

export default function Login() {
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
       // Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTczNDIwNDE1NX0.3g09QeoyqwrPIyb_xizf8l4_cqYiRckmNw_MzL4mqdxepx5wPbjWcY0DWzjKAdlC'
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();

    if (!response.ok) {
      console.log(response);
      if (response.status == "403") {
        console.log("lepiej nie mówić");
      }
      console.log(result)
      return;
    }
    
    // if logged succeed
    console.log(result);

    // Ustawiamy token i ID w localStorage
    localStorage.setItem("token", result.token);
    localStorage.setItem("id", result.id);

     window.location.href = 'http://localhost:5173/ShowContext'
  };

  function getUsersData(elementName) {
    return document.getElementsByName(elementName)[0].value;
  }

  return (
    <>
      <div className="container">
        <form action="" method="post">
          <label htmlFor="username">login</label>
          <br></br>
          <input name="username" type="text" />
          <br></br>
          <label htmlFor="password">hasło</label>
          <br></br>
          <input name="password" type="password" />
          <br></br>
          <button
            type="button"
            onClick={() => {
              handleLoginButton();
            }}
          >
            Zaloguj się
          </button>

          <br></br>
          <Link to="/registration">Stwórz konto</Link>
        </form>
      </div>
    </>
  );
}
