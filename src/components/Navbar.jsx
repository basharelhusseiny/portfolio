import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
   const navLinks = ["projects", "skills", "education", "contact"];
   const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
   const toggleMobilMenu = () => {
      setIsMobMenuOpen(!isMobMenuOpen);
   };
   // const handlerClick = (e) =>{
   //    e.preventDefault();

   // }
   return (
      <nav className="navbar">
         <div className="container  mx-auto px-5">
            <div className="w-full max-sm:hidden backdrop-blur-lg fixed top-0 left-0 z-20 text-black">
               .
            </div>
            <div className="main-nav max-sm:hidden flex items-center fixed left-0 right-0 top-0 z-30 mx-auto px-5 border-2 border-white/30 backdrop-blur-lg rounded-full mt-5 w-fit">
               <div className="px-3 uppercase tracking-wider  ">
                  <a
                     href="#bashar"
                     className="block py-2 text-fuchsia-300 hover:text-fuchsia-500 font-semibold duration-100">
                     Bashar ElHusseiny
                  </a>
               </div>
               <ul className="px-3 flex justify-center items-center gap-7 capitalize">
                  {navLinks.map((link, index) => {
                     return (
                        <li
                           key={index}
                           className="opacity-70 hover:opacity-100 duration-100">
                           <a href={`#${link}`} className="block py-2">
                              {link}
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </div>
            {/* For Mobile */}
            <div className="mob-nav">
               <div className="sm:hidden p-5 mx-auto flex justify-between items-center fixed z-30 top-0 right-0 left-0 bg-fuchsia-900/30 backdrop-blur-lg">
                  <div className="uppercase tracking-wider  ">
                     <a
                        href="#bashar"
                        className="block text-fuchsia-300 hover:text-fuchsia-500 font-semibold text-xl duration-150">
                        Bashar ElHusseiny
                     </a>
                  </div>
                  <div className="pt-2">
                     <button onClick={toggleMobilMenu}>
                        {isMobMenuOpen ? (
                           <IoClose className="text-3xl text-fuchsia-300 hover:text-fuchsia-500" />
                        ) : (
                           <RiMenu3Line className="text-2xl text-fuchsia-300 hover:text-fuchsia-500" />
                        )}
                     </button>
                  </div>
               </div>
               <div>
                  <div className="backdrop-blur-xl bg-fuchsia-900/30 fixed top-[80px] left-0 w-full z-30">
                     {isMobMenuOpen && (
                        <ul className="capitalize flex flex-col">
                           {navLinks.map((link, index) => {
                              return (
                                 <li key={index}>
                                    <a
                                       href={`#${link}`}
                                       className="block py-6 pl-5 hover:pl-8 border-b border-white/50 duration-150">
                                       {link}
                                    </a>
                                 </li>
                              );
                           })}
                        </ul>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
