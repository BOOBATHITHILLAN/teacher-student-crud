import React from "react";
import Navpagecollapse from "./Navpagecollapse";
import { useContext } from "react";
import Datacontext from "../context/Datacontext";


function Sidebar({Link }) {

  const{style,Changestyle}= useContext(Datacontext)

  return (
    <div className="sidebar-left">
      {/* <!-- Sidebar --> */}
      <ul className={style} id="accordionSidebar">
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="##"
        >
          <div className="sidebar-brand-icon">
          <i className="fa-solid fa-house"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin School <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            
          <Link className="nav-link" to="/">
          <div >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span >Dashboard</span>
            </div>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Teacher</div>

        <Navpagecollapse
          title="teacher"
          Link={Link}
        />

        <div className="sidebar-heading">Student</div>
        <Navpagecollapse
          title="student"
          Link={Link}
        />
        {/* <!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/* <!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Logout">
          <i className="fa-solid fa-plane-circle-xmark"></i>
            <span>Log-out</span>
          </Link>
          
        </li>

        {/* <!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) -->*/}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={Changestyle}
          ></button>
        </div>

       
      </ul>
      {/* <!-- End of Sidebar --> */}
    </div>
  );
}

export default Sidebar;
