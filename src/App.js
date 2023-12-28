import "./App.css";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useEffect, useState } from "react";
import authService from "./firebase/firebaseAuthentication";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="App">
      <div className="">
        <HeaderComponent />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  ) : null;
}

export default App;
