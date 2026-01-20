import { FaSearch } from "react-icons/fa";
import avatar from "../../assets/requestedAvatar.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/header.jsx";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [openActionId, setOpenActionId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/assetrequests", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        setRequests(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch requests:", err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

const updateStatus = async (id, status) => {
  try {
    const url =
      status === "approved"
        ? `http://localhost:5000/api/assetrequests/${id}/approve`
        : `http://localhost:5000/api/assetrequests/${id}/reject`;

    await axios.put(url, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });

    await fetchData();     
    setOpenActionId(null); 
  } catch (err) {
    console.error("Status update failed", err);
  }
};

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-600 text-white";
      case "rejected":
        return "bg-red-600 text-white";
      case "pending":
        return "bg-yellow-600 text-white";
      default:
        return "bg-gray-300";
    }
  };

  const filteredRequests = requests.filter((item) => {
    if (statusFilter === "all") return true;
    return item.status.toLowerCase() === statusFilter;
  });

  return (
    <div className="mx-auto w-full h-screen">
      <Header />
      <form className="w-3xl mx-auto flex flex-col mt-8">
        <h1 className="font-bold text-2xl text-left">Admin - Dashboard</h1>
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
                    Requested By
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Requested On
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((item, index) => {
                  let statusColor = "";
                  if (item.status.toLowerCase() === "approved") {
                    statusColor = "bg-green-600 text-white";
                  } else if (item.status.toLowerCase() === "rejected") {
                    statusColor = "bg-red-600 text-white";
                  } else if (item.status.toLowerCase() === "pending") {
                    // eslint-disable-next-line no-unused-vars
                    statusColor = "bg-yellow-600 text-white";
                  }
                  return (
                    <tr
                      key={index}
                      className="bg-neutral-primary border-b border-gray-200"
                    >
                      <td
                        scope="row"
                        className="px-6 py-4 text-heading whitespace-nowrap"
                      >
                        {item.assert_name}
                      </td>
                      <td className="px-6 py-4">{item.reason}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-10 h-10 rounded-full bg-amber-300"
                            src={avatar}
                            alt="Neil Sims"
                          />
                          <p>{item.employee?.name}</p>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 relative">
                        {item.status.toLowerCase() === "pending" ? (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setOpenActionId(
                                  openActionId === item._id ? null : item._id
                                )
                              }
                              className="px-3 py-1 rounded bg-yellow-600 text-white"
                            >
                              Pending
                            </button>

                            {openActionId === item._id && (
                              <div className="absolute mt-2 w-20 bg-white border rounded shadow z-10">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateStatus(item._id, "approved")
                                  }
                                  className="block w-full px-3 py-2 text-left hover:bg-green-100 text-green-700"
                                >
                                  Approve
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateStatus(item._id, "rejected")
                                  }
                                  className="block w-full px-3 py-2 text-left hover:bg-red-100 text-red-700"
                                >
                                  Reject
                                </button>
                              </div>
                            )}
                          </>
                        ) : (
                          <span
                            className={`px-3 py-1 rounded ${getStatusColor(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminDashboard;
