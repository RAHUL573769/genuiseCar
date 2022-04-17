import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Shared/Footer";

import Home from "./Pages/Home/Homes/Home";
import Details from "./Pages/Servicedetail/Details";
import Not from "./Pages/NotFound/Not";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Checkout from "./Pages/Checkout";
import RequiredAuth from "./Pages/RequiredAuth/RequiredAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Firebase/Firebaseinit";
import { signOut } from "firebase/auth";

function App() {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        <Route path="/service/:serviceId" element={<Details></Details>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route>

        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/register">Register</Link>
        )} */}

        <Route path="/register">Register</Route>
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <Checkout></Checkout>
            </RequiredAuth>
          }
        ></Route>
        <Route path="*" element={<Not></Not>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
