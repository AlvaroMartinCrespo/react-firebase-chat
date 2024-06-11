import { useEffect, useState } from 'react';
import AddUser from './addUser/addUser';
import { useUserStore } from '../../lib/userStore';
import { doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function ChatList() {
  // Variables
  const noChats = 'No Chats Yet';

  //

  const [chats, setChats] = useState([]);
  const [addModel, setAddModel] = useState(false);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'userchats', currentUser.id), async (res) => {
      const items = res.data().chats;
      const promises = items.map(async (item) => {
        const docRef = doc(db, 'users', item.receiverId);
        const docSnap = await getDoc(docRef);

        const user = docSnap.data();
        return { ...item, user };
      });
      const chatData = await Promise.all(promises);

      setChats(chatData.sort((a, b) => b.updateAt - a.updateAt));
    });
    return () => unSub();
  }, [currentUser.id]);

  const handleAddModel = () => {
    setAddModel(!addModel);
  };

  return (
    <>
      <section className="container my-5 h-full overflow-y-auto">
        <div className="flex items-center gap-5 w-full">
          <div className="relative max-w-md w-full">
            <img
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              src="./search.png"
              alt="search"
            />
            <input
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-400 text-black"
              type="text"
              placeholder="Search"
            />
          </div>
          <img
            onClick={handleAddModel}
            className="h-6 w-6 cursor-pointer"
            src={addModel ? './minus.png' : './plus.png'}
            alt="plus"
          />
        </div>

        {chats.length === 0 ? (
          <div className="flex justify-center mt-10">
            <span className="text-xs text-gray-500 italic">{noChats}</span>
          </div>
        ) : (
          chats.map((chat) => (
            <div
              className="flex items-center gap-5 mt-5 cursor-pointer border-b p-5 rounded transition hover:bg-[#333]"
              key={chat.chatId}
            >
              <img
                className="h-16 w-16 rounded-full"
                src={chat.user.avatar ? chat.user.avatar : './avatar.png'}
                alt="avatar"
              />
              <div>
                <span>{chat.user.username}</span>
                <p className="text-xs">{chat.lastMessage}</p>
              </div>
            </div>
          ))
        )}

        {addModel ? (
          <>
            <AddUser onCloseModel={handleAddModel} />
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
