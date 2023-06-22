import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Editteacher({ teacher, addTeacher, edittea, setEdittea }) {

  let editTeacher = teacher.find(te => te.id === edittea[0].id)

  const [name, setName] = useState(editTeacher.name);

  const [profession, setProfession] = useState(editTeacher.master);

  const [address, setAddress] = useState(editTeacher.address);

  const [reset, setReset] = useState(false)









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

    reset ? setReset(false) : setReset(true);


  }


  return (
    <>
      <h1 className="form-control bg-primary text-white">Add Teacher</h1>
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
          <button type="submit" className="btn btn-primary m-2 bg-danger">
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
      </form>
    </>
  );

}
