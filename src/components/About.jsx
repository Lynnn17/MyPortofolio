import aboutImg from "../assets/foto2.png"
import fileCv from "../assets/Aryeswara Lintang Eka Kusuma-resume.pdf"
import { ABOUT_TEXT } from "../constants";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">About 
                <span className="text-neutral-500"> Me</span></h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl lg:w-2/4 w-3/4 " src={aboutImg} alt="about" />
                    </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                        </div>
                         <div>
                            <a  download="Aryeswara Lintang Eka Kusuma-resume.pdf"
            href={fileCv} 
            target="_blank" className="text-white bg-gray-800 hover:bg-gray-900focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-[2.5rem] py-3.5 mb-2">Download CV</a>
                        </div>
                </div>
            </div>
           
            
        </div>
    )
}

export default About;