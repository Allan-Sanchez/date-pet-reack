import React, { useState, useEffect } from "react";
import Form from "./components/Forms";
import Card from "./components/Card";

function App() {
  //use localstorage
  // let queryInitial = JSON.parse(localStorage.getItem('dates'));
  let queryInitial = JSON.parse(localStorage.getItem('datePet'));
  if (!queryInitial) {
    queryInitial = [];
  }

  const [querys, setquerys] = useState(queryInitial);

  //listenc= change usestate
  useEffect(() => {
    // console.log('change...')
    if (queryInitial) {
      localStorage.setItem("datePet", JSON.stringify(querys));
    } else {
      localStorage.setItem("datePet", JSON.stringify([]));
    }
  }, [querys,queryInitial]);

  const createQuery = (query) => {
    setquerys([...querys, query]);
  };

  const deleteQuery = (id) => {
    const newDate = querys.filter((date) => date.id !== id);
    setquerys(newDate);
  };

  const title = querys.length === 0 ? "No Dates" : "Admin dates";
  return (
    <div className="bg-blue-900 w-full h-full">
      <h1 className="text-center pt-10 font-semibold text-5xl text-indigo-300">
        Admin Patients
      </h1>

      <div className="grid grid-cols-2 gap-10">
        <div className="">
          <h3 className="text-center text-2xl pt-5 text-indigo-300">
            Form to add Pet
          </h3>
          <Form createQuery={createQuery}></Form>
        </div>

        <div className="">
          <h3 className="text-center text-2xl pt-5 text-indigo-300">{title}</h3>
          {querys.map((date) => (
            <Card key={date.id} 
            date={date} 
            deleteQuery={deleteQuery}>

            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
