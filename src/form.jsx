export const Menu = ({ buttonLogIn }) => {
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

          <button id="loginButton" type="button" onClick={buttonLogIn}>
            Log in
          </button>
        </ul>
      </div>
    </>
  );
};
export const Registration = () => {
  return (
    <>
      <div id="registration">
        <form action="" method="post">
          <label for="email">email</label>
          <input name="email" type="text" />
          <label for="nick">nick</label>
          <input name="nick" type="text" />
          <label for="nazwisko">hasło</label>
          <input name="password" type="password" />
          <label for="repeatPassword">hasło</label>
          <input name="repeatPassword" type="password" />
          <button type="submit">Stwórz</button>
        </form>
      </div>
    </>
  );
};
export const Login = ({ functionShowCreateAccount }) => {
  return (
    <>
      <div id="login">
        <form action="" method="post">
          <label for="nick">nick</label>
          <input name="nick" type="text" />
          <label for="hasło">hasło</label>
          <input name="hasło" type="text" />
          <button type="submit">Zaloguj</button>

          <label for="createAccount">Nie masz konta?</label>
          <button type="button" onClick={functionShowCreateAccount}>
            Stwórz konto
          </button>
        </form>
      </div>
    </>
  );
};
