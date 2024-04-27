import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import userDefaultPic from '../assets/userDefaultPic.png'
import 'react-tooltip/dist/react-tooltip.css';
// import { Tooltip } from "react-tooltip";


const Header = () => {

    const {logOut,user} = useAuth();
    const [theme, setTheme] = useState("light");
    
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    
    
        const handleSignOut = () => {
            logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'SignOut successfully done',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch(err => console.log(err))
        }

    const navLinks = (
        <>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/about">All art and Craft</NavLink>
        </li>
        <li>
        <NavLink to="/career">Add craft item</NavLink>
        </li>
        <li>
        <NavLink to="/register">My art and craft</NavLink>
        </li>
    </>
    );    

    return (
        <div>
            
            <div className="navbar border-y-2 mb-4 mx-auto bg-purple-50 md:px-8 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                    </div>
                    <Link to={'/'} className="text-xl md:text-3xl text-black font-black">Artisan Alley</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>

                <div className="navbar-end gap-2 md:gap-5">
                    <div className="dropdown dropdown-end z-10">

                        <div tabIndex={0} role="button" className={user ? 'tooltip tooltip-bottom border-4 border-blue-500 rounded-full' : ''} data-tip={user ? user.displayName : ''}>
                            <div  className="w-10 rounded-full">
                                {
                                    user?.photoURL === null ?
                                        <img className="rounded-full w-full h-full" src={userDefaultPic} />
                                        :
                                        <img className="rounded-full w-full h-full" src={user ? user?.photoURL : userDefaultPic} />
                                }
                            </div>

                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-center">
                            <li><a>Settings</a></li>
                            <li className="text-center">
                                {
                                    user ?
                                    <a onClick={handleSignOut} className="btn-neutral">SignOut</a>
                                    :
                                    <Link to={'/signin'} className="py-1 bg-base-300 ">SignIn</Link>
                                }
                            </li>
                        </ul>
                    </div>

                    {/* dark-theme */}
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" onChange={handleToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>

                </div>
            </div>


        </div>
    );
};

export default Header;