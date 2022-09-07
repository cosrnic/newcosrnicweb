import { FaWrench, FaStickyNote, FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillHome, AiOutlineIdcard } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cat from "./img/nobg-catien_blue_effects.png";
import "./index.css";
const SideBar = () => {
	return (
		<div className="fixed top-0 left-0 h-screen w-[72px] m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg z-[999] ">
			<div className="font-poppins group relative flex items-center justify-center h-14 w-14 mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-blue-500 rounded-3xl transition-all duration-300 ease-linear">
				<img src={Cat} className="rounded-full" alt="cat" />
			</div>
			<div className="fixed top-1/3 left-0 h-screen w-[72px] m-0 flex flex-col">
				<Link to="/">
					<SideBarIcon icon={<AiFillHome size="28" />} text={"Home"} />
				</Link>
				<Link to="/about">
					<SideBarIcon
						icon={<BsFillPersonFill size="28" />}
						text={"About Me"}
					/>
				</Link>
				<Link to="/projects">
					<SideBarIcon icon={<FaWrench size="28" />} text={"Projects"} />
				</Link>
				<Link to="/credits">
					<SideBarIcon icon={<FaStickyNote size="28" />} text={"Credits"} />
				</Link>
			</div>
			<div className="fixed left-0 inset-x-0 bottom-[7rem] w-[72px] m-0 flex flex-col rounded-3x">
				<a href="https://card.cosrnic.uk" target="_blank" rel="noreferrer">
					<SideBarIcon icon={<AiOutlineIdcard size="24" />} text={"Card"} />
				</a>
				<a href="https://github.com/cosrnic" target="_blank" rel="noreferrer">
					<SideBarIcon icon={<AiFillGithub size="24" />} text={"GitHub"} />
				</a>
				{/* <a href="https://twitter.com/cosrnic_" target='_blank' rel="noreferrer"><SideBarIcon icon={<FaTwitter size="24" />} text={"Twitter"} /></a> */}
			</div>
			<p className=" fixed left-0 bottom-5 inset-x-0 w-[72px] p-2  text-center text-sm font-poppins">
				Made with ReactJS{" "}
				<FaReact
					className="ml-[25%] hover:text-blue-500 transition-all duration-300"
					size={24}
				/>
			</p>
		</div>
	);
};
const SideBarIcon = ({ icon, text = "tooltip" }) => (
	<div className="z-[999] font-poppins group relative flex items-center justify-center sm:mt-2 h-12 w-12 mb-2 mx-auto shadow-lg bg-gray-800 text-blue-500 hover:bg-blue-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer">
		{icon}
		<span className="font-poppins absolute w-auto p-2 m-2 font-medium min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs transition-all duration-100 scale-0 origin-left group-hover:scale-100">
			{text}
		</span>
	</div>
);
export default SideBar;
