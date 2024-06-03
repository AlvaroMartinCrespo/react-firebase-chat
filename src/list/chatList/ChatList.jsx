import { useState } from "react"

export default function ChatList() {
    const [addModel, setAddModel] = useState(false)

    const handleAddModel = () => {
        setAddModel(!addModel)
    }

    return <>
        <section className="container my-5 h-full overflow-y-auto">
            <div className="flex items-center gap-5 w-full">
                <div className="relative max-w-md w-full">
                    <img className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" src="./search.png" alt="search" />
                    <input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-400 text-black" type="text" placeholder="Search" />
                </div>
                <img onClick={handleAddModel} className="h-6 w-6 cursor-pointer" src={addModel ? "./minus.png" : "./plus.png"} alt="plus" />
            </div>
            
                <div className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition hover:bg-[#333]">
                    <img className="h-16 w-16 rounded-full" src="./avatar.png" alt="avatar" />
                    <div>
                     <span>Chat Name</span>
                     <p className="text-xs">Hello</p>
                   </div>
            </div>
            <div className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition ease-in-out hover:bg-[#333]">
                <img className="h-16 w-16 rounded-full" src="./avatar.png" alt="avatar" />
                <div>
                    <span>Chat Name</span>
                    <p className="text-xs">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition ease-in-out hover:bg-[#333]">
                <img className="h-16 w-16 rounded-full" src="./avatar.png" alt="avatar" />
                <div>
                    <span>Chat Name</span>
                    <p className="text-xs">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition ease-in-out hover:bg-[#333]">
                <img className="h-16 w-16 rounded-full" src="./avatar.png" alt="avatar" />
                <div>
                    <span>Chat Name</span>
                    <p className="text-xs">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition ease-in-out hover:bg-[#333]">
                <img className="h-16 w-16 rounded-full" src="./avatar.png" alt="avatar" />
                <div>
                    <span>Chat Name</span>
                    <p className="text-xs">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition ease-in-out hover:bg-[#333]">
                <img className="h-16 w-16 rounded-full" src="./avatar.png" alt="avatar" />
                <div>
                    <span>Chat Name</span>
                    <p className="text-xs">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition ease-in-out hover:bg-[#333]">
                <img className="h-16 w-16 rounded-full" src="./avatar.png" alt="avatar" />
                <div>
                    <span>Chat Name</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition ease-in-out hover:bg-[#333]">
                <img className="h-16 w-16 rounded-full" src="./avatar.png" alt="avatar" />
                <div>
                    <span>Chat Name</span>
                    <p>Hello</p>
                </div>
            </div>

            </section>
    </>
}