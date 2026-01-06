import React from "react";
import User from "../../assets/user.png";
import downarrow from "../../assets/down-arrow.png"

export default function Header() {
    return (
        <nav className="bg-blue-500">
            <div className="h-13 flex items-center px-5 justify-between">
                
                {/* Left / center section */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 text-white font-bold">
                    <a href="/assetrequest">Asset</a>
                    <a href="/myrequest">Request</a>
                </div>

                {/* Right section */}
                <div className="ml-auto flex items-center gap-2">
                    <img src={User} alt="profile" className="w-9 rounded-full"/>
                    <p className="text-white font-bold">Plam</p>
                    <img src={downarrow} alt="" className="w-4"/>
                </div>
            </div>
        </nav>
    );
}
