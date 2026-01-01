import React from "react";

const AssetRequest = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center">
      <form className="w-full max-w-xl text-left mt-8 sh">
        <h1 className="font-bold text-2xl">Asset Request</h1>

        <div className="flex flex-col rounded border border-gray-100 p-4 mt-4 bg-white shadow-md">
          <h2 className="font-bold text-xl">Request New Asset</h2>

          <label
            htmlFor="assets"
            className="block mt-2.5 text-lg font-semibold"
          >
            Asset Type
          </label>

          <select
            id="assets"
            className="block w-full px-2.5 mt-3 py-2.5 border rounded-sm border-gray-100 shadow-sm text-sm"
          >
            <option>Choose an asset</option>
            <option>Mouse</option>
            <option>Mobile</option>
            <option>Laptop</option>
            <option>Keyboard</option>
          </select>

          <label
            htmlFor="message"
            className="block mt-4 mb-2.5 text-lg font-semibold"
          >
            Reason
          </label>

          <textarea
            id="message"
            rows="4"
            className="rounded-sm border border-gray-100 shadow-sm text-sm w-full p-3.5"
            placeholder="Write your reason here..."
          ></textarea>

          <button
            type="button"
            className="w-full mt-4 bg-sky-700 text-white rounded-sm px-4 py-2.5 hover:bg-sky-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssetRequest;
