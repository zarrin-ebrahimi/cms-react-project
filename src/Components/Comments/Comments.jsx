import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "../Modal/Modal";
import { useModal } from "../../Hooks/useModal";
export default function hello() {
  const { isOpen, openModal, closeModal } = useModal();
  const [comments, setComments] = useState([]);
  const [commentID, setCommentID] = useState(null);
  // const acceptModal = useModal();
  // const rejectModal = useModal();
  // const deleteModal = useModal();

  useEffect(() => {
    fetch(`http://localhost:8000/api/comments`)
      .then((res) => res.json())
      .then((comments) => setComments(comments));
  }, []);

  const handleDeleteClick = (id) => {
    setCommentID(id);
    openModal();
  };

  const confirmDeleteComment = async () => {
    try{
      const res = await fetch(`http://localhost:8000/api/comments/${commentID}`, {
        method: 'DELETE'
      })
      if(res.ok){
        setComments(prev => prev.filter(comment => comment.id !== commentID))
      }else{
        console.error('Error deleting comment', res.statusText)
      }
    }catch(err) {
      console.error("Error deleting comment", err);
    }
    closeModal()
  };

  return (
    <>
      <div className="mb-20">
        <h2 className="font-bold text-xl text-gray-900  tracking-wide md:text-2xl mb-2">
          Comments
        </h2>
        <div className="flex items-center text-gray-600 gap-x-4 ">
          <Link to={"/"}>Dashbord</Link>
          <HiMiniStop size={6} />
          {/* <Link to={"/prodcut/list"}>Product</Link> */}
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
                      <th className="px-6 py-3">Username</th>
                      <th className="px-6 py-3">Product</th>
                      <th className="px-6 py-3">Comment</th>
                      <th className="px-6 py-3">date</th>
                      <th className="px-6 py-3">Houre</th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {/* Product Row */}
                    {comments.map((comment) => (
                      <tr
                        key={comment.id}
                        className="border-y  border-gray-200 hover:bg-gray-50"
                      >
                        <td className="flex items-center gap-3 px-6 py-4">
                          <img
                            src={`/images/Icons/face-${comment.id}.png`}
                            alt="shoe"
                            className="w-16 h-14 rounded-xl"
                          />
                          <div>
                            <p className="font-medium">{comment.userID}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900  ">
                          {comment.productID}
                        </td>
                        <td className="px-6 py-4">
                          <p className=" mt-1 text-gray-800 line-clamp-2">
                            " {comment.body} "
                          </p>
                        </td>
                        <td className="px-6 py-4 font-medium">
                          {comment.date}
                        </td>
                        <td className="px-6 py-4 text-gray-800">
                          {comment.hour}
                        </td>
                        <td className=" relative group ">
                          <FiMoreVertical size={20} />
                          {/* Hover */}
                          <div
                            className="absolute w-36  top-15 shadow-xl right-14 submenue-sidebar-active p-1.5 rounded-lg  flex flex-col gap-y-1 z-40
                                 invisible opacity-0 group-hover:opacity-100 delay-75 group-hover:visible"
                          >
                            <div
                              onClick={() => handleDeleteClick(comment.id)}
                              className="p-1.5 flex items-center gap-x-4 cursor-pointer text-orange-400   text-[14px] rounded-md hover:bg-gray-100/90   z-10"
                            >
                              <MdDelete size={20} />
                              <span> Delete </span>
                            </div>

                            <div
                              onClick={() => handleAcceptClick(comment.id)}
                              className="p-1.5 flex items-center gap-x-4 cursor-pointer text-black  text-[14px] rounded-md hover:bg-gray-100/90   z-10"
                            >
                              <HiCheckCircle size={20} />
                              <span> Accept </span>
                            </div>

                            <div
                              onClick={() => handleRejectClick(comment.id)}
                              className="p-1.5 flex items-center gap-x-4 cursor-pointer text-black  text-[14px] rounded-md hover:bg-gray-100/90   z-10"
                            >
                              <IoMdCloseCircle size={20} />
                              <span> Reject </span>
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

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={confirmDeleteComment}
        message={"Are you sure want to delete?"}
        confirmTxt="Delete"
        cancelTxt="Cancel"
        title={"Delete"}
      />
    </>
  );
}
