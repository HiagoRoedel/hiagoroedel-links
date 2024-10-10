import { PageRoute } from "@/util/enum";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function LinkPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-[#1a1a1a] text-white rounded-xl w-[440px] py-10 px-8 flex flex-col items-center">
                <Image
                    src="/hiago.webp"
                    width={150}
                    height={150}
                    alt="hiago.webp"
                    className="rounded-full"
                />
                <h1 className="text-2xl font-bold mb-1 mt-3">Hiago Roedel</h1>
                <p className="text-green-500 mb-2">Coronel Fabriciano, Minas Gerais</p>

                <p className="text-gray-400 mb-6 text-center">
                    Front-end developer.
                </p>

                <div className="flex flex-col w-full space-y-3">
                    <Link href={PageRoute.LinkGitHub} target="_blank">
                        <button className="group bg-[#333] py-3 rounded-lg text-white w-full flex items-center justify-between px-4 hover:bg-[#555] transition-all transform hover:-translate-y-1">
                                <FaGithub />
                                <div className="flex items-center space-x-2">
                                <span>GitHub</span>
                            </div>
                            <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </Link>
                    <Link href={PageRoute.LinkLinkedin} target="_blank">
                        <button className="group bg-[#333] py-3 rounded-lg text-white w-full flex items-center justify-between px-4 hover:bg-[#555] transition-all transform hover:-translate-y-1">
                                <FaLinkedin />
                                <div className="flex items-center space-x-2">
                                <span>LinkedIn</span>
                            </div>
                            <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </Link>
                    <Link href={PageRoute.LinkInstagram} target="_blank">
                        <button className="group bg-[#333] py-3 rounded-lg text-white w-full flex items-center justify-between px-4 hover:bg-[#555] transition-all transform hover:-translate-y-1">
                                <FaInstagram />
                                <div className="flex items-center space-x-2">
                                <span>Instagram</span>
                            </div>
                            <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
