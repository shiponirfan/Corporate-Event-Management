import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaHashtag,
  FaHeart,
  FaRegCalendarAlt,
  FaRegHeart,
  FaSitemap,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
const BlogDetails = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  const [favorite, setFavorite] = useState(false);
  const blog = useLoaderData();
  const { id } = useParams();
  const blogDetails = blog.find((blogId) => id.includes(blogId.id));

  const { name, details, image, author, date, category, tags } = blogDetails;

  const breadCrumbs = (
    <>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>{name}</li>
    </>
  );
  return (
    <div>
      <ScrollToTopOnMount />
      <Breadcrumbs
        image={image}
        name={name}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="container mx-auto px-6 md:px-8 xl:px-0 py-16 lg:py-24 grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <figure>
            <img className="rounded-lg" src={image} alt={`image of ${name}`} />
          </figure>
          <div className="">
            <h2 className="text-xl xl:text-5xl font-bold my-7">{name}</h2>
            <p className="text-lg xl:text-xl mb-1">{details}</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg bg-corporate-lightColor p-4">
          <figure>
            <img
              className="rounded-lg"
              src="/images/blogpost.png"
              alt="Event Image"
            />
          </figure>

          <p className="text-sm xl:text-base py-3">
            Explore expert insights, tips, and inspiration for corporate event
            management. Discover trends, success stories, and valuable resources
            to elevate your event planning skills. Start enhancing your
            expertise today!
          </p>

          <div className="flex justify-between items-center mb-4 border-y-2 py-4 mt-4">
            <div className="flex items-center gap-1 text-sm xl:text-lg mb-2 font-medium">
              <span>Author:</span>
              <span className="xl:text-xl text-corporate-color font-bold ml-2">
                {author}
              </span>
            </div>
            <div
              className="cursor-pointer rounded-full border inline-block p-1 text-xs xl:text-xl"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? (
                <FaHeart className="text-corporate-color border-corporate-color" />
              ) : (
                <FaRegHeart />
              )}
            </div>
          </div>

          <p className="flex items-center gap-1 text-xs xl:text-lg mb-2 font-medium">
            <FaRegCalendarAlt /> Published Date:{" "}
            <span className="text-corporate-color font-bold ml-1">{date}</span>
          </p>

          <p className=" flex items-center gap-1 text-xs xl:text-lg mb-2 font-medium">
            <FaSitemap /> Categories:{" "}
            <span className="text-corporate-color font-bold ml-1">
              {category}
            </span>
          </p>
          <p className="flex gap-1 items-start text-xs xl:text-lg font-medium">
            <span className="flex items-center gap-1">
              <FaHashtag /> Tags:
            </span>
            <span className="text-corporate-color font-bold ml-1">{tags}</span>
          </p>
        </div>
      </div>
      <div>
        <CallToAction></CallToAction>
        <MarqueeSlider></MarqueeSlider>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default BlogDetails;
