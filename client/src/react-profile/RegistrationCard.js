import React from "react";

const RegistrationCard = ({ user: { id, username, email }, handleCancel }) => {
  return (
    <>
      {
        <div className="drop-shadow-3xl sm:mx-6 my-6 leading-10 bg-teal-500 text-gray-100 font-bold text-xl text-center p-4 rounded-3xl">
          <p>User Id: {id}</p>
          <p>User Name: {username}</p>
          <p>Email: {email}</p>
          <div className="flex justify-center mt-2 font-bold text-teal-700">
            <a
              className="focus:outline-none hover:no-underline bg-gray-100 hover:bg-teal-600 hover:text-black py-1 px-3 rounded-full mr-3"
              href={`/register/${id}/edit`}
            >
              Edit
            </a>
            <button
              type="button"
              className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black font-bold py-1 px-3 rounded-full ml-3"
              onClick={() => handleCancel(id)}
              data-reservation-id-cancel={id}
            >
              Delete
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default RegistrationCard;