import React from "react";
import "./HeaderComponent.css";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function HeaderComponent() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navbarItems = [
    {
      name: "Become a Driver Partner",
      active: authStatus,
      slug: "/driver-partner"
    },
    {
      name: "FAQ",
      active: authStatus,
      slug: "/faq"
    },
    {
      name: "Account",
      active: authStatus,
      slug: "/account"
    },
    {
      name: "Referrals",
      active: authStatus,
      slug: "/referrals"
    },
    {
      name: "My trips",
      active: authStatus,
      slug: "/my-trips"
    },
    {
      name: "Download App",
      active: !authStatus,
      slug: "/download-app"
    },
    {
      name: "Sign Up",
      active: !authStatus,
      slug: "/signup"
    },
    {
      name: "Login",
      active: !authStatus,
      slug: "/login"
    }
  ];
  return (
    <header className="headerComponent">
      <Container className="headerContainer">
        <div className="headerLogoContainer">
          <Link to="/">
            <Logo className="headerLogo" />
          </Link>
        </div>
        <div className="headerItemContainer">
          <ul className="headerItems">
            {navbarItems.map((item) =>
              item.active ? (
                <li className="navbarItem">
                  <button
                    onClick={() => navigate(item.slug)}
                    className="headerItemButton"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && <LogoutButton />}
          </ul>
        </div>
      </Container>
    </header>
  );
}

export default HeaderComponent;
