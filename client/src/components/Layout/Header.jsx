
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
                        <p>IIUC</p>
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
                className={`${active === true ? "shadow-sm fixed top-0 left-20 z-10" : null
                    } transition hidden  w-11/12 mx-auto 800px:flex items-center justify-between  bg-[#ff421c] h-[70px]`}
            >
                
                <Link to="/">
                            <img
                                src="https://i.ibb.co/T88njr9/dsa.png"
                                alt=""
                            />
                        </Link>
                <div className={`${styles.noramlFlex}`}>
                
            <Navbar active={activeHeading} />
          </div>
            </div>
        </>
    )
}

export default Header