import { useState } from "react"
import { toast } from "react-toastify"



export default function Login() {

    // Hooks
    const [avatar, setAvatar] = useState({
        file: null,
        url:""
    })

    // Put an imagen    
    const handleAvatar = (e) => {
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    // Handle submit of login
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        toast.success("Success", {
            autoClose: 700
        })
    }

    return <>
        <div className="flex justify-between h-full">
            <div className="w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md flex justify-center">
                {/* Login Form */}
                <div className="p-4 flex flex-col justify-center items-center w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>
                <form onSubmit={handleSubmitLogin}>
                    <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="login-username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        id="login-username"
                        type="text"
                        placeholder="Username"
                    />
                    </div>
                    <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="login-password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="login-password"
                        type="password"
                        placeholder="******************"
                    />
                    </div>
                    <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                
                    >
                        Login
                    </button>
                    </div>
                </form>
                </div>
                {/* Register Form */}
                <div className=" p-4 flex flex-col justify-center items-center w-full border-l border-gray-300 dark:border-gray-694">
                <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-white">Register</h2>
                <form>
                    <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="register-username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        id="register-username"
                        type="text"
                        placeholder="Username"
                    />
                        </div>
                        <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="file">
                        Upload an Imagen
                    </label>
                    <input
                        className="text-white shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        id="file"
                                type="file"
                                onChange={handleAvatar}
                    />
                        </div>
                        {
                            avatar.file ? <>
                                <div className="flex justify-center">
                                    <img className="w-20 h-20 rounded-full object-cover" src={avatar.url} alt="avatar-img" />
                                </div></>
                                : <></>
                        }

                    <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="register-email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        id="register-email"
                        type="email"
                        placeholder="Email"
                    />
                    </div>
                    <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="register-password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="register-password"
                        type="password"
                        placeholder="******************"
                    />
                    </div>
                    <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
    </>
}