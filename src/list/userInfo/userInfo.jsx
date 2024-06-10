import { useUserStore } from '../../lib/userStore';

export default function UserInfo() {
  const { currentUser } = useUserStore();
  return (
    <>
      <section className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            className="avatar rounded-full h-14 w-14 object-cover"
            src={currentUser.avatar ? currentUser.avatar : './avatar.png'}
            alt="user-image"
          />
          <h2>{currentUser.username}</h2>
        </div>
        <div className="flex items-center gap-5 p-2 rounded">
          <img className="h-6 w-6 cursor-pointer" src="./more.png" alt="add" />
          <img className="h-6 w-6 cursor-pointer" src="./video.png" alt="video" />
          <img className="h-6 w-6 cursor-pointer" src="./edit.png" alt="edit" />
        </div>
      </section>
    </>
  );
}
