

import React from "react";
import { blogs } from "../blogData";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer"; // Adjust path if needed

export const BlogSection = () => (
  <>
    <section
      id="blogs"
      className="relative min-h-screen py-20 px-4 md:px-6 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.postimg.cc/v8231bBn/Whats-App-Image-2025-06-17-at-14-25-51-3c01c977.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {/* Overlay to enhance contrast */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(0, 20, 40, 0.65)",
        }}
      />
      <div className="container mx-auto relative z-10">
        {/* Glassmorphism Header */}
        <div className="flex flex-col items-center mb-16">
          {/* Removed mobile back button */}
          <div
            className="rounded-2xl px-8 py-4 mb-2 shadow-lg border border-white/20 bg-white/10 backdrop-blur-2xl"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 6px 0 rgba(80, 80, 160, 0.10)",
            }}
          >

            
            <span
  className="text-5xl md:text-6xl font-extrabold tracking-widest select-none"
  style={{
    background: 'linear-gradient(120deg, #fff1eb 0%, #ace0f9 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 2px 16px #ace0f9)'
  }}
>
  BLØG
</span>
          </div>
          <span className="text-lg md:text-xl font-semibold text-white/90 tracking-wide mt-2">
            Say It Simply. Say It Honestly.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              className="group block rounded-2xl bg-white/5 backdrop-blur-2xl shadow-xl shadow-black/30 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(0, 20, 40, 0.3), 0 2px 8px 0 rgba(0, 20, 40, 0.15)",
                maxWidth: "320px",
                margin: "0 auto",
              }}
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-40 object-cover object-center transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                  style={{ filter: "brightness(0.9) saturate(1.2)" }}
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white drop-shadow-md transition-colors duration-300 group-hover:text-white/95">
                  {blog.title}
                </h3>
                <p className="text-white/85 text-sm">{blog.excerpt}</p>
                <span className="mt-3 inline-block text-white/70 font-semibold tracking-wide group-hover:text-white">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <div className="p-8 text-center text-white">Blog not found.</div>;

  return (
    <>
    <section
      className="relative min-h-screen py-20 px-2 md:px-6 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(120deg, rgba(30,41,59,0.95) 0%, rgba(51,65,85,0.90) 100%)",
        overflow: "hidden",
      }}
    >
      {/* Cinematic blurred background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-500 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-400 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] bg-white opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="container mx-auto relative z-10 flex justify-center">
        {/* Glassmorphism Back/Home buttons, fixed top-left */}
        <div className="fixed top-4 left-4 z-20 flex gap-3">
          <Link
            to="/blogs"
            className="inline-block font-semibold text-lg px-4 py-2 rounded-xl transition-colors"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
              backgroundImage: "linear-gradient(90deg, #fff 0%, #bbb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ← Back to Blogs
          </Link>
          <Link
            to="/"
            className="inline-block font-semibold text-lg px-4 py-2 rounded-xl transition-colors"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
              backgroundImage: "linear-gradient(90deg, #fff 0%, #bbb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            🏠 Home
          </Link>
        </div>
        <div
          className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/30 border border-white/20 w-full max-w-xl mx-auto p-4 md:p-8"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 6px 0 rgba(80, 80, 160, 0.10)",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            minWidth: "0",
          }}
        >
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-48 md:h-56 object-cover object-center rounded-2xl mb-6 shadow-lg shadow-black/20"
            style={{ filter: "brightness(0.97) saturate(1.1)" }}
          />
          <h1 className="text-3xl font-extrabold mb-4 text-white drop-shadow-lg tracking-tight text-center">
            {blog.title}
          </h1>
          <div
            className="prose prose-invert max-w-none text-white/90 text-base break-words"
            style={{
              wordBreak: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "pre-line",
            }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </section>
  
    <Footer/>
    </>
  );
};
