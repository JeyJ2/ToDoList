import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
  const [article, setArticle] = useState({
    titre: "Page Article 🛍️",
    id: 1,
  });

  return (
    <>
      <header style={headerStyle}>
        <h1 style={logoStyle}>Header</h1>
        <nav>
          <ul style={navStyle}>
            <li>
              <Link to="doList" style={linkStyle}>
                To Do List
              </Link>
            </li>
            <li>
              <Link to="counter" style={linkStyle}>
                Counter
              </Link>
            </li>
            <li>
              <Link to="formulaire" style={linkStyle}>
                Formulaire
              </Link>
            </li>
            <li>
              <Link to="counter2" style={linkStyle}>
                Counter2
              </Link>
            </li>
            <li>
              <Link to="cycle" style={linkStyle}>
                Cycle
              </Link>
            </li>
            <li>
              <Link to="classparent" style={linkStyle}>
                ClassParent
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section style={sectionStyle}>
        <Outlet />
      </section>
    </>
  );
}

const sectionStyle={
  padding: "20px",
  margin : "auto",
  textAlign: "center",
  border : "1px solid black",
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const logoStyle = {
  fontSize: "24px",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  padding: "0",
};

const linkStyle = {
  color: "#fff",
  margin: "0 10px",
  textDecoration: "none",
};

export default Header;