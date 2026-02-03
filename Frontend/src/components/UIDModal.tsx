type UIDModalProps = {
  onClose: () => void;
};

export default function UIDModal({ onClose }: UIDModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur + dark overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className="relative bg-neutral-800 text-white p-6 rounded-lg w-80 shadow-xl">
        <h2 className="text-lg font-semibold mb-4">Enter your UID</h2>

        <input
          type="text"
          placeholder="UID"
          className="w-full px-3 py-2 rounded bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-3 py-1 text-sm text-gray-300 hover:text-white"
          >
            Cancel
          </button>

          <button className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded text-sm">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
