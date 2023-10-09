import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import image from "/images/banner/banner3.jpg";
import BlogCard from "./BlogCard";
import { Helmet } from "react-helmet-async";
const Blog = () => {
  const blogs = useLoaderData();
  const breadCrumbs = (
    <>
      <li>{"Blog"}</li>
    </>
  );
  return (
    <div>
      <Helmet>
        <title>Blogs | Corporate Event Management</title>
      </Helmet>
      <Breadcrumbs
        image={image}
        name={"Blog"}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="lg:py-20 py-10 px-6 md:px-8 container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
