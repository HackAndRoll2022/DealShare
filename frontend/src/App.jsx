import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Deals from "./pages/Deals/Deals";
import Footer from "./components/footer/Footer";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element = {<Profile />}></Route>
            <Route path="/deals" element={<Deals />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/signup" element={ <Register />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
