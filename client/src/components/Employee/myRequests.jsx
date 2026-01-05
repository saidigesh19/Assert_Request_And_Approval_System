import { FaSearch } from "react-icons/fa";

const MyRequest = () => {
  const tableData = [
    {
      assetType: "Mouse",
      reason: "My mouse is not working",
      status: "Pending",
      requestedOn: "12/03/2020",
    },
    {
      assetType: "Laptop",
      reason: "Upgrade to a faster model",
      status: "Rejected",
      requestedOn: "12/03/2020",
    },
    {
      assetType: "keyboard",
      reason: "Broken keys on current keyboard",
      status: "Approved",
      requestedOn: "12/03/2020",
    },
    {
      assetType: "Mouse",
      reason: "My mouse is not working",
      status: "Pending",
      requestedOn: "12/03/2020",
    },
  ];
  return (
<<<<<<< HEAD
    <div className="mx-auto w-full h-screen bg-gray-50">
      <div className="w-3xl mx-auto flex flex-col">
        <h1 className="font-bold text-2xl text-left">Admin - Dashboard</h1>
=======
    <div className="mx-auto w-full h-screen">
      <form className="w-3xl mx-auto flex flex-col mt-8">
        <h1 className="font-bold text-2xl text-left">My Requests</h1>
>>>>>>> origin/main
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
<<<<<<< HEAD
              className="w-full h-10 px-2 mt-1 text-sm border border-gray-200 rounded-md focus:ring-gray-500 bg-white"
=======
              className="w-full h-10 px-2 mt-1 mr-1 text-sm border border-gray-200 rounded-md focus:ring-gray-500 bg-white"
>>>>>>> origin/main
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
                  Status
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Requested On
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                let statusColor = "";
                if (item.status.toLowerCase() === "approved") {
                  statusColor = "bg-green-600 text-white";
                } else if (item.status.toLowerCase() === "rejected") {
                  statusColor = "bg-red-600 text-white";
                } else if (item.status.toLowerCase() === "pending") {
                  statusColor = "bg-yellow-600 text-white";
                }
                return (
                  <tr
                    key={index}
                    className="bg-neutral-primary border-b border-gray-200"
                  >
<<<<<<< HEAD
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      {item.assetType}
                    </th>
=======
                    <td
                      scope="row"
                      className="px-6 py-4 text-heading whitespace-nowrap"
                    >
                      {item.assetType}
                    </td>
>>>>>>> origin/main
                    <td className="px-6 py-4">{item.reason}</td>
                    <td className="px-6 py-4">
                      <button
                        className={`border px-2 py-1 rounded ${statusColor}`}
                      >
                        {item.status}
                      </button>
                    </td>
                    <td className="px-6 py-4">{item.requestedOn}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
<<<<<<< HEAD
      </div>
=======
      </form>
>>>>>>> origin/main
    </div>
  );
};

export default MyRequest;
