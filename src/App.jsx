import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AboutUs } from "./aboutUs";
import Login from "./Login";
import Header from "./Header";
import Registration from './Registration'

export default function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter >
        <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/registration' element={<Registration/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
