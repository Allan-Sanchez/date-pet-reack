import React from 'react';
import Form from './components/Forms';

function App() {
  return (
      <div className="bg-blue-900 w-full h-full">
        <h1 className="text-center pt-10 font-semibold text-5xl text-indigo-300">Admin Patients</h1>

        <div className="grid grid-cols-2 gap-10">
            <div className="">
              <h3 className="text-center text-2xl pt-5 text-indigo-300">Form to add Pet</h3>
              <Form></Form>
            </div>

            <div className="">
              <h3 className="text-center text-2xl pt-10 text-indigo-300">2</h3>
            </div>
        </div>

      </div>
  );
}

export default App;
