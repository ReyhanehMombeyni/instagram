import { SlArrowDown } from "react-icons/sl";



export default function Profile() {
    return (
        <section className="text-black mt-5 pl-[155px] flex">
            <img className="w-[150px] h-[150px] mr-8" src="/public/mkh2.png" alt="img" />
            <div>
                <div className="flex gap-[20px] mb-[20px]">
                    <div className="flex items-center">
                        <span className="text-xl">mkbhd</span>
                        <img className="w-[18px] h-[18px] ml-2" src="/public/img/Frame.png" alt="img" />
                    </div>
                    <div className="px-3 rounded-[8px] flex items-center gap-3 bg-[#EFEFEF] ">
                        <button className="  ">Following </button>
                        <SlArrowDown className="text-black w-[10px]" />
                    </div>
                </div>
                <div className="text-sm mb-6">
                    <span className="font-bold  pr-6">1,861 
                        <span className="pl-1">posts</span>
                        </span>
                    <span className="pr-6">
                        <span className="font-bold pr-1">4M</span>
                        followers
                    </span>
                    <span className="pr-6">
                        <span className="font-bold  pr-1">454</span>
                        following
                    </span>
                </div>
                <div >
                    <p className="text-sm ">Marques Brownlee</p>
                    <p>I promise I won't overdo the filters.</p>
                    <a href="#" className="text-[#00376B]">mkbhd.com</a>
                </div>
            </div>
        </section>
    )
}
