import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./components/login/Login";
import GhostMarketplace from "./pages/NFT/GhostMarketplace";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signup/SignUp";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/nft" element={<GhostMarketplace />} />
            {/* <Route
            path="/nft"
            component={({ history }) => <Login history={history} />}
          /> */}
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
