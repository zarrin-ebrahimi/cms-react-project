import { createPortal } from "react-dom";
import React from "react";

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  message,
  title,
  confirmTxt = "Ok",
  cancelTxt = "Close",
}) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-blue-950/38">
      <div className="bg-white w-2/6  py-7 flex flex-col gap-y-5 rounded-xl shadow-sm ">
        <div  className="ml-5">
          {title && <span className="text-xl text-gray-950 p-1">{title}</span>}
          {message && <h2 className="mt-2 mb-4">{message}</h2>}
        </div>
        <div className="flex gap-x-3 justify-end mr-5 ">
          <button
            className="border cursor-pointer  border-gray-300 py-1 px-3 rounded-md"
            onClick={onClose}
          >
            {cancelTxt}
          </button>
          <button
            className="cursor-pointer bg-orange-600 py-1 px-3 rounded-md text-white"
            onClick={onConfirm}
          >
            {confirmTxt}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
