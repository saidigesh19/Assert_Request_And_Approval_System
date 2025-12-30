import React from "react";
import lockimage from '../assets/lockimage.png'

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center gap-15 bg-gray-50 justify-center w-120 h-150">
                <div>
                    <img src={lockimage} alt="" className="w-40"/>
                    <p className="font-bold text-2xl">Welcome!</p>
                </div>

                <div>
                    <form method="POST">
                        <div className="mx-auto px-4 flex flex-col self-start justify-center gap-2 ">
                            <label htmlFor="emailId" className="self-start font-bold">Email</label>
                            <input type="text" name="email" placeholder="Enter your email" className="border p-2" />
                            <label htmlFor="password" className="self-start font-bold">Password</label>
                            <input type="password" name="password" placeholder="Enter your password" className="border p-2" />
                            <button class=" w-96 p-2 bg-sky-500 hover:bg-sky-700 font-bold mt-3 text-white">Log In</button>
                        </div>
                    </form>
                    <div className=" flex w-98 my-3 justify-end">
                         <button className="text-sky-600 ">Sign Up</button>
                </div>
                    </div>

            </div>

        </div>

    )
}