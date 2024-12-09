import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container">
        <form action="" method="post">
          <label htmlFor="nick">login</label>
          <br></br>
          <input name="nick" type="text" />
          <br></br>
          <label htmlFor="hasło">hasło</label>
          <br></br>
          <input name="hasło" type="password" />
          <br></br>
          <input type="submit" value='Zaloguj się'></input>

          <br></br>
          <Link to="/registration">Stwórz konto</Link>
        </form>
      </div>
    </>
  );
}
