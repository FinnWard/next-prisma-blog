import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      className="flex flex-col rounded bg-white p-4 hover:cursor-pointer  hover:shadow-md"
      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
    >
      <h2 className="font-bold">{post.title}</h2>
      <small className="italic">By {authorName}</small>
      <ReactMarkdown className="pt-4">{post.content}</ReactMarkdown>
    </div>
  );
};

export default Post;
