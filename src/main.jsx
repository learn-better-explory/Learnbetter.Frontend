import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Menu({ przycisk_log_in }) {
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

          <button id="login_button" onClick={przycisk_log_in}>
            Log in
          </button>
        </ul>
      </div>
    </>
  );
}
function Formularz() {
  return (
    <>
      <div id="formularz">
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

// let [pokaz_formularz_logowania, ustaw_pokaz_formularz_logowania] =
//   useState(true);

// let pokaz_formularz_logowania = false;
// createRoot(document.getElementById("root")).render(
//   <>
//     <Menu></Menu>

//     {pokaz_formularz_logowania && (
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
  const [pokaz_formularz_logowania, ustaw_pokaz_formularz_logowania] =
    useState(true);
  // let pokaz_formularz_logowania = false;
  function przycisk_log_in() {
    ustaw_pokaz_formularz_logowania(!pokaz_formularz_logowania);
  }
  return (
    <>
      <Menu przycisk_log_in={przycisk_log_in}></Menu>

      {pokaz_formularz_logowania && (
        <>
          <div id="pola_formularza">
            <Formularz></Formularz>
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
