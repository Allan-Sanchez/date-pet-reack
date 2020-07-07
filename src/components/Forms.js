import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

const Form = ({ createQuery }) => {
  //create date
  const [date, setDate] = useState({
    name: "",
    owner: "",
    datePet: "",
    hourPet: "",
    description: "",
  });

  const [error, setError] = useState(false);

  //funtion onchange handleChange
  const updateState = (e) => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };

  const { name, owner, datePet, hourPet, description } = date;

  const submitQuery = (e) => {
    e.preventDefault();

    //validate
    if (
      name.trim() === "" ||
      owner.trim() === "" ||
      datePet.trim() === "" ||
      hourPet.trim() === "" ||
      description.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    //adde id
    date.id = uuidv4();
    createQuery(date);

    //reset form
    setDate({
      name: "",
      owner: "",
      datePet: "",
      hourPet: "",
      description: "",
    });
    // console.log(date);
  };
  return (
    <Fragment>
      {error ? (
        <div role="alert" className="w-2/3 mx-auto m-5">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Please fill in all the fields.</p>
          </div>
        </div>
      ) : null}

      <form className="w-2/3 mx-auto" onSubmit={submitQuery}>
        <div className="mb-2">
          <label className="block text-indigo-200 text-sm font-bold mb-2">
            The pet's name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-indigo-900"
            id="username"
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateState}
            value={name}
          />
        </div>

        <div className="mb-2">
          <label className="block text-indigo-200 text-sm font-bold mb-2">
            Owner
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-indigo-900"
            id="owner"
            type="text"
            name="owner"
            placeholder="Owner"
            onChange={updateState}
            value={owner}
          />
        </div>

        <div className="mb-2">
          <label className="block text-indigo-200 text-sm font-bold mb-2">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            name="datePet"
            id="datePet"
            type="date"
            onChange={updateState}
            value={datePet}
          />
        </div>

        <div className="mb-2">
          <label className="block text-indigo-200 text-sm font-bold mb-2">
            Hour
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            name="hourPet"
            id="hourPet"
            type="time"
            onChange={updateState}
            value={hourPet}
          />
        </div>

        <div className="mb-2">
          <label className="block text-indigo-200 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            className="w-full resize-none border rounded focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            onChange={updateState}
            value={description}
          ></textarea>
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add Query
          </button>
        </div>
      </form>
    </Fragment>
  );
};

Form.propTypes= {
  createQuery:PropTypes.func.isRequired
}
export default Form;
