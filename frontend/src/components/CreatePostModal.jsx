import React, { useState } from "react";

export default function CreatePostModal({ onClose, onPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onPost({
      title,
      content,
      author: "You",
      date: "Just now",
      comments: 0,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg border border-[#D7C7AD]">
        <h2 className="text-lg font-semibold mb-3 text-[#6B4B2E]">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-[#D1C3A4] rounded-md focus:ring focus:ring-[#A3B76D] outline-none"
            required
          />

          <textarea
            placeholder="Write your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border border-[#D1C3A4] rounded-md h-28 resize-none focus:ring focus:ring-[#A3B76D] outline-none"
            required
          />

          <div className="flex justify-end gap-3 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-md bg-[#6B8E23] text-white hover:bg-[#58731C]"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
