import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

export default function Invoice() {
  const invoices = [
    { id: "INV-1990", category: "Android", payment: 83.89, status: "Paid" },
    { id: "INV-1990", category: "Mac", payment: 45.09, status: "Out of Data" },
    { id: "INV-1990", category: "IOS", payment: 83.43, status: "Paid" },
    { id: "INV-1990", category: "Android", payment: 903.2, status: "Progress" },
    { id: "INV-1990", category: "Mac", payment: 10.89, status: "Paid" },
  ];

  const statusColor = {
    Paid: "bg-green-400/30  text-green-800",
    Progress: "bg-amber-500/40  text-orange-800",
    "Out of Data": "bg-red-600/30 text-red-600 ",
  };
  return (
    //   {/* Product Table */}
    <div className="max-h-[600px] bg- shadow-md rounded-3xl overflow-hidden ">
      <h2 className="p-4 text-xl text-gray-800">New Invoice</h2>
      <table className="min-w-full text-sm text-left text-gray-500">
        {/* Table Head */}
        <thead className="bg-gray-100  sticky top-0 z-10">
          <tr className="h-16 tracking-wider">
            <th className="px-6 py-3">Invoice ID</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Payment</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3   hidden lg:flex"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* Product Row */}
          {invoices.map((invoice) => (
            <tr className="border-y  border-gray-200 hover:bg-gray-50">
              <td className="flex items-center gap-3 px-6 py-4">
                <p className="font-medium">{invoice.id}</p>
              </td>
              <td className="px-6 py-4">
                <p className="font-medium">{invoice.category}</p>
              </td>
              <td className="px-6 py-4 text-gray-900  ">{invoice.payment}</td>
              <td className="px-6 py-4">
                <span
                  className={`mt-1 px-2 py-px pb-0.5 rounded text-xs ${
                    statusColor[invoice.status]
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
              <td className=" relative group hidden lg:flex ">
                <FiMoreVertical size={20} />
                {/* Hover */}
                <div
                  className="absolute w-36  top-15 shadow-xl right-14 submenue-sidebar-active p-1.5 rounded-lg  flex flex-col gap-y-1 z-40
                    invisible opacity-0 group-hover:opacity-100 delay-75 group-hover:visible"
                >
                  <div
                    //   onClick={() => handleDeleteClick(user.id)}
                    className="p-1.5 flex items-center gap-x-4 cursor-pointer text-orange-500   text-[14px] rounded-md hover:bg-gray-100/90   z-10"
                  >
                    <MdDelete size={20} />
                    <span> Delete </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
