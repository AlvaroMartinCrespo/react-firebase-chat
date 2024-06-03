import List from "./list/List"
import Chat from "./chat/Chat"
import Detail from "./detail/Detail"


const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">    
      <div className='container mx-auto p-4 h-[90vh] w-[90vw] rounded bg-[#212121]'>
        <section className="grid grid-cols-3 gap-x-[65px] gap-y-[10px] h-full">
          <List />
          <Chat />
          <Detail />
        </section>
      </div>
    </div>
  )
}

export default App