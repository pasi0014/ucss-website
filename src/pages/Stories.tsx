import React from "react";
import Posts, { Post } from "./posts/Posts";
import { Link } from "react-router-dom";

export const Stories = () => {
  const posts = Posts.getPosts();
  // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <section className="text-gray-400 bg-gray-100 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto shadow rounded mt-2 mb-2">
        <div className="-my-8 divide-y-2 divide-gray-800">
          {/* POST */}
          {posts.map((post: Post) => {
            return (
              <div key={post.id} className="py-8 flex flex-col md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="mt-1 text-gray-500 text-sm">
                    {post.uploaded_at.toDateString()}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-700 title-font mb-2">
                    {post.author}
                  </h2>
                  <p className="leading-relaxed text-gray-900">{post.body}</p>
                  <Link
                    to={`/story/${post.id}`}
                    className="text-indigo-400 inline-flex items-center mt-4"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
