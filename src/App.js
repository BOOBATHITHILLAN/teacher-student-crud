import React, {  useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logoutmodel from "./components/Logoutmodel";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Createteacher from "./components/Createteacher";
import Createstudent from "./components/Createstudent";
import { Addteacher } from "./components/Addteacher";
import { Editteacher } from "./components/Editteacher";



function App() {
  
  const[edittea,setEdittea]=useState([])

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const Changestyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const Changestyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  const [student, addStudent] = useState([
    {
      id: 1,
      name: "Boobathi",
      fathername: "Thillan",
      address: "Dindigul",
      teacher: "Balu",
    },
  ]);

  const [teacher, addTeacher] = useState([
    {
      id: 1,
      name: "Balu",
      master: "Tamil",
      address: "Chinnalapatti",
    },
  ]);


  

  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <Router>
        <div id="wrapper" className="">
          <Sidebar
            style={style}
            Changestyle={Changestyle}
            Link={Link}
           
          />

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content -->*/}
            <div id="content" className="#0dcaf0 text-center">
              
             
                <Navbar Changestyle1={Changestyle1}/>
              

              <Routes>
                <Route
                  path="/"
                  element={
                    <Dashboard
                      student={student}
                      addStudent={addStudent}
                      teacher={teacher}
                      addTeacher={addTeacher}
                    />
                  }
                />
                <Route
                  path="/Teacher"
                  element={
                    <Createteacher teacher={teacher} addTeacher={addTeacher} edittea={edittea} setEdittea={setEdittea}/>
                  }
                />
                <Route path="/Student" element={<Createstudent />} />

                <Route
                  path="/Teacher/Add"
                  element={
                    <Addteacher teacher={teacher} addTeacher={addTeacher} />
                  }
                />
                <Route
                  path="/Teacher/Edit"
                  element={
                    <Editteacher teacher={teacher} addTeacher={addTeacher} edittea={edittea} setEdittea={setEdittea}/>
                  }
                />
              </Routes>
            </div>
            {/* <!-- Footer Content -->*/}
            <Footer />
          </div>
        </div>
      </Router>

      <Logoutmodel />
    </div>
  );
}

export default App;


