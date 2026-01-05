import { FaSearch } from "react-icons/fa";
import avatar from '../../assets/requestedAvatar.png';

const AdminDashboard = () => {
  const tableData = [
    {
      assetType: "Mouse",
      reason: "My mouse is not working",
      requestedBy:"",
      requestedOn: "12/03/2020",
      status: "Pending",
    },
    {
      assetType: "Laptop",
      reason: "Upgrade to a faster model",
      requestedBy:"",
      requestedOn: "12/03/2020",
      status: "Reject",
    },
    {
      assetType: "keyboard",
      reason: "Broken keys on current keyboard",
      requestedBy:"",
      requestedOn: "12/03/2020",
      status: "Approve",
    },
    {
      assetType: "Mouse",
      reason: "My mouse is not working",
      requestedBy:"",
      requestedOn: "12/03/2020",
      status: "Pending",
    },
  ];
  return (
    <div className="mx-auto w-full h-screen">
      <form className="w-3xl mx-auto flex flex-col mt-8">
        <h1 className="font-bold text-2xl text-left">Admin - Dashboard</h1>
      <div className="border text-left bg-white border-gray-300 rounded mt-5">
        <div className="m-2 flex flex-row justify-between gap-20 border border-gray-50 rounded text-left bg-gray-100">  
          <div className="w-full h-12 p-3 items-center border rounded-sm border-gray-200 text-sm bg-white">
          <label>Status :</label>  
          <select>
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
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
              {tableData.map((item, index) => {
                let statusColor = "";
                if (item.status.toLowerCase() === "approve") {
                  statusColor = "bg-green-600 text-white";
                } else if (item.status.toLowerCase() === "reject") {
                  statusColor = "bg-red-600 text-white";
                } else if (item.status.toLowerCase() === "pending") {
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
                      {item.assetType}
                    </td>
                    <td className="px-6 py-4">{item.reason}</td>
                  <td className="px-6 py-4">
  <div className="flex items-center gap-3">
    <img
      className="w-10 h-10 rounded-full bg-amber-300"
      src={avatar}
      alt="Neil Sims"
    />
    <p>Neil</p>
  </div>
</td>

                    <td className="px-6 py-4">{item.requestedOn}</td>
                    <td className="px-6 py-4">
                      <button
                        className={`border px-2 py-1 rounded ${statusColor}`}
                      >
                        {item.status}
                      </button>
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
