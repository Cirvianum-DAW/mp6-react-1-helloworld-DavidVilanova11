import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (e) => {
    setWelcomeMessage(`Benvingut ${firstName} ${lastName}!`);
    e.preventDefault(); // Necessari per evitar que el form es refresqui
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-8">
          Informació Estudiant
        </h1>
        <label>Nom:</label>
        <input
          type="text"
          name="fname"
          className="bg-gray-100 px-2 my-2 rounded-lg w-full"
          onBlur={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Cognom:</label>
        <input
          type="text"
          name="lname"
          className="bg-gray-100 px-2 mt-2 rounded-lg w-full"
          onBlur={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          className="border p-2 rounded bg-blue-500 text-white w-full font-semibold"
        />
        <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
}
export default Form;
