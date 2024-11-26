"use client";
import React, { useState} from "react";

export default function CommentSection() {
  const [comments, setComments] = useState<
    { username: string; comment: string }[]
  >([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");


  const handleAddComment = async () => {
      if (username && comment) {
        setComments([...comments, {username, comment}]);
        setUsername("");
        setComment("");
      }
    }
  return (
    <div className="max-w-2xl mx-auto p-4 text-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-400">Comments</h2>
      {comments.length > 0 ? (
        <div>
          {comments.map((newComments, index) => (
            <div key={index}>
              <div className="p-4">
              <hr />
              <p>{newComments.username}</p> 
              <p>{newComments.comment}</p> 
              <hr  className="mb-2"/>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No Comments yet, Be the first to comment</div>
      )}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2"
        />
        <textarea
          name="comment"
          value={comment}
          placeholder="Write a comment..."
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="border rounded p-1"
        ></textarea>
        <button onClick={handleAddComment} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Add Comment</button>
      </div>
    </div>
  );
}
