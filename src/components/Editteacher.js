import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../context/Datacontext";

function Editteacher() {

  const { teacher, addTeacher, edittea, setEdittea } = useContext(Datacontext)

  const [name, setName] = useState(edittea[0].name);

  const [profession, setProfession] = useState(edittea[0].master);

  const [address, setAddress] = useState(edittea[0].address);

  function EditTeacher(name, profession, address, id) {

    let Teacher = teacher.map(te => {
      if (te.id === id) {
        return (
          {
            id: id,
            name: name,
            master: profession,
            address: address
          }
        )
      } else {
        return te
      }
    })
    addTeacher(Teacher)

  }




  return (
    <>
      <h1 className="form-control bg-primary text-white">Edit Teacher</h1>
      <form onSubmit={EditTeacher}>
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
          <button type="submit" className="btn btn-primary m-2 bg-danger" onClick={() => setEdittea([])}>
            Cancel
          </button>
        </Link>
        <Link to="/Teacher">
          <button
            type="submit"
            className="btn btn-primary m-2"
            onClick={() => EditTeacher(name, profession, address, edittea[0].id)}
          >
            Save
          </button>
        </Link>
        <Link to="/Teacher">
          <button
            type="submit"
            className="btn btn-primary m-2" onClick={() => setEdittea([])}
          >
            Back
          </button>
        </Link>
      </form>
    </>
  );

}
export default Editteacher