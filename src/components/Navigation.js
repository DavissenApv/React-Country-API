import React from "react";
// en react a = navlink     react router dom= bibliotheque
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          {/* class que si active */}
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li> A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
