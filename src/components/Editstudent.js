import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../context/Datacontext";

function Editstudent() {
    
    const {student,addStudent,editstu,teacher}=useContext(Datacontext)

    const [name, setName] = useState(editstu[0].name)

    const [fathername, setFathername] = useState(editstu[0].fathername)

    const [class1, setClass1] = useState(editstu[0].class)

    const [address, setAddress] = useState(editstu[0].address)

    const [Teacher, setTeacher] = useState(editstu[0].teacher)

    let grade = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]


    function EDITstudent(id,name,fathername,class1,address,Teacher) {

        let Student = student.map(st => {
          if (st.id === id) {
            return (
              {
                id: id,
                name: name,
                fathername: fathername,
                class: class1,
                address: address,
                teacher: Teacher
              }
            )
          } else {
            return st
          }
        })
        addStudent(Student)   
        
      }
    



    return (
        <>
            <h1 className="form-control bg-primary text-white">Edit Student</h1>
            <form onSubmit={EDITstudent}>
                <div className="mb-3 m-3 text-start">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>
                <div className="mb-3 m-3 text-start">
                    <label htmlFor="fathername" className="form-label">
                        Father Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fathername"
                        value={fathername}
                        onChange={(e) => {
                            setFathername(e.target.value);
                        }} />
                </div>

                <div className="dropdown mb-3 m-3 text-start">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                        Select grade
                    </button>
                    <ul className="dropdown-menu">
                        {
                            grade.map((gr, i) => {
                                return (

                                    <li key={i} className="dropdown-item fw-bold" onClick={() => setClass1(gr)}>{gr}</li>
                                )
                            })
                        }

                    </ul>
                    <input className='text-center btn btn-primary fw-bold m-3' style={{ width: "10vw" }} value={class1} readOnly />
                </div>


                <div className="mb-3 m-3 text-start">
                    <label className="form-check-label" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }} />
                </div>

                <div className="dropdown mb-3 m-3 text-start">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                        Select Teacher
                    </button>
                    <ul className="dropdown-menu" >
                        {
                            teacher.map((te, i) => {
                                return (
                                    <li key={i} onClick={() => setTeacher(te.name)}>{te.name}</li>
                                )
                            })
                        }

                    </ul>
                    <input className='text-center btn btn-primary fw-bold m-3' style={{ width: "10vw" }} value={Teacher} readOnly />

                </div>


                <Link to="/Student">
                    <button type="submit" className="btn btn-primary m-2 bg-danger">
                        Cancel
                    </button>
                </Link>
                <Link to="/Student">
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={() => EDITstudent(editstu[0].id,name,fathername,class1,address,Teacher)}
                    >
                        Save
                    </button>
                </Link>
                <Link to="/Student">
                    <button type="submit" className="btn btn-primary m-2 bg-danger">
                        Back
                    </button>
                </Link>

            </form>
        </>
    )
}

export default Editstudent