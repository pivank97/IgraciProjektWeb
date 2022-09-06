import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DropdownMenu = ()=> {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Fabrique", path: "/Restaurants/Fabrique" },
      { name: "Rulla", path: "/Restaurants/Rulla" },
      { name: "Hokus Okus", path: "/Restaurants/HokusOkus" },
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div>
          <div className="dropdownbtn">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Restorani
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;