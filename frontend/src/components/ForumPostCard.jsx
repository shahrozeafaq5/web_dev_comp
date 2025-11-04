import React from "react";

export default function ForumPostCard({ post }) {
  return (
    <div className="bg-[#FAF6F0] border border-[#E2D5C3] rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-[#6B4B2E]">{post.title}</h2>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>

      <p className="text-gray-700 mb-3">{post.content}</p>

      <div className="flex justify-between text-sm text-gray-600">
        <span>👤 {post.author}</span>
        <span>💬 {post.comments} comments</span>
      </div>
    </div>
  );
}
