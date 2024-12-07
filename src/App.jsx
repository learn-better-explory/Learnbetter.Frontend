import { useState } from "react";
import { Menu, Login, Registration } from "./form";

export default function App() {
  const [showFormToLogIn, setShowFormToLogIn] = useState(false);
  const [showCreateAccount, setshowCreateAccount] = useState(false);

  // let showFormToLogIn = false;
  function buttonLogIn() {
    setShowFormToLogIn(!showFormToLogIn);
    setshowCreateAccount(false);
  }
  function functionShowCreateAccount() {
    setshowCreateAccount(!showCreateAccount);
  }

  return (
    <>
      <Menu buttonLogIn={buttonLogIn}></Menu>

      {showFormToLogIn && (
        <div id="formField">
          <Login functionShowCreateAccount={functionShowCreateAccount}></Login>
        </div>
      )}
      {showCreateAccount && (
        <div id="formField">
          <Registration></Registration>
        </div>
      )}
    </>
  );
}
