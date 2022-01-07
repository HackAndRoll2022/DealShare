import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Deals from "./pages/Deals/Deals";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signup/SignUp";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element = {<Profile />}></Route>
            <Route path="/deals" element={<Deals />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/signup" element={ <SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};

export default App;
