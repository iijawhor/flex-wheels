import React, { useEffect, useRef, useState } from "react";
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
  let headerHeight;
  useEffect(() => {
    const header = document.querySelector(".headerComponent");
    headerHeight = header.offsetHeight;
  }, []);
  const [scrolling, setScrolling] = useState(false);
  const lastScrollPosition = useRef(0);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (
      currentScrollPosition > headerHeight &&
      currentScrollPosition > lastScrollPosition.current
    ) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

    lastScrollPosition.current = currentScrollPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`headerComponent ${scrolling ? "scrolled" : ""}`}>
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
                <li className="navbarItem" key={item.name}>
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
