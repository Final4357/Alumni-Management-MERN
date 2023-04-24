import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const SignupAL = () => {
    const [email, setEmail] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [sid, setSid] = useState("");
    const [dept, setDept] = useState("");
    const [batch, setBatch] = useState("");
    const [gender, setGender] = useState("");
    const [degree, setDegree] = useState("");

    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
      };

    const handleSubmit = () => {
        console.log("ffff");
    };
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register as an Allumni
                </h2>
            </div>
            <div className="mt-8  lg:mx-auto lg:w-full lg:max-w-xl">
                <div className="bg-white py-8 px-4 shadow lg:rounded-lg lg:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex gap-20 ">
                            <div>
                                <label
                                    htmlFor="text"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="text"
                                        autoComplete="fist name"
                                        required
                                        value={fname}
                                        onChange={(e) => setfName(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="text"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="text"
                                        autoComplete="last name"
                                        required
                                        value={lname}
                                        onChange={(e) => setlName(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-20">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="text"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Student ID
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="text"
                                        autoComplete="name"
                                        required
                                        value={sid}
                                        onChange={(e) => setSid(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-32">
                            <label className="flex gap-x-2  ">
                                <div className="sm:text-sm">Degree</div>
                                <select
                                    name="Degree"
                                    value={degree}
                                    required
                                    onChange={(e) => setDegree(e.target.value)}>
                                    <option >----</option>
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="Masters">Masters</option>

                                </select>
                            </label>
                            <label className="flex gap-2  ">
                                <div className="sm:text-sm"> Dept</div>
                                <select
                                    name="Dept"
                                    value={dept}
                                    required
                                    onChange={(e) => setDept(e.target.value)}>
                                    <option >----</option>
                                    <option value="CSE">CSE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="ETE">ETE</option>

                                </select>
                            </label>

                        </div>
                        <div className="flex gap-20 ">
                            <div >
                                <label
                                    htmlFor="text"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Position
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="text"
                                        
                                        autoComplete="fist name"
                                        required
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="text"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Company Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="text"
                                        autoComplete="last name"
                                        required
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-20 ">
                            <div>
                                <label
                                    htmlFor="text"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Batch
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="text"
                                        autoComplete="fist name"
                                        required
                                        value={batch}
                                        onChange={(e) => setBatch(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <label>
                                <div className="sm:text-sm"> Gender</div>
                                <select
                                    name="Dept"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}>
                                        <option>----</option>

                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>

                                </select>
                            </label>

                        </div>


                        <div className="flex gap-20">
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        type={visible ? "text" : "password"}
                                        name="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                    {visible ? (
                                        <AiOutlineEye
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(true)}
                                        />
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        type={visible ? "text" : "password"}
                                        name="password"
                                        autoComplete="current-password"
                                        required
                                        value={cpassword}
                                        onChange={(e) => setCPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                    {visible ? (
                                        <AiOutlineEye
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(true)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="avatar"
                                className="block text-sm font-medium text-gray-700"
                            ></label>
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    {avatar ? (
                                        <img
                                            src={URL.createObjectURL(avatar)}
                                            alt="avatar"
                                            className="h-full w-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <RxAvatar className="h-8 w-8" />
                                    )}
                                </span>
                                <label
                                    htmlFor="file-input"
                                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="file-input"
                                        accept=".jpg,.jpeg,.png"
                                        onChange={handleFileInputChange}
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                        <div className={`${styles.noramlFlex} w-full`}>
                            <h4>Sign up as an User</h4>
                            <Link to="/sign-up" className="text-blue-600 pl-2">
                                Sign Up
                            </Link>
                        </div>

                        <div className={`${styles.noramlFlex} w-full`}>
                            <h4>Already have an account?</h4>
                            <Link to="/login" className="text-blue-600 pl-2">
                                Sign In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupAL;
