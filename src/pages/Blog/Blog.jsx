import React from "react";
import BlogCard from "./BlogCard";
import Header from "./Header";

const Blog = () => {
  return (
    <div className="container mx-auto my-10">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
