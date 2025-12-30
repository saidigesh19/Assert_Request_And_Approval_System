import person from "../assets/person.svg"

const Register = () => {
    return(
        <div className="w-full font-sans-serif  flex justify-center">
            <div className="container justify-center shadow-md rounded-sm bg-gray-50 h-150 item-center w-120 p-3">
                <div className="Logo flex w-full justify-center">
                    <img className="w-20" src={person} alt="person-img" />
                </div>
                <div className="page-title">
                    <h2 className="font-semibold text-xl text-black">Sign Up!</h2>
                </div>
                <form className="flex p-5 flex-col">
                    <label className="flex font-semibold item-start my-1 text-black">Name</label>
                    <input className="border-1 rounded-sm h-9 bg-white border-gray-300 p-2 "type="text" placeholder="Enter Your name"/>
                     <label className="flex font-semibold item-start my-1 text-black">Email</label>
                    <input className="border-1 rounded-sm h-9 bg-white  border-gray-300 p-2" type="text" placeholder="Enter your email"/>
                     <label className="flex font-semibold item-start my-1  text-black">Role</label>
                    <select className="border-1 rounded-sm h-9  bg-white border-gray-300 p-2" type="dropdown" placeholder="Select the role">
                        <option>Select the role</option>
                        <option>Employee</option>
                        <option>Admin</option>
                    </select>
                     <label className="flex font-semibold item-start my-1  text-black">Password</label>
                    <input className="border-1 rounded-sm h-9 bg-white  border-gray-300 p-2"type="password" placeholder="Enter your password"/>
                     <label className="flex font-semibold item-start my-1  text-black">Confirm Password</label>
                     <input className="border-1 rounded-sm bg-white  border-gray-300 h-9 p-2"type="password" placeholder="Confirm your password"/>
                    <button className="bg-sky-700 font-semibold cursor-pointer rounded-sm  mt-5 h-8 text-white" type="submit">Sign Up</button>
                </form>
                <div className="flex p-3 flex-row justify-start">
                    <label className="text-sky-700 ">Already have an account?</label>
                    <div className="ml-45"></div>
                   <button className="text-sky-700 cursor-pointer">Login in</button>
                </div>
            </div>
        </div>
    )
}
export default Register