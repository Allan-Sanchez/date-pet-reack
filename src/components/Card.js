import React from "react";
import PropTypes from 'prop-types';


const Card = ({date,deleteQuery}) => (
  <div className="flex max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-2">
    <div className="w-1/3 bg-cover">
      <img
        className="w-full h-full"
        src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="Italian Trulli"
      />
    </div>

    <div className="w-2/3 p-4 md:p-4">
      <h1 className="text-gray-900 font-bold text-2xl">{date.name}</h1>

      <p className="mt-2 text-gray-600 text-md">
        {date.description}
      </p>

      <div className="flex item-center mt-2">
        <p className="text-gray-700 text-sm">{`Date ${date.datePet} Hour: ${date.hourPet}`}</p>
      </div>

      <div className="flex item-center justify-between mt-3">
        <h1 className="text-gray-700 font-bold text-lg md:text-xl">{date.owner}</h1>
        <button onClick={()=>deleteQuery(date.id)} className="px-2 py-1 bg-red-500 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          Delete
        </button>
      </div>
    </div>
  </div>
);
Card.propTypes ={
    date:PropTypes.object.isRequired,
    deleteQuery:PropTypes.func
}
export default Card;
