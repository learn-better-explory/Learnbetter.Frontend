import { Link } from "react-router-dom";

export default function Login() {
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
          <li>
            <Link to="/registration">Stwórz konto</Link>
          </li>
        </form>
      </div>
    </>
  );
}
