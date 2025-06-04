import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { FcAbout } from "react-icons/fc";

export default function EditUserModal({
  isOpen,
  onClose,
  onConfirmUpdate,
  user = {},
}) {
  const [username, setUsername] = useState("");
  const [firsname, setFirsname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [score, setScore] = useState("");
  const [buy, setBuy] = useState("");

  useEffect(() => {
    if (user) {
      setFirsname(user.firsname || '');
      setLastname(user.lastname || '');
      setUsername(user.username || '');
      setPassword(user.password || '');
      setPhone(user.phone || '');
      setEmail(user.email || '');
      setCity(user.city || '');
      setAddress(user.address || '');
      setScore(user.score || '');
      setBuy(user.buy || '');
    }
  }, [user]);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user, 
      username,
      firsname,
      lastname,
      password,
      phone,
      email,
      city,
      address,
      score,
      buy,
    };
    onConfirmUpdate(updatedUser)
  };
  if (!isOpen) return null;


  
  return createPortal(
    <form
      onSubmit={handleSubmitUser}
      className="fixed  inset-0 z-50 flex items-center justify-center bg-blue-950/38"
    >
      <div className="bg-white  p-5  w-2/4 rounded-2xl shadow-xl ">
        <span className="text-gray-900 text-xl">Quick update</span>
        <div className="flex items-center gap-x-3 my-4  bg-blue-200/30 p-3 rounded-md border border-blue-400 ">
          <FcAbout size={25} />
          <p className="text-blue-900">Account is waiting for confirmation</p>
        </div>
        <div className=" flex gap-4  w-full ">
          {/* Left Inputs */}
          <div className="flex flex-col gap-y-5 w-1/2">
            {/* Username Input */}
            <div className="w-full  flex-col flex  relative">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Usesrname</label>
            </div>
            {/* fristname Input */}
            <div className="w-full  flex-col flex  relative">
              <input
                value={firsname}
                onChange={(e) => setFirsname(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Fristname</label>
            </div>
            {/* Lastname Input */}
            <div className="w-full  flex-col flex  relative">
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Lastname</label>
            </div>
            <div className="w-full  flex-col flex  relative">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">City</label>
            </div>
            <div className="w-full  flex-col flex  relative">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Address</label>
            </div>
          </div>
          {/* right Inputs */}
          <div className="w-1/2 gap-y-5 flex flex-col">
            {/* Password Input */}
            <div className="w-full  flex-col flex  relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Password</label>
            </div>
            {/* Phone Input */}
            <div className="w-full  flex-col flex  relative">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Phone</label>
            </div>
            {/* Username Input */}
            <div className="w-full  flex-col flex  relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Email</label>
            </div>
            {/* Score Input */}
            <div className="w-full  flex-col flex  relative">
              <input
                value={score}
                onChange={(e) => setScore(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Score</label>
            </div>
            {/* Buy Input */}
            <div className="w-full  flex-col flex  relative">
              <input
                value={buy}
                onChange={(e) => setBuy(e.target.value)}
                type="text"
                placeholder=" "
                className="input-form p-4 border w-full rounded-md border-gray-200"
              />
              <label className="label-input-form px-px">Buy</label>
            </div>
          </div>
        </div>
        <div className="  flex justify-end mt-6 gap-x-3">
          <button
            onClick={onClose}
            type="button"
            className="bg-gray-800 text-white px-4 py-1 rounded w-23 tracking-wide  cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={onConfirmUpdate}
            type="submit"
            className="bg-gray-800 text-white px-4 py-1 rounded w-23 tracking-wide  cursor-pointer"
          >
            Update
          </button>
        </div>
      </div>
    </form>,
    document.getElementById("edit-user-modal-root")
  );
}
