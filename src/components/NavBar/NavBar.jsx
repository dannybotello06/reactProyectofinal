import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

function NavBar({ title }) {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
       
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/dulces"
              >
                Dulces
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                to="/category/chicles"
              >
                Chicles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                to="category/chocolates"
              >
                Chocolates
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                to="category/galletasdulces"
              >
                Galletas Dulces
              </NavLink>
            </li>

           

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                to="category/galletassaladas"
              >
                Galletas Saladas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                to="category/pasteles"
              >
                Pasteles
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                to="category/pasabocas"
              >
                Pasabocas
              </NavLink>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <CardWidget />
          </form>
        </div>
      </div>
    </nav>

    


  );
}

export default NavBar;