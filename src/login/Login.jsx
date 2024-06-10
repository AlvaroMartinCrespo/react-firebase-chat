import { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db, storage } from '../lib/firebase';
import { setDoc, doc } from 'firebase/firestore';
import upload from '../lib/upload';

export default function Login() {
  // Hooks
  const [avatar, setAvatar] = useState({
    file: null,
    url: '',
  });

  const [loading, setLoading] = useState(false);

  // Put an imagen
  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  // Handle submit of login
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      // Try to sign in
      toast.loading('Signing in...');
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      toast.dismiss();
      toast.success('Logged in!', {
        autoClose: 500,
      });
    } catch (err) {
      console.error(err);
      // Clear toast
      toast.dismiss();
      setLoading(false);
      toast.error(err.message, {
        autoClose: 1200,
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    const formData = new FormData(e.target);
    const { username, email, password, image } = Object.fromEntries(formData);

    try {
      toast.loading('Creating account...');
      // Upload the image
      let imgUrl = '';
      if (avatar.url) {
        imgUrl = await upload(avatar.file);
      }

      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // Introduce in the db username, email, id nd blocked array of users from the user registered
      await setDoc(doc(db, 'users', res.user.uid), {
        username,
        email,
        avatar: imgUrl ? imgUrl : './avatar.png',
        id: res.user.uid,
        blocked: [],
      });
      // Create in the db de userchats for the user registered
      await setDoc(doc(db, 'userchats', res.user.uid), {
        chats: [],
      });

      // Clear toast
      toast.dismiss();
      setLoading(false);
      toast.success('Account created!');
      e.target.reset();
      setAvatar({
        file: null,
        url: '',
      });
    } catch (err) {
      console.error(err);
      // Clear toast
      toast.dismiss();
      setLoading(false);
      toast.error(err.message, {
        autoClose: 1200,
      });
    }
  };

  return (
    <>
      <div className="flex justify-between h-full">
        <div className="w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md flex justify-center">
          {/* Login Form */}
          <div className="p-4 flex flex-col justify-center items-center w-full">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>
            <form onSubmit={handleSubmitLogin}>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="login-username">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="login-username"
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  name="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {loading ? 'Loading...' : 'Login'}
                </button>
              </div>
            </form>
          </div>
          {/* Register Form */}
          <div className=" p-4 flex flex-col justify-center items-center w-full border-l border-gray-300 dark:border-gray-694">
            <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-white">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="register-username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="register-username"
                  type="text"
                  name="username"
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
                  name="image"
                />
              </div>

              <div className="flex justify-center">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={avatar.url ? avatar.url : './avatar.png'}
                  alt="avatar-img"
                />
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="register-email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="register-email"
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {loading ? 'Loading...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
