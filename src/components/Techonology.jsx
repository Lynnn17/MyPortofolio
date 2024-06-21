import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";

const Technology = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technology</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <TbBrandNextjs className="text-7xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <GrMysql className="text-7xl text-blue-500" />
                </div>
                 <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaNodeJs className="text-7xl text-green-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <RiTailwindCssLine className="text-7xl text-blue-600" />
                </div>
               
                <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaPhp className="text-7xl text-blue-400" />
                </div>
                
            </div>
        </div>
    )
}
export default Technology;