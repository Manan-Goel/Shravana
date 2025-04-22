import { useState } from "react";
import { motion } from "framer-motion";

const Community = () => {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("Events");

  const publishPost = () => {
    if (post.trim()) {
      setPosts([{ user: "You", content: post, time: "Just now" }, ...posts]);
      setPost("");
    }
  };

  return (
    <div id="community" className="my-10 px-4 text-white">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-32 text-center text-4xl font-bold"
      >
        COMMUNITY
      </motion.h2>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">

        {/* Left: Feed Section */}
        <div className="flex-1">
          {/* Create Post */}
          <div className="bg-neutral-800 p-4 rounded mb-6">
            <p className="mb-2 text-lg font-semibold">Create post</p>
            <input
              type="text"
              placeholder="What's up?"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="w-full p-2 rounded border mb-3 text-black"
            />
            <button
              onClick={publishPost}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Publish
            </button>
          </div>

          {/* Posts Feed */}
          {posts.map((p, idx) => (
            <div key={idx} className="bg-neutral-800 p-4 rounded mb-4">
              <div className="text-sm text-gray-400 mb-1">
                {p.user} • {p.time}
              </div>
              <p className="text-white">{p.content}</p>
            </div>
          ))}
        </div>

        {/* Right: Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Tabs */}
          <div className="flex space-x-4 text-sm font-medium mb-4">
            {["Events", "News", "Soon"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-1 px-3 rounded ${
                  activeTab === tab ? "bg-blue-600 text-white" : "bg-neutral-700 text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Event Box */}
          {activeTab === "Events" && (
            <div className="bg-neutral-800 p-4 rounded space-y-4">
              <p className="text-yellow-300 text-sm">Upcoming event</p>
              <h3 className="text-xl font-bold">Golden Boot</h3>
              <p className="text-gray-300 text-sm">
              The person who takes the most steps will be the winner. Will we try to prepare something for this occasion?
              </p>
              <div>
                <p className="text-sm text-gray-400">Task: Practice</p>
                <p className="text-sm text-gray-400">Date: 13.07 - 01.08.2020</p>
              </div>
              <div className="flex space-x-2 text-sm">
                <span className="bg-blue-500 px-2 py-1 rounded">Wireframes</span>
                <span className="bg-green-500 px-2 py-1 rounded">Instructions</span>
              </div>
              <button className="bg-blue-600 text-white mt-2 py-2 px-4 rounded hover:bg-blue-700">
                Take part
              </button>
            </div>
          )}

          {/* News Tab Placeholder */}
          {activeTab === "News" && (
            <div className="bg-neutral-800 p-4 rounded text-gray-300">
              <p>Stay tuned! News updates will appear here soon.</p>
            </div>
          )}

          {/* Soon Tab Placeholder */}
          {activeTab === "Soon" && (
            <div className="bg-neutral-800 p-4 rounded text-gray-300">
              <p>Exciting features coming soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
