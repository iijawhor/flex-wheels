import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/appStore";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SearchResults from "./components/SearchResults/SearchResults";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }]
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <LoginPage />
      </AuthLayout>
    )
  },
  {
    path: "/signup",
    element: (
      <AuthLayout authentication={false}>
        <SignupPage />
      </AuthLayout>
    )
  },
  {
    path: "/search-results",
    element: (
      <AuthLayout authentication={true}>
        <SearchResultPage />
      </AuthLayout>
    )
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
