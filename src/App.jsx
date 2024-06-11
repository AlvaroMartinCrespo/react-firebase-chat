import List from './list/List';
import Chat from './chat/Chat';
import Detail from './detail/Detail';
import Login from './login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid);
      } else {
        fetchUserInfo(null);
      }

      return () => {
        unSub();
      };
    });
  }, [fetchUserInfo]);

  if (isLoading)
    return (
      <section className="bg-slate-900 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid border-gray-300"></div>
          <div className="mt-4 text-lg font-semibold text-white">Loading...</div>
        </div>
      </section>
    );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto p-4 h-[90vh] w-[90vw] rounded bg-[#212121]">
        {currentUser ? (
          <>
            <section className="grid grid-cols-4 gap-x-[40px]  h-full">
              <div className="col-span-1 overflow-hidden">
                <List />
              </div>
              <div className="col-span-2 overflow-hidden">
                <Chat />
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <Detail />
              </div>
            </section>
          </>
        ) : (
          <>
            <Login />
          </>
        )}
        <div className="text-black">
          <ToastContainer toastStyle={{ backgroundColor: 'gray' }} />
        </div>
      </div>
    </div>
  );
};

export default App;
