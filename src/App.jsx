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
import ShowTable from "./ShowTable";
import TableMenu from "./ShowTable";
import ShowTable from "./ShowTable";
import TableMenu from "./ShowTable";
import ConnectingDefinitions from "./Games/ConnectingDefinitions/ConnectingDefinitions";
import DefinitionGame from "./Games/DefinitionGame/DefinitionGame";
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
          <Route
            path="/game/:tableId/connecting"
            element={<ConnectingDefinitions />}
          ></Route>
          <Route
            path="/game/:tableId/definitionGame"
            element={<DefinitionGame />}
          ></Route>
          <Route path="/ShowTable/:tableId" element={<ShowTable />}></Route>
          <Route path="/GetTables" element={<GetTables />}></Route>
          <Route path="/AddTable" element={<AddTable />}></Route>
          <Route path="/fiszki/:idCokolwiek" element={<GoodGame />}></Route>
          <Route path="/ShowTable/:tableId" element={<TableMenu />}></Route>
          {/* <Route path="/fiszki/:idCokolwiek" element={<GoodGame />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
