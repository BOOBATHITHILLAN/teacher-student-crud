import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../context/Datacontext";

 function Addteacher() {

  const{teacher,addTeacher}=useContext(Datacontext);

  const [name, setName] = useState(null);

  const [profession, setProfession] = useState(null);

  const [address, setAddress] = useState(null);

 

 

  useEffect(() => {
    setName(null);
    setAddress(null);
    setProfession(null);

  }, [teacher.length]);

  function AddTeacher() {

    if (name === null || profession === null || address === null) {
      alert("Fill all information");
    
    } else {
      addTeacher([
        ...teacher,
        {
          id: teacher.length + 1,
          name: name,
          master: profession,
          address: address,
        },
      ]);
      
    }

  }

  return (
    <>
      <h1 className="form-control bg-primary text-white">Add Teacher</h1>
      <form onSubmit={AddTeacher}>
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
          <label htmlFor="profession" className="form-label">
            Profession
          </label>
          <input
            type="text"
            className="form-control"
            id="profession"
            value={profession}
            onChange={(e) => {
              setProfession(e.target.value);
            }} />
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
        <Link to="/Teacher">
          <button type="submit" className="btn btn-primary m-2 bg-danger">
            Cancel
          </button>
        </Link>
        <Link to="/Teacher">
          <button
            type="submit"
            className="btn btn-primary m-2"
            onClick={()=>AddTeacher()}
          >
            Save
          </button>
        </Link>
      </form>
    </>
  );
}
export default Addteacher