import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Modal from "../Modal/Modal";
import { useModal } from "../../Hooks/useModal";
import EditUserModal from "../Modal/EditUserModal";
export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();
  const [userID, setUserID] = useState(null);
  const mainUser = allUsers.find((user) => user.id === userID);
  const editModal = useModal();
  const deleteModal = useModal();

  const handleDeleteClick = (id) => {
    deleteModal.openModal();
    setUserID(id);
    console.log(id);
  };

  const handleEditClick = (id) => {
    setUserID(id);
    editModal.openModal();
    console.log(id);
  };

  const handleConfirmUpdate = async(updatedUser) => {
    console.log(updatedUser);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/${updatedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      if (!res.ok) {
        throw new Error("Something Went Wrong");
      }
      setAllUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );

      editModal.closeModal();
    } catch (err) {
      console.error("Error Updating User", err);
    }
  };

  const handleConfirmDeleteUser = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${userID}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setAllUsers((prev) => prev.filter((user) => user.id !== userID));
      } else {
        console.error("Error deleting user: ", res.statusText);
      }
    } catch (err) {
      console.error("Error deleting user", err);
    }

    closeModal();
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/users`)
      .then((res) => res.json())
      .then((users) => setAllUsers(users));
  }, []);

  return (
    <>
      <div className=" mb-20 ">
        <h2 className="font-bold text-xl tracking-wide md:text-2xl mb-2">
          Users
        </h2>
        <div className="flex items-center text-gray-600 gap-x-4 ">
          <Link to={"/"}>Dashbord</Link>
          <HiMiniStop size={6} />
          <Link to={"/prodcut/list"}>Product</Link>
        </div>
        <div className=" items-center flex flex-col  ">
          <div className="   max-w-6xl flex  w-full flex-col  mt-4 ">
            <div className=" shadow-lg rounded-2xl">
              {/* Search and Filter Container */}
              <div className="flex m-3 gap-3 justify-between">
                {/* Search Input Group */}
                <div className="flex items-center px-3 w-full border border-gray-200 rounded-xl">
                  <CiSearch
                    size={25}
                    className="text-gray-800  cursor-pointer"
                  />
                  <input
                    placeholder="Search product ..."
                    type="text"
                    className=" focus:outline-none p-2.5 w-full rounded-md border-gray-200 "
                  />
                </div>
                {/* Filtered Users */}
                <div className="flex items-center px-3 gap-x-2">
                  <FaFilter
                    size={20}
                    className="text-gray-800  cursor-pointer"
                  />
                  <span className="tracking-wide">Filters</span>
                </div>
              </div>

              {/* Users Table */}
              <div className="max-h-[600px] overflow-auto ">
                <table className="min-w-full text-sm text-left text-gray-500">
                  {/* Table Head */}
                  <thead className="bg-gray-100  sticky top-0 z-10">
                    <tr className="h-16 tracking-wider">
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Phone number</th>
                      <th className="px-6 py-3">Password</th>
                      <th className="px-6 py-3">Username</th>
                      <th className="px-6 py-3">Email</th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {/* Product Row */}
                    {allUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="border-y  border-gray-200 hover:bg-gray-50"
                      >
                        <td className="flex items-center gap-3 px-6 py-4">
                          <img
                            src={`/images/Icons/face-${user.id}.png`}
                            alt="shoe"
                            className="w-16 h-14 rounded-xl"
                          />
                          <div>
                            <p className="font-medium">{user.firsname}</p>
                            <p className="text-gray-400 text-xs">
                              {user.lastname}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900  ">
                          {user.phone}
                        </td>
                        <td className="px-6 py-4">
                          <p className=" mt-1 text-gray-800">{user.password}</p>
                        </td>
                        <td className="px-6 py-4 font-medium">
                          {user.username}
                        </td>
                        <td className="px-6 py-4 text-gray-800">
                          {user.email}
                        </td>
                        <td className=" relative group ">
                          <FiMoreVertical size={20} />
                          {/* Hover */}
                          <div
                            className="absolute w-36  top-15 shadow-xl right-14 submenue-sidebar-active p-1.5 rounded-lg  flex flex-col gap-y-1 z-40
                           invisible opacity-0 group-hover:opacity-100 delay-75 group-hover:visible"
                          >
                            <div
                              onClick={() => handleEditClick(user.id)}
                              // to={`/product/edit/${user.id}`}
                              className="p-1.5 flex items-center gap-x-4 cursor-pointer text-black   text-[14px] rounded-md hover:bg-gray-100/90   z-10"
                            >
                              <AiFillEdit size={20} />
                              <span> Edite </span>
                            </div>

                            <div
                              onClick={() => handleDeleteClick(user.id)}
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
            </div>
          </div>
        </div>
      </div>

      <EditUserModal
        isOpen={editModal.isOpen}
        onClose={editModal.closeModal}
        onConfirmUpdate={handleConfirmUpdate}
        user={mainUser}
      />
      <Modal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.closeModal}
        onConfirm={handleConfirmDeleteUser}
        message={"Are you sure want to delete?"}
        confirmTxt="Delete"
        cancelTxt="Cancel"
        title={"Delete"}
      />
    </>
  );
}
