import React, { useState } from "react";
import axios from 'axios';
import Header from "../Header/header"

const AssetRequest = () => {
  const[assert_name,setassert_name]=useState("");
  const[reason,setReason]=useState("");
  const[msg,setMsg]=useState("");
  const [msgType, setMsgType] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      if (!token) {
        setMsg("Please login first");
        return;
      }
      try {
        const res = await axios.post(
          "http://localhost:5000/api/empAssert",
          {
            assert_name,
            reason,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ); 
        setMsg("Asset request submitted successfully");
        setassert_name("");
        setReason("");
        setMsgType("success");
        console.log(res,"res")
      } catch (err) {
        console.error(err);
        setMsg(err.response?.data?.message || "Failed to submit request");
      }
    };
  return (
    <div>
      <Header/>
    <div className="min-h-screen w-full flex justify-center">  
      <form className="w-full max-w-xl text-left mt-8 sh" onSubmit={handleSubmit}>
        <h1 className="font-bold text-2xl text-left">Asset Request</h1>
        <div className="flex flex-col rounded border border-gray-300 p-4 mt-4 bg-white">
          <h2 className="font-medium text-xl ">Request New Asset</h2>
          <label
            htmlFor="assets"
            className="block mt-2.5 font-medium"
          >
            Asset Type
          </label>
          <select
            id="assets"
            className="block w-full px-2.5 mt-3 py-2.5 border rounded-sm border-gray-300 text-sm"
            value={assert_name}
            onChange={(e) => setassert_name(e.target.value)} required
          >
            <option value="">Choose an asset</option>
            <option>Mouse</option>
            <option>Mobile</option>
            <option>Laptop</option>
            <option>Keyboard</option>
          </select>
          <label
            htmlFor="message"
            className="block mt-4 mb-2.5 font-medium"
          >
            Reason
          </label>
          <textarea
            id="message"
            rows="4"
            className="rounded-sm border border-gray-300 text-sm w-full p-3.5"
            placeholder="Write your reason here..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full mt-4 bg-sky-700 text-white rounded-sm px-4 py-2.5 hover:bg-sky-800"
          >
            Submit
          </button>
          {msg && (
              <p
                className={`mt-3 text-center text-sm ${
                  msgType === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {msg}
              </p>
            )}
        </div>
      </form>
    </div>
    </div> 
  );
};
export default AssetRequest;