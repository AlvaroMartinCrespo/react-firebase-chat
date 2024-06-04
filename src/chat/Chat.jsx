import EmojiPicker from "emoji-picker-react"
import { useState, useRef } from "react"


export default function Chat() {
    // Hooks
    const [open, setOpen] = useState(false)
    const inputRef = useRef(null)

    // Open emoji picker
    const handleSetOpen = () => {
        setOpen(!open)
    }

    // Add emoji to input
    const addEmojiInput = (emoji) => {
        const value = inputRef.current.value
        inputRef.current.value = value + emoji.emoji
        setOpen(false)
    }

    return<>
        <section className="container mx-auto my-3 flex flex-col justify-between h-full overflow-hidden py-3">
            {/* Top */}
            <div className="border-b border-gray-300 pb-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <img className="rounded-full h-10 w-10" src="./avatar.png" alt="avatar" />
                        <span>Username</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <img className="h-4 w-4 cursor-pointer" src="./phone.png" alt="phone-user" />
                        <img className="h-4 w-4 cursor-pointer" src="./video.png" alt="video-user" />
                        <img className="h-4 w-4 cursor-pointer" src="./info.png" alt="info-user" />
                    </div>
                </div>
            </div>
            {/* Center */}
            <div className="overflow-y-auto py-4 px-2 flex flex-col gap-3 h-full">
                {/* Message 1 */}
                <div className="flex items-center justify-start">
                    <div className="flex items-center gap-3 w-[260px] bg-slate-800 p-3 rounded-lg">
                        <img className="rounded-full h-5 w-5" src="./avatar.png" alt="avatar" />
                        <div className="flex flex-col">
                            <p className="text-sm">Este es mi primer mensaje en esta aplicacion de chat en tiempo real</p>
                            <span className="text-xs text-gray-500 italic">Hace 1 min</span>
                        </div>
                    </div>
                </div>
                {/* Message 2 */}
                <div className="flex items-center justify-end">
                    <div className="flex items-center gap-3 w-[260px] bg-blue-800 p-3 rounded-lg">
                        <img className="rounded-full h-5 w-5" src="./avatar.png" alt="avatar" />
                        <div className="flex flex-col">
                            <p className="text-sm">Este es mi primer mensaje en esta aplicacion de chat en tiempo real</p>
                            <span className="text-xs text-gray-500 italic">Hace 1 min</span>
                        </div>
                    </div>
                </div>{/* Message 1 */}
                <div className="flex items-center justify-start">
                    <div className="flex items-center gap-3 w-[260px] bg-slate-800 p-3 rounded-lg">
                        <img className="rounded-full h-5 w-5" src="./avatar.png" alt="avatar" />
                        <div className="flex flex-col">
                            <p className="text-sm">Este es mi primer mensaje en esta aplicacion de chat en tiempo real</p>
                            <span className="text-xs text-gray-500 italic">Hace 1 min</span>
                        </div>
                    </div>
                </div>
                {/* Message 1 */}
                <div className="flex items-center justify-start">
                    <div className="flex items-center gap-3 w-[260px] bg-slate-800 p-3 rounded-lg">
                        <img className="rounded-full h-5 w-5" src="./avatar.png" alt="avatar" />
                        <div className="flex flex-col">
                            <p className="text-sm">Este es mi primer mensaje en esta aplicacion de chat en tiempo real</p>
                            <span className="text-xs text-gray-500 italic">Hace 1 min</span>
                        </div>
                    </div>
                </div>
                {/* Message 2 */}
                <div className="flex items-center justify-end">
                    <div className="flex items-center gap-3 w-[260px] bg-blue-800 p-3 rounded-lg">
                        <img className="rounded-full h-5 w-5" src="./avatar.png" alt="avatar" />
                        <div className="flex flex-col">
                            <p className="text-sm">Este es mi primer mensaje en esta aplicacion de chat en tiempo real</p>
                            <span className="text-xs text-gray-500 italic">Hace 1 min</span>
                        </div>
                    </div>
                </div>{/* Message 1 */}
                <div className="flex items-center justify-start">
                    <div className="flex items-center gap-3 w-[260px] bg-slate-800 p-3 rounded-lg">
                        <img className="rounded-full h-5 w-5" src="./avatar.png" alt="avatar" />
                        <div className="flex flex-col">
                            <p className="text-sm">Este es mi primer mensaje en esta aplicacion de chat en tiempo real</p>
                            <span className="text-xs text-gray-500 italic">Hace 1 min</span>
                        </div>
                    </div>
                </div>
                {/* Message 2 imagen*/}
                <div className="flex items-center justify-end">
                    <div className="flex items-center gap-3 w-[260px] rounded-lg">
                        <div className="flex flex-col">
                            <img className="rounded-lg" src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen-de-prueba" />
                        </div>
                    </div>
                </div>
                {/* Message 2 */}
                <div className="flex items-center justify-end">
                    <div className="flex items-center gap-3 w-[260px] bg-blue-800 p-3 rounded-lg">
                        <img className="rounded-full h-5 w-5" src="./avatar.png" alt="avatar" />
                        <div className="flex flex-col">
                            <p className="text-sm">Este es mi primer mensaje en esta aplicacion de chat en tiempo real</p>
                            <span className="text-xs text-gray-500 italic">Hace 1 min</span>
                        </div>
                    </div>
                </div>
                {/* Message 1 imagen*/}
                <div className="flex items-center justify-start">
                    <div className="flex items-center gap-3 w-[260px] p-3 rounded-lg">
                        <div className="flex flex-col">
                            <img className="rounded-lg" src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen-de-prueba" />
                        </div>
                    </div>
                </div>

            </div>
            {/* Bottom */}
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
                <div className="flex items-center gap-3">
                    <img className="w-5 h-5 cursor-pointer" src="./img.png" alt="image" />
                    <img className="w-5 h-5 cursor-pointer" src="./camera.png" alt="camera" />
                    <img className="w-5 h-5 cursor-pointer" src="./mic.png" alt="mic" />
                </div>
                <div>
                    <input ref={inputRef} className="w-full pl-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-400 text-black" type="text" placeholder="Type a message..." />
                </div>
                <div className="flex items-center gap-3">
                    <img onClick={handleSetOpen} className="w-5 h-5 cursor-pointer" src="./emoji.png" alt="send" />
                    <div className="absolute bottom-28">
                        <EmojiPicker open={open} onEmojiClick={addEmojiInput} />
                    </div>
                    <button>Send</button>
                </div>
            </div>
        </section>
    </>
}