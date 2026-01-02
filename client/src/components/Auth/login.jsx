import React, { useState } from "react";
import lockimage from '../../assets/lockimage.png'

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const handleLogin = async (e) =>{
        e.preventDefault();

        const res = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_name:email,
                password
            })
        });

        const data = await res.json();

        if(res.ok){
            setMsg("Login Successful!");
            console.log("TOKEN ->", data.token);
            localStorage.setItem("token", data.token);
        }else{
            setMsg(data.message)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center gap-15 bg-gray-50 justify-center w-120 h-150">
                <div>
                    <img src={lockimage} alt="" className="w-40" />
                    <p className="font-bold text-2xl">Welcome!</p>
                </div>

                <div>
                    <form onSubmit={handleLogin}>
                        <div className="mx-auto px-4 flex flex-col self-start justify-center gap-2 ">
                            <label htmlFor="emailId" className="self-start font-bold">Email</label>
                            <input type="text" name="email" placeholder="Enter your email" className="border p-2" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            <label htmlFor="password" className="self-start font-bold" >Password</label>
                            <input type="password" name="password" placeholder="Enter your password" className="border p-2" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button className=" w-96 p-2 bg-sky-500 hover:bg-sky-700 font-bold mt-3 text-white">Log In</button>
                        </div>
                    </form>

                    {msg && <p className="text-center text-red-600 mt-2">{msg}</p>}
                    <div className=" flex w-98 my-3 justify-end">
                        <button className="text-sky-600 ">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

    )
}