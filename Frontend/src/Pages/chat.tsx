import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

function Chat() {
  return (
    <>
      <div className=" h-screen flex bg-zinc-800 p-4 box-border">
        <Sidebar />
        <ChatWindow />
      </div>
    </>
  );
}

export default Chat;
