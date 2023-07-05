import { useContext } from "react";
import Datacontext from "../context/Datacontext";

function Dashboard() {

  const{student}=useContext(Datacontext)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-sm-12 d-flux text-center table-responsive">
          <div>
            <p className="font-weight-bolder">
              Welcome to SB Admin School <sup>2</sup>
            </p>
          </div>
          <table className="table table-secondary table-striped">
            <thead>
              <tr>
                <th className="bg-primary bg-gradiant  text-white">Student</th>
                <th className="bg-primary bg-gradiant text-white">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {student.length > 0 ? (student.map((st, index) => {
                return (
                  <tr key={index}>
                    <td className="text-black fw-bold">{st.name}</td>
                    <td className="text-black fw-bold">{st.teacher}</td>
                  </tr>
                );
              })) :
                (
                  <tr>
                    <td colSpan={2}>Data Not available</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
