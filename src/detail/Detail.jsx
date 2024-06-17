import { useChatStore } from '../lib/chatStore';
import { auth } from '../lib/firebase';

export default function Detail() {
  const logOut = () => {
    auth.signOut();
  };

  const { user } = useChatStore();

  return (
    <>
      <section className="container mx-auto">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col justify-center items-center gap-3 my-10 border-b border-gray-300 pb-10">
            <img className="rounded-full w-48 h-48" src="./avatar.png" alt="avatar" />
            <h2 className="text-xl">{user.username}</h2>
            <span className="text-sm">{user.email}</span>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-red-500 text-white dark:bg-red-700 dark:text-gray-200 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full px-4 py-2 "
              onClick={logOut}
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
