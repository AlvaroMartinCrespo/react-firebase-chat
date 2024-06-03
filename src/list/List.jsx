import UserInfo from "./userInfo/userInfo"
import ChatList from "./chatList/ChatList"

export default function List() {
    return <>
        <section className="flex flex-col h-full overflow-hidden">
            <UserInfo />
            <hr className="border-1 border-white rounded" />
            <ChatList />
        </section>
    </>
}