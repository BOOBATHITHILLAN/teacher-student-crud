import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../context/Datacontext";

function AddStudent() {

    const {student,addStudent,teacher}=useContext(Datacontext)

    const [name, setName] = useState("")

    const [fathername, setFathername] = useState("")

    const [class1, setClass1] = useState("")

    const [address, setAddress] = useState("")

    const [Teacher, setTeacher] = useState("")

    let grade = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]


    useEffect(() => {
        setName("")
        setFathername("")
        setClass1("")
        setAddress("")
        setTeacher("")

    }, [student.length]);


    function ADDstudent() {
        if (name === "" || fathername === "" || class1 === "" || address === "" || Teacher === "") {
            alert("Fill all information");
        }
        else {
            addStudent([...student, {
                id: student.length + 1,
                name: name,
                fathername: fathername,
                class: class1,
                address: address,
                teacher: Teacher
            },])
           
        }
    }

    return (
        <>
            <h1 className="form-control bg-primary text-white">Add Student</h1>
            <form onSubmit={ADDstudent}>
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
                <Link>
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={() => ADDstudent()}
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

export default AddStudent