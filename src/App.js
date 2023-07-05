import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Logoutmodel from "./components/Logoutmodel";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Createteacher from "./components/Createteacher";
import Createstudent from "./components/Createstudent";
import AddStudent from "./components/Addstudent";
import Addteacher from "./components/Addteacher";
import Editteacher from "./components/Editteacher";
import Editstudent from "./components/Editstudent";
import { DataProvider } from "./context/Datacontext";




function App() {

  return (
    <div id="page-top">
      <DataProvider>
        {/* <!-- Page Wrapper --> */}
        <Router>
          <div id="wrapper" className="">
            <Sidebar
              Link={Link}
            />

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* <!-- Main Content -->*/}
              <div id="content" className="#0dcaf0 text-center">


                <Navbar />


                <Routes>
                  <Route
                    path="/"
                    element={
                      <Dashboard />
                    }
                  />
                  <Route
                    path="/Student"
                    element={
                      <Createstudent />
                    }
                  />
                  <Route
                    path="/Student/Add"
                    element={
                      <AddStudent />
                    }
                  />
                  <Route
                    path="/Student/Edit"
                    element={
                      <Editstudent />
                    }
                  />


                  <Route
                    path="/Teacher"
                    element={
                      <Createteacher />
                    }
                  />
                  <Route
                    path="/Teacher/Add"
                    element={
                      <Addteacher />
                    }
                  />
                  <Route
                    path="/Teacher/Edit"
                    element={
                      <Editteacher />
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
      </DataProvider>
    </div>
  );
}

export default App;


