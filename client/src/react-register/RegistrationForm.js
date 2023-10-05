import React from "react";

export default function RegistrationForm({
  handleSubmit,
  handleChange,
  formData,
  history,
}) {
  return (
    <div className="p-2">
      <form
        className="mx-auto w-10/12 sm:w-8/12 drop-shadow-3xl text-xl md:text-2xl font-bold leading-10 bg-teal-500 text-black text-center p-4 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="john.doe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Reservation Time</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="sm:mt-4">
          <button
            type="submit"
            className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black text-teal-700 font-bold py-2 px-3 rounded-full m-2 md:mx-3"
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => history(-1)}
            className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black text-teal-700 font-bold py-2 px-3 rounded-full m-2 md:mx-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
