import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Header from "../Header/header";
import axios from "axios";

const MyRequest = () => {
  const [requests, setRequests] = useState([]); // Stores the data in the state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token"); // gets the token from local storage
      const res = await axios.get("http://localhost:5000/api/myRequest", {
        //fetching the server for the data
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // stores the response body in data
      setRequests(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to fetch requests");
      setLoading(false);
    }
  };
  const statusStyles = {
    approved: "bg-green-600 text-white",
    rejected: "bg-red-600 text-white",
    pending: "bg-yellow-500 text-white",
  };
  // Fetch data automatically when the component loads
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchRequests();
  }, []);

  const filteredRequests = requests.filter((item) => {
    if (statusFilter === "all") return true;
    return item.status.toLowerCase() === statusFilter;
  });

  return (
    <div className="mx-auto w-full h-screen">
      <Header />
      <div className="w-3xl mx-auto flex flex-col mt-8">
        <h1 className="font-bold text-2xl text-left">My Requests</h1>
        <div className="border text-left bg-white border-gray-300 rounded mt-5">
          <div className="m-2 flex flex-row justify-between gap-20 border border-gray-50 rounded text-left bg-gray-100">
            <div className="w-full h-12 p-3 items-center border rounded-sm border-gray-200 text-sm bg-white">
              <label>Status :</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="ml-2 px-2 py-1"
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="relative w-full max-w-sm flex justify-end">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 px-2 mt-1 mr-1 text-sm border border-gray-200 rounded-md focus:ring-gray-500 bg-white"
              />
              <FaSearch className="absolute m-4 text-gray-500" />
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-xs rounded-base">
            {loading && (
              <div className="p-6 text-center text-gray-600 font-medium">
                Loading requests...
              </div>
            )}

            {error && !loading && (
              <div className="p-4 text-center text-red-600 font-medium">
                {error}
              </div>
            )}

            {!loading && !error && (
              <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm bg-gray-100 border-t border-b border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Asset type
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Reason
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Requested On
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredRequests.map((item, index) => {
                    const statusColor =
                      statusStyles[item.status?.toLowerCase()] ||
                      "bg-gray-200 text-gray-700";

                    return (
                      <tr
                        key={index}
                        className="bg-neutral-primary border-b border-gray-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.assert_name}
                        </td>
                        <td className="px-6 py-4">{item.reason}</td>
                        <td className="px-6 py-4">
                          <button
                            className={`border px-2 py-1 rounded text-xs ${statusColor}`}
                          >
                            {item.status}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyRequest;