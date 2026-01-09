import { useState, useRef, useEffect } from "react";
import downarrow from "../../assets/down-arrow.png";
import { useNavigate, Link } from "react-router-dom";
import avatar from "../../assets/requestedAvatar.png";

export default function Header() {
    // const username = localStorage.getItem("user")
    const username = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(username);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target))
            {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <nav className="bg-blue-500">
            <div className="h-13 flex items-center px-5 justify-between relative">
                {username?.role !== "Admin" && (
                    <div className="absolute left-1/2 -translate-x-1/2 flex gap-4 text-white font-bold">
                        <Link to="/assetrequest">Asset</Link>
                        <Link to="/myrequest">Request</Link>
                    </div>
                )}
            {/* Right section */}
            <div
                ref={dropdownRef}
                className="ml-auto flex items-center gap-2 relative cursor-pointer"
            >
                <img src={avatar} className="w-9 rounded-full" />
                <p className="text-white font-bold">{username?.name}</p>
                <img
                    src={downarrow}
                    className="w-4"
                    onClick={() => setOpen(!open)}
                />
                {/* Dropdown */}
                {open && (
                    <div className="absolute right-0 top-12 bg-blue-500 text-white rounded shadow-md w-25">
                        <ul>
                            <li
                                onClick={handleLogout}
                                className="px-4 py-2 hover:bg-gray-600 rounded cursor-pointer"
                            >
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        </nav >
    );
}