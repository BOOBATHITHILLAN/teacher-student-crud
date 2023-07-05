import { createContext, useState } from "react";



const Datacontext=createContext({});

export const DataProvider=({children})=>{

    
  const [edittea, setEdittea] = useState([])

  const [editstu, setEditstu] = useState([])

  const [student, addStudent] = useState([
    {
      id: 1,
      name: "Boobathi",
      fathername: "Thillan",
      class: "I",
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


    return(
        <Datacontext.Provider value={{
                style,Changestyle,Changestyle1,
                student,addStudent,
                editstu,setEditstu,
                teacher,addTeacher,
                edittea,setEdittea
        }}>
            {children}
           
        </Datacontext.Provider>
    )
}

export default Datacontext