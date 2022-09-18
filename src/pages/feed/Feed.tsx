import React from "react";
import Navbar from "../../components/nav/Navbar";
import BottomNav from "../../components/nav/BottomNav";
import Post from "../../components/post/Post";
import Qna from "../../components/qna/Qna";

export default function Feed() {
  return (
    <div>
      <Navbar />
      <Post />
      <Qna />
      <Post />
      <Qna />
      <Post />
      <Qna />
      <Post />
      <Qna />
      <BottomNav />
    </div>
  );
}
