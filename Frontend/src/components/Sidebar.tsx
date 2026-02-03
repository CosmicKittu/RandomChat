import { useState } from "react";
import UIDModal from "./UIDModal";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside className="w-80 box-border bg-neutral-700 text-white p-4 flex flex-col items-center rounded-lg ">
        <h1 className="text-xl font-bold mb-6 text-red-400">RandomChat</h1>
        <button
          onClick={() => setOpen(true)}
          className="px-20 py-2 bg-orange-200 hover:bg-orange-300 rounded-md transition text-black font-bold my-2"
        >
          Enter UID
        </button>
        <button className="px-10 py-2 bg-red-400 hover:bg-red-500 rounded-2xl transition text-black font-bold">
          Random
        </button>
      </aside>
      {open && <UIDModal onClose={() => setOpen(false)} />}
    </>
  );
}
