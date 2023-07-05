import { useContext } from "react";
import Datacontext from "../context/Datacontext";
import { Link } from "react-router-dom";

function Createstudent() {

  const{student,addStudent,setEditstu}=useContext(Datacontext)


  function Editstudent(id,name,fathername,class1,address,teacher) {
    setEditstu([{
      id: id,
      name: name,
      fathername: fathername,
      class:class1,
      address: address,
      teacher: teacher,
    }])
  }

 
 
  function Deletestudent(id) {

   
    addStudent(
      student.filter((st) =>st.id !== id)
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col table-responsive">
          <div className="bg-primary form-control ">
            <p className=" text-white d-inline-block col-10">Student's List</p>{" "}
            <Link to="/Student/Add" className=" text-end col-2 text-white">
              Add
              <i className="fa-solid fa-user-plus"></i>
            </Link>
          </div>
          <table className="table table-secondary table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Father Name</th>
                <th>Grade</th>
                <th>Address</th>
                <th>Teacher</th>
                <th>Edit & Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {student.length > 0 ? (
                student.map((st, index) => {
                  return (
                    <tr key={index}>
                      <td>{st.id}</td>
                      <td>{st.name}</td>
                      <td>{st.fathername}</td>
                      <td>{st.class}</td>
                      <td>{st.address}</td>
                      <td>{st.teacher}</td>

                      <td>
                        <Link to="/Student/Edit">
                          <i
                            className="fa-solid fa-pen-nib"
                            onClick={() => Editstudent(st.id,st.name,st.fathername,st.class,st.address,st.teacher)}
                          ></i>
                        </Link>
                      </td>

                      <td onClick={() => Deletestudent(st.id)}>
                        <Link>
                          <i className="fa-solid fa-trash-can"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7}>Data Not available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Createstudent

