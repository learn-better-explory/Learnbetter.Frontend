import { useState } from "react";
import { Link } from "react-router-dom";
// import { Login, Registration } from "./form";
import { AboutUs } from "./aboutUs";

export default function App() {
  const [showFormToLogIn, setShowFormToLogIn] = useState(true);
  const [showCreateAccount, setshowCreateAccount] = useState(false);
  // const [activeTab, setActiveTab] = useState(tabs[0].id);
  // let showFormToLogIn = false;
  function buttonLogIn() {
    setShowFormToLogIn(!showFormToLogIn);
  }
  function functionShowCreateAccount() {
    setshowCreateAccount(!showCreateAccount);
  }

  return (
    <div>
      <li>
        <Link to="/login">Strona Główna</Link>
      </li>

      {/* <>
        {showFormToLogIn && (
          <Login functionShowCreateAccount={functionShowCreateAccount}></Login>
        )}
      </>
      {showCreateAccount && (
        <>
          <Registration
            functionShowCreateAccount={functionShowCreateAccount}
          ></Registration>
        </>
      )} */}
      <AboutUs></AboutUs>
    </div>
  );
}
