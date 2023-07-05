import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../context/Datacontext";

function Createteacher() {

  const{teacher,addTeacher,setEdittea}=useContext(Datacontext);

  function Editteacher(id, name, master, address) {
    setEdittea([{
      id: id,
      name: name,
      master: master,
      address: address

    }])
  }

  function Deleteteacher(id) {
   
    addTeacher(
      teacher.filter((te) =>te.id !== id)
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col table-responsive">
          <div className="bg-primary form-control">
            <p className=" text-white d-inline-block col-10">Teacher's List</p>{" "}
            <Link to="/Teacher/Add" className=" text-end col-2 text-white">
              Add
              <i className="fa-solid fa-user-plus"></i>
            </Link>
          </div>
          <table className="table table-secondary table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Profession</th>
                <th>Address</th>
                <th>Edit & Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {teacher.length > 0 ? (
                teacher.map((te, index) => {
                  return (
                    <tr key={index}>
                      <td>{te.name}</td>
                      <td>{te.master}</td>
                      <td>{te.address}</td>

                      <td>
                        <Link to="/Teacher/Edit">
                          <i
                            className="fa-solid fa-pen-nib"
                            onClick={() => Editteacher(te.id, te.name, te.master, te.address)}
                          ></i>
                        </Link>
                      </td>

                      <td onClick={() => Deleteteacher(te.id)}>
                        <Link>
                          <i className="fa-solid fa-trash-can"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5}>Data Not available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Createteacher;
