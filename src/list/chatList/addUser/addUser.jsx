import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../../lib/firebase';
import { useUserStore } from '../../../lib/userStore';
import { toast } from 'react-toastify';

export default function AddUser({ onCloseModel }) {
  // Variables
  const textSearch = 'Search';
  const addUser = 'Add User';
  const noUser = 'No User';

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { username } = Object.fromEntries(form);

    try {
      setLoading(true);
      const userRef = collection(db, 'users');
      const q = query(userRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
        setLoading(false);
      } else {
        setLoading(false);
        setUser(null);
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const handleCreateChat = async () => {
    const chatRef = collection(db, 'chats');
    const userChatsRef = collection(db, 'userchats');

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        message: [],
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: '',
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: '',
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });

      toast.success('Chat created', {
        autoClose: 600,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="absolute top-8  bg-slate-700 rounded p-3 drop-shadow-md">
        <div className="flex justify-end">
          <button onClick={onCloseModel}>X</button>
        </div>
        <div className=" p-4">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              className="w-full pl-2 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-400 text-black"
              type="text"
              placeholder="Username"
              name="username"
            />
            <button
              className="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full px-4 py-2"
              type="submit"
            >
              {textSearch}
            </button>
          </form>
        </div>
        {loading ? (
          <>
            <div className=" flex items-center justify-center ">
              <div className="w-12 h-12 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-white"></div>
            </div>
          </>
        ) : (
          <>
            {user ? (
              <>
                <div className="flex gap-4 justify-center p-5 items-center">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={user.avatar ? user.avatar : './avatar.png'}
                      alt="user"
                    />
                    <span>{user.username}</span>
                  </div>
                  <button
                    onClick={handleCreateChat}
                    className="bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full p-2"
                  >
                    {addUser}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center p-10">
                  <span className="italic text-gray-400">{noUser}</span>
                </div>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}
