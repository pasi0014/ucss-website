import React from "react";
import { StoryType } from "./posts/Posts";
import { Link } from "react-router-dom";
import { PdfView } from "./PdfView";

function RenderSignleStory(post: any): JSX.Element {
  const p: StoryType = post;
  if (p.post.id !== "2") {
    return (
      <section className="text-gray-400 bg-gray-100 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto shadow rounded mt-2 mb-2">
          <div className="-my-8 divide-y-2 divide-gray-800">
            <div key={p.post.id} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">
                  {p.post.uploaded_at.toDateString()}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-700 title-font mb-2">
                  {p.post.author}
                </h2>
                <p className="leading-relaxed text-gray-900">{p.post.body}</p>
                <p className="leading-relaxed text-gray-900">
                  {p.post.extendedBody}
                </p>
              </div>
              <div className="flex mt-3">
                <Link to="/stories">
                  <button className="btn bg-gray-600 text-white px-3 py-2 hover:bg-gray-500">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (p.post.id === "2") {
    return (
      <section className="text-gray-400 bg-gray-100 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto shadow rounded mt-2 mb-2">
          <div className="-my-8 divide-y-2 divide-gray-800">
            <div key={p.post.id} className="py-8 flex flex-col">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">
                  {p.post.uploaded_at.toDateString()}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-700 title-font mb-2">
                  {p.post.author}
                </h2>
                <span className="">
                  <PdfView
                    pageWidth={800}
                    pageHeight={800}
                    pageStyle={"text-center"}
                    styling={"shadow-md mt-5 border-8 border-indigo-200 rounded-lg"}
                  />
                </span>
                <div className="w-full mt-3">
                  <Link to="/stories">
                    <button className="btn bg-gray-600 text-white px-3 py-2 hover:bg-gray-500">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <></>;
}

export const Story = (props: any) => {
  window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  return RenderSignleStory(props);
};
