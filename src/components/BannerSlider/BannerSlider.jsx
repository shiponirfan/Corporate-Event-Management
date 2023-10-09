import { Link } from "react-router-dom";

const BannerSlider = () => {
  return (
    <div className="">
      <div className="carousel w-full h-bannerSlider">
        {/* Slider 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          {/* Slider Image */}
          <img
            src="/images/banner/banner1.jpg"
            className="w-full object-cover"
          />
          {/* Background Overlay */}
          <div className="bg-black w-full h-full absolute bg-opacity-80"></div>
          {/* Slider Content */}
          <div className="absolute px-6 md:px-8 text-center flex flex-col space-y-4 items-center justify-center text-white transform -translate-y-1/2 left-0 right-0 top-1/2 z-10">
            <h2
              data-aos="fade-up"
              className="font-bold text-xl md:text-4xl lg:text-7xl uppercase"
            >
              We Are Event Professionals
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-sm md:text-base lg:text-lg md:px-20"
            >
              You Can Find Conferences and Seminars,Team Building
              Workshops,Corporate Meetings, Award Ceremonies and more
            </p>
            {/* Slider Button */}
            <div>
              <Link to="/services">
                <button
                  data-aos="flip-up"
                  data-aos-delay="1000"
                  className="hover:bg-corporate-color mb-4 md:mb-0 border-corporate-color duration-300 border-2 mx-3 py-3 font-medium px-8 rounded-lg"
                >
                  Our Services
                </button>
              </Link>
              <Link to="/about">
                <button
                  data-aos="flip-up"
                  data-aos-delay="1300"
                  className="hover:bg-corporate-color mb-4 md:mb-0 border-corporate-color duration-300 border-2 mx-3 py-3 font-medium px-8 rounded-lg"
                >
                  About Us
                </button>
              </Link>
            </div>
          </div>
          {/* Slider Arrow */}
          <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          {/* Slider Image */}
          <img
            src="/images/banner/banner2.jpg"
            className="w-full object-cover"
          />
          {/* Background Overlay */}
          <div className="bg-black w-full h-full absolute bg-opacity-80"></div>
          {/* Slider Content */}
          <div className="absolute px-6 md:px-8 text-center flex flex-col space-y-4 items-center justify-center text-white transform -translate-y-1/2 left-0 right-0 top-1/2 z-10">
            <h2
              data-aos="fade-up"
              className="font-bold text-xl md:text-4xl lg:text-7xl uppercase"
            >
              We Are Event Professionals
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-sm md:text-base lg:text-lg md:px-20"
            >
              You Can Find Conferences and Seminars,Team Building
              Workshops,Corporate Meetings, Award Ceremonies and more
            </p>
            {/* Slider Button */}
            <div>
              <Link to="/services">
                <button
                  data-aos="flip-up"
                  data-aos-delay="1000"
                  className="hover:bg-corporate-color mb-4 md:mb-0 border-corporate-color duration-300 border-2 mx-3 py-3 font-medium px-8 rounded-lg"
                >
                  Our Services
                </button>
              </Link>
              <Link to="/about">
                <button
                  data-aos="flip-up"
                  data-aos-delay="1300"
                  className="hover:bg-corporate-color mb-4 md:mb-0 border-corporate-color duration-300 border-2 mx-3 py-3 font-medium px-8 rounded-lg"
                >
                  About Us
                </button>
              </Link>
            </div>
          </div>
          {/* Slider Arrow */}
          <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          {/* Slider Image */}
          <img
            src="/images/banner/banner3.jpg"
            className="w-full object-cover"
          />
          {/* Background Overlay */}
          <div className="bg-black w-full h-full absolute bg-opacity-80"></div>
          {/* Slider Content */}
          <div className="absolute px-6 md:px-8 text-center flex flex-col space-y-4 items-center justify-center text-white transform -translate-y-1/2 left-0 right-0 top-1/2 z-10">
            <h2
              data-aos="fade-up"
              className="font-bold text-xl md:text-4xl lg:text-7xl uppercase"
            >
              We Are Event Professionals
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-sm md:text-base lg:text-lg md:px-20"
            >
              You Can Find Conferences and Seminars,Team Building
              Workshops,Corporate Meetings, Award Ceremonies and more
            </p>
            {/* Slider Button */}
            <div>
              <Link to="/services">
                <button
                  data-aos="flip-up"
                  data-aos-delay="1000"
                  className="hover:bg-corporate-color mb-4 md:mb-0 border-corporate-color duration-300 border-2 mx-3 py-3 font-medium px-8 rounded-lg"
                >
                  Our Services
                </button>
              </Link>
              <Link to="/about">
                <button
                  data-aos="flip-up"
                  data-aos-delay="13000"
                  className="hover:bg-corporate-color mb-4 md:mb-0 border-corporate-color duration-300 border-2 mx-3 py-3 font-medium px-8 rounded-lg"
                >
                  About Us
                </button>
              </Link>
            </div>
          </div>
          {/* Slider Arrow */}
          <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
