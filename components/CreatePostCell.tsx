'use client'

import { Post } from "@/types/Posts";
import Image from "next/image";
import { useState } from "react";

export default function CreatePostCell() {
  let endpoint = "https://chatdev-wuzwgwv35a-ue.a.run.app/api";

  const [message, setMessage] = useState("");

  const sendPost = async () => {
    fetch(`${endpoint}/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message
      })
    }).then((response) => { 
      if (response.ok) {
        console.log("Post sent successfully");
        setMessage("");
      } else {
        console.log("Post failed to send");
        alert("Post failed to send");
      }
    });
  }

  return (
    <div className="p-6 flex flex-col gap-4 bg-gray-800">
      <textarea 
        className="bg-gray-700 p-2 rounded h-[134px]"
        placeholder="What's on your mind?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex gap-4 items-center">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            sendPost();
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}
