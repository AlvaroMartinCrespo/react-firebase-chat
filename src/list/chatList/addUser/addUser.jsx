import { useState } from 'react';

export default function AddUser() {
  const [user, setUser] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    setUser(!user);
  };

  return (
    <>
      <section className="absolute top-8  bg-slate-700 rounded p-3 drop-shadow-md">
        <div className=" p-4">
          <form className="flex gap-3" onSubmit={handleAddUser}>
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
              Search
            </button>
          </form>
        </div>
        {user ? (
          <>
            <div className="flex gap-4 justify-center p-5 items-center">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full" src="./avatar.png" alt="user" />
                <span>Username</span>
              </div>
              <button className="bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full p-2">
                Add User
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center p-10">
              <span className="italic text-gray-400">No user</span>
            </div>
          </>
        )}
      </section>
    </>
  );
}
