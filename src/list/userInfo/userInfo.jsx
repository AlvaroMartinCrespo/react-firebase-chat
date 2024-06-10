export default function UserInfo() {
  return (
    <>
      <section className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img className="avatar rounded h-14 w-14" src="./avatar.png" alt="user-image" />
          <h2>Username</h2>
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
