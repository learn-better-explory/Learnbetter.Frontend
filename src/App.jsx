import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AboutUs } from "./aboutUs";
import Login from "./Login";
import Header from "./Header";
import Registration from "./Registration";
import LogContextData from "./ShowContext";
import GetTables from "./tables";
import GetAllValuesFromTables from "./GetAllTables";
import AddTable from "./addTable";
import GoodGame from "./Games/ConnectingDefinitions/fiszki.jsx";
// import { LoginData } from ".context";

export default function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/showContext" element={<LogContextData />}></Route>
          <Route path="/GetTables" element={<GetTables />}></Route>
          <Route path="/AddTable" element={<AddTable />}></Route>
          <Route path="/fiszki/:idCokolwiek" element={<GoodGame />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
