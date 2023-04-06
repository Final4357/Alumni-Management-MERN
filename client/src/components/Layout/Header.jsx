
import { IoIosArrowForward } from "react-icons/io";
import { React, useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"


const Header = ({ activeHeading }) => {
  
    const [active, setActive] = useState(false);
    const [dropDown, setDropDown] = useState(false);


    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) {
            setActive(true);
        } else {
            setActive(false);
        }
    });

    return (
        <>
            <div className={`${styles.section}`}>
                <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
                    <div>
                        <Link to="/">
                            <img
                                src="https://i.ibb.co/T88njr9/dsa.png"
                                alt=""
                            />
                        </Link>
                    </div>



                    <div className={`${styles.button}`}>
                        <Link to="/login">
                            <h1 className="text-[#fff] flex items-center">
                                Sign in <IoIosArrowForward className="ml-1" />
                            </h1>
                        </Link>
                    </div>

                </div>
            </div>
            {/* {second nav} */}
            <div
                className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
                    } transition hidden 800px:flex items-center justify-between w-full bg-[#ff421c] h-[70px]`}
            >
                <div
                    className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
                >
                    
                    <div onClick={() => setDropDown(!dropDown)}>
                        <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
                            <h1 className="h-50 text-justify text-white">IIUC</h1>
                        </div>
                    </div>
                </div>
                <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>
            </div>
        </>
    )
}

export default Header