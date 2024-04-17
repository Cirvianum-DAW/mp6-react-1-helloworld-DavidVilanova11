import React from "react";
function Form() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2">
        <h1 className="text-3xl font-bold text-center mb-8">
          Informació Estudiant
        </h1>
        <label>Nom:</label>
        <input type="text" name="fname" className="bg-gray-100 px-2 my-2 rounded-lg w-full"/>
        <br />
        <label>Cognom:</label>
        <input type="text" name="lname" className="bg-gray-100 px-2 mt-2 rounded-lg w-full"/>
        <br />
        <br />
        <input type="submit" value="Submit" className="border p-2 rounded bg-blue-500 text-white w-full font-semibold" />
      </form>
    </div>
  );
}
export default Form;