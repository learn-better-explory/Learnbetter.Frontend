

function Login() {
    return (
      <>
        <div id="login">
          <form action="" method="post">
            <label for="login">login</label>
            <input name="login" type="text" />
            <br/>
            <label for="hasło">hasło</label>
            <input name="hasło" type="text" />
            <br></br>
            <input type="submit"></input>
          </form>
        </div>
      </>
    );
  }
export default Login;