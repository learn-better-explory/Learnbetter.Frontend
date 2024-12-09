// import { Tables } from "./tables";
// import { Game1 } from "./game1";
// import { Game2 } from "./game2";
// import { Account } from "./account";

// export const tabs = [
//   { id: "tables", label: "tabele", component: <Tables></Tables> },
//   { id: "game1", label: "gra1", component: <Game1></Game1> },
//   { id: "game2", label: "gr2", component: <Game2></Game2> },
//   { id: "account", label: "konto", component: <Account></Account> },
// ];

// export const Menu = ({ buttonLogIn, activeTab, setActiveTab }) => {
//   return (
//     <>
//       <div id="menu">
//         <ul>
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               style={{ color: activeTab === tab.id ? "red" : "blue" }}
//             >
//               {tab.label}
//             </button>
//           ))}

//           <button id="loginButton" type="button" onClick={buttonLogIn}>
//             Log in
//           </button>
//         </ul>
//       </div>

//       <div style={{ fontSize: "100px" }}>
//         {tabs.find((tab) => tab.id === activeTab)?.component}
//       </div>
//     </>
//   );
// };
// export const Registration = ({ functionShowCreateAccount }) => {
//   return (
//     <>
//       <div id="registration">
//         <form action="" method="post">
//           <button onClick={functionShowCreateAccount}>wróć</button>
//           <label for="email">email</label>
//           <input name="email" type="text" />
//           <label for="nick">nick</label>
//           <input name="nick" type="text" />
//           <label for="nazwisko">hasło</label>
//           <input name="password" type="password" />
//           <label for="repeatPassword">hasło</label>
//           <input name="repeatPassword" type="password" />
//           <button type="submit">Stwórz</button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default function Login() {
//   return (
//     <>
//       <div id="login">
//         <form action="" method="post">
//           <label for="nick">nick</label>
//           <input name="nick" type="text" />
//           <label for="hasło">hasło</label>
//           <input name="hasło" type="text" />
//           <button type="submit">Zaloguj</button>

//           <label for="createAccount">Nie masz konta?</label>
//           <button type="button">Stwórz konto</button>
//         </form>
//       </div>
//     </>
//   );
// }
