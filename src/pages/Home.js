import React from "react";
import TypeAnimation from "react-type-animation";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex text-white justify-center w-full mt-16 lg:text-xl items-center text-center font-medium z-[100] font-poppins max-w-max lg:max-w-none">
            <div>
                <span className="lg:text-xl text-sm sm:text-lg">
                    <span>
                        Hello, I'm{" "}
                        <span className="text-blue-500 font-bold">Cosmic</span>,
                        <br />
                        I am a{" "}
                        <TypeAnimation
                            className="text-blue-500"
                            cursor={true}
                            sequence={[
                                "Web Developer",
                                1000,
                                "Discord bot Developer",
                                1000,
                                "Minecraft Plugin Developer",
                                1000,
                            ]}
                            wrapper="b"
                            repeat={Infinity}
                        />
                        .
                    </span>
                    <br />
                    <br />
                    <br />
                    <span className=" font-normal text-[0.65rem] ml-20 text-center lg:text-lg lg:ml-0 sm:ml-24 sm:text-base">
                        I am a{" "}
                        <span className="text-blue-500 font-bold">
                            17 Year Old
                        </span>{" "}
                        Developer, I am self taught while taking Computer
                        Science at School.
                    </span>
                </span>
                <br />
                <div className="flex ml-16 mt-16 text-center justify-center items-center lg:ml-0 sm:ml-0">
                    <div className="pr-10 text-2xl">
                        <Link to="/about">
                            <button className="mt-4 outline outline-offset-2 outline-2 rounded hover:outline-blue-500 hover:text-blue-500 p-1 transition-all duration-300 ease-linear cursor-pointer">
                                About Me
                            </button>
                        </Link>
                    </div>
                    <div className="text-2xl">
                        <Link to="/projects">
                            <button className="mt-4 outline outline-offset-2 outline-2 rounded hover:outline-blue-500 hover:text-blue-500 p-1 transition-all duration-300 ease-linear cursor-pointer">
                                Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
