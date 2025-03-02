import { useNavigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <header className="max-w-[300px] bg-white border pb-[228px] pt-[40px] border-[#DBDBDB] flex flex-col pl-[24px]">
            <img src="../../../public/img/instagramLogo.svg" alt="instagram" className="self-start w-[103] h-[29px] mb-[31px]" />
            <div className="flex flex-col gap-2 text-black ">
                <span onClick={() => navigate("/home")} className="flex items-center gap-4 py-[12px] pr-[122px] cursor-pointer"> <IoHomeSharp className="w-[24px] h-[24px]"/>Home</span>
                <span onClick={() => navigate("/search")} className="flex items-center gap-4 py-[12px] pr-[122px] cursor-pointer"><IoIosSearch className="w-[24px] h-[24px]"/>Search</span>
                <span onClick={() => navigate("/")} className="flex items-center gap-4 py-[12px] pr-[122px] cursor-pointer"><AiOutlinePlusSquare className="w-[24px] h-[24px]"/>Create</span>
                <span onClick={() => navigate("/")} className="flex items-center gap-4 py-[12px] pr-[122px] cursor-pointer"><FaUser className="w-[24px] h-[24px]"/>Profile</span>
            </div>
        </header>
    )
}
