import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/characters", label: "Characters" },
  { to: "/planets", label: "Planets" },
  { to: "/starships", label: "Starships" },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-start flex-nowrap">
        <a className="navbar-brand" href="#">
          Star Wars Wiki
        </a>

        <div
          className="collapse d-flex flex-nowrap navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav flex-row gap-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link p-2 active" : "nav-link p-2"
                  }
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
