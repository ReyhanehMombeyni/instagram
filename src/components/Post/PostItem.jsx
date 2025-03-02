import { FiMoreHorizontal } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import Comment from "../comment/Comment";

export default function PostItem() {
  const [like, setLike] = useState(false)
  const [unSave, setUnSave] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const getLike = () => {
    setLike(!like)
  }
  return (
    <section className="text-black mx-auto mt-10 pb-5">
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2.5">
            <img src="../../../public/img/profile.png" alt="profileimg" />
            <span>lewishamilton</span>
            <img
              className="w-[12px] h-[12px]"
              src="../../../public/img/Frame.png"
              alt="frameimg"
            />
            <span>• 5h</span>
          </div>
          <FiMoreHorizontal />
        </div>
      </div>
      <div>
        <img src="../../../public/img/homeimg.png" alt="homeimg" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-2xl my-2">
          <button onClick={getLike} className="cursor-pointer">
            {like ? <IoHeartSharp className="text-red-600" /> : <FiHeart />}
          </button>
          <FiMessageCircle className="cursor-pointer" onClick={() => setIsOpen(true)} />
          {
            isOpen && (
              <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex justify-center items-center" onClick={() => setIsOpen(false)}>
                <Comment/>
              </div>
            )
          }
        </div>
        <button onClick={() => setUnSave(!unSave)} className="text-2xl cursor-pointer">
          {
            unSave ? <FaBookmark /> : <FaRegBookmark />
          }
        </button>
      </div>
      <span>741,368 likes</span>
      <div>
        <span>lewishamilton</span>
        <span>
          Parabéns Ayrton, minha inspiração sempre 🇧🇷💫
        </span>
      </div>
      <p>See translation</p>
      <p className="text-gray-400">View all 13,384 comments</p>
      <div className="flex items-center justify-between">
        <p>Add a comment…</p>
        <CiFaceSmile />
      </div>
    </section>
  );
}
