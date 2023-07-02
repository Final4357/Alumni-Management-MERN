import React, { Fragment } from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdPassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import store from "../../redux/store/store";
import { setActive } from "../../redux/state/profileslice";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../helper/sessionHelper";

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const active = useSelector((state) => state.profile.active);
  const logoutHandler = () => {
    // axios
    //   .get(`${server}/user/logout`, { withCredentials: true })
    //   .then((res) => {
    //     toast.success(res.data.message);
    //     window.location.reload(true);
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data.message);
    //   });
  };
  return (
    <Fragment>
      <div className="w-full border bg-slate-100 flex md:flex-col justify-between shadow py-4 px-[1rem] md:px-4 lg:pt-8">
        <div
          className="flex items-center cursor-pointer p-2 md:p-0 md:w-full md:mb-8"
          onClick={() => store.dispatch(setActive(1))}
        >
          <RxPerson size={20} color={active === 1 ? "red" : ""} />
          <span
            className={`md:pl-3 ${active === 1 ? "text-[red]" : ""
              } md:block hidden`}
          >
            Profile
          </span>
        </div>

        {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`lg:pl-3 ${
            active === 2 ? "text-[red]" : ""
          } lg:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`lg:pl-3 ${
            active === 3 ? "text-[red]" : ""
          } lg:block hidden`}
        >
          Refunds
        </span>
      </div> */}

        <div
          className="flex items-center cursor-pointer p-2 md:p-0 md:w-full md:mb-8"
          onClick={() => store.dispatch(setActive(4))}
        >
          <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
          <span
            className={`md:pl-3 ${active === 4 ? "text-[red]" : ""
              } hidden md:block`}
          >
            Inbox
          </span>
        </div>
        {
          getUserDetails().isAlumni &&
          <>
            <div
              className="flex items-center cursor-pointer p-2 md:p-0 md:w-full md:mb-8"
              onClick={() => store.dispatch(setActive(5))}
            >
              <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
              <span
                className={`md:pl-3 ${active === 5 ? "text-[red]" : ""
                  } md:block hidden`}
              >
                Post Jobs
              </span>
            </div>

            <div
              className="flex items-center cursor-pointer p-2 md:p-0 md:w-full md:mb-8"
              onClick={() => store.dispatch(setActive(6))}
            >
              <RiLockPasswordLine size={20} color={active === 6 ? "red" : ""} />
              <span
                className={`md:pl-3 ${active === 6 ? "text-[red]" : ""
                  } md:block hidden`}
              >
                Posted Jobs
              </span>
            </div>
          </>
        }

        <div
          className="flex items-center cursor-pointer p-2 md:p-0 md:w-full md:mb-8"
          onClick={() => store.dispatch(setActive(3))}
        >
          <MdPassword size={20} color={active === 3 ? "red" : ""} />
          <span
            className={`md:pl-3 ${active === 3 ? "text-[red]" : ""
              } md:block hidden`}
          >
            Change Password
          </span>
        </div>



        {/* {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 7 ? "red" : ""}
            />
            <span
              className={`lg:pl-3 ${
                active === 8 ? "text-[red]" : ""
              } md:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )} */}
        {/* <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "red" : ""} />
        <span
          className={`lg:pl-3 ${
            active === 8 ? "text-[red]" : ""
          } md:block hidden`}
        >
          Log out
        </span>
      </div> */}
      </div>
    </Fragment>
  );
};

export default ProfileSidebar;