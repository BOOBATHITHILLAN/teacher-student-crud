import React from "react";


function Navpagecollapse({ title, Link }) {
  return (
    <div>
      {/* <!-- Nav Item - Pages Collapse Menu --> */}

      <li className="nav-item">
        <Link
          className="nav-link "
          to={title === "student" ? "/Student" : "/Teacher"}
        >
          <i className="fa-regular fa-circle-user"></i>
          <span>{title === "student" ? "Student" : "Teacher"} Details</span>
        </Link>
       
      </li>
    </div>
  );
}

export default Navpagecollapse;
