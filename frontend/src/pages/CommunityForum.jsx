import React, { useState } from "react";
import ForumPostCard from "../components/ForumPostCard";
import CreatePostModal from "../components/CreatePostModal";

export default function CommunityForum() {
  const [posts, setPosts] = useState([
    {
      title: "Sustainable irrigation methods?",
      content:
        "What’s the best way to reduce water use during dry seasons without harming yield?",
      author: "Farmer Adeel",
      date: "2 days ago",
      comments: 3,
    },
    {
      title: "Organic fertilizers that work best?",
      content:
        "Looking for natural fertilizer options that have worked well for you guys!",
      author: "Zara",
      date: "5 hours ago",
      comments: 5,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="bg-[#F9F4ED] min-h-screen text-[#5B432C] font-sans p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#7A4E29]">
            🌾 Community Forum
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#8C9551] hover:bg-[#7A8549] text-white px-5 py-2 rounded-md shadow-md font-medium"
          >
            + New Post
          </button>
        </div>

        {/* Posts */}
        <div className="grid gap-5">
          {posts.map((post, index) => (
            <ForumPostCard key={index} post={post} />
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <CreatePostModal
            onClose={() => setShowModal(false)}
            onPost={addPost}
          />
        )}
      </div>
    </div>
  );
}
