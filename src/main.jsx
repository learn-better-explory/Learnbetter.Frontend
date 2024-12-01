import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Menu({ buttonLogIn }) {
  return (
    <>
      <div id="menu">
        <ul>
          <li>
            <a href="window.html">new_window</a>
          </li>
          <li>
            <a href="window.html">new_window</a>
          </li>
          <li>
            <a href="window.html">new_window</a>
          </li>
          <li>
            <a href="window.html">new_window</a>
          </li>
          <li>
            <a href="window.html">new_window</a>
          </li>
          <li>
            <a href="window.html">new_window</a>
          </li>
          <li>
            <a href="new_window.html">new_new_window</a>
          </li>

          <button id="loginButton" onClick={buttonLogIn}>
            Log in
          </button>
        </ul>
      </div>
    </>
  );
}
function Registration() {
  return (
    <>
      <div id="registration">
        <form action="" method="post">
          <label for="email">email</label>
          <input name="email" type="text" />
          <label for="imie">imie</label>
          <input name="imie" type="text" />
          <label for="nazwisko">nazwisko</label>
          <input name="nazwisko" type="text" />
        </form>
      </div>
    </>
  );
}

function Login() {
  return (
    <>
      <div id="login">
        <form action="" method="post">
          <label for="login">login</label>
          <input name="login" type="text" />
          <label for="hasło">hasło</label>
          <input name="hasło" type="text" />
        </form>
      </div>
    </>
  );
}

// let [showFormToLogIn, setShowFormToLogIn] =
//   useState(true);

// let showFormToLogIn = false;
// createRoot(document.getElementById("root")).render(
//   <>
//     <Menu></Menu>

//     {showFormToLogIn && (
//       <>
//         <Formularz></Formularz>
//         <Login></Login >
//       </>
//     )}

//     <div>
//       <p>hello world</p>
//     </div>
//   </>

// );
function App() {
  const [showFormToLogIn, setShowFormToLogIn] = useState(true);
  // let showFormToLogIn = false;
  function buttonLogIn() {
    setShowFormToLogIn(!showFormToLogIn);
  }
  return (
    <>
      <Menu buttonLogIn={buttonLogIn}></Menu>

      {showFormToLogIn && (
        <>
          <div id="formField">
            <Registration></Registration>
            <Login></Login>
          </div>
        </>
      )}

      <div>
        <p>hello world</p>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
