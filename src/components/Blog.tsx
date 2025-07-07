import React from "react";
import { blogs } from "../blogData";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer"; // Adjust path if needed

export const BlogSection = () => (
  <>
    <section
      id="blogs"
      className="relative min-h-screen py-16 px-2 sm:px-4 md:px-6 flex items-center justify-center"
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
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(0, 20, 40, 0.65)",
        }}
      />
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 sm:mb-16">
          <div
            className="rounded-2xl px-5 sm:px-8 py-3 sm:py-4 mb-2 shadow-lg border border-white/20 bg-white/10 backdrop-blur-2xl"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 6px 0 rgba(80, 80, 160, 0.10)",
            }}
          >
            <span
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-widest select-none"
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
          <span className="text-base sm:text-lg md:text-xl font-semibold text-white/90 tracking-wide mt-2 text-center">
            Say It Simply. Say It Honestly.
          </span>
        </div>
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              className="group block rounded-2xl bg-white/5 backdrop-blur-2xl shadow-xl shadow-black/30 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(0, 20, 40, 0.3), 0 2px 8px 0 rgba(0, 20, 40, 0.15)",
                maxWidth: "100%",
                margin: "0 auto",
              }}
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-40 sm:h-44 md:h-40 lg:h-44 object-cover object-center transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                  style={{ filter: "brightness(0.9) saturate(1.2)" }}
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-md transition-colors duration-300 group-hover:text-white/95">
                  {blog.title}
                </h3>
                <p className="text-white/85 text-sm line-clamp-3">{blog.excerpt}</p>
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

  if (!blog) return <div className="p-8 text-center text-black bg-[#FAFAFA]">Blog not found.</div>;

  return (
    <>
      <section
        className="min-h-screen py-8 px-2 sm:px-4 flex items-center justify-center"
        style={{
          background: "#FAFAFA",
        }}
      >
        <div className="container mx-auto flex justify-center">
          {/* Back/Home buttons */}
          <div className="fixed top-3 left-3 z-20 flex gap-2">
            <Link
              to="/blogs"
              className="font-semibold text-base px-3 py-1.5 rounded-lg bg-[#ECECEC] text-[#222] border border-[#DDD] hover:bg-[#E0E0E0] transition"
            >
              ← Back to Blogs
            </Link>
            <Link
              to="/"
              className="font-semibold text-base px-3 py-1.5 rounded-lg bg-[#ECECEC] text-[#222] border border-[#DDD] hover:bg-[#E0E0E0] transition"
            >
              🏠 Home
            </Link>
          </div>
          <div
            className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-8 py-6 bg-[#FAFAFA] rounded-xl border border-[#E0E0E0] shadow-sm"
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-44 sm:h-60 object-cover rounded-lg mb-6 border border-[#ECECEC]"
              style={{ background: "#F5F5F5" }}
            />
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 text-black text-center">
              {blog.title}
            </h1>
            <div
              className="
                prose prose-lg prose-black max-w-none text-black
                [&_pre]:overflow-x-auto
                [&_pre]:bg-gray-100
                [&_pre]:rounded-lg
                [&_pre]:px-3
                [&_pre]:py-2
                [&_pre]:my-4
                [&_pre]:text-sm
                [&_pre]:whitespace-pre-wrap
                [&_code]:bg-gray-200
                [&_code]:px-1
                [&_code]:rounded
                [&_code]:break-words
                [&_mark]:bg-yellow-200
                [&_mark]:px-1
                [&_mark]:rounded
              "
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
      <Footer />
    </>
  );
};
