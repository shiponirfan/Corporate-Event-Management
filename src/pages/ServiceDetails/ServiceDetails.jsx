import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  FaHeart,
  FaRegCalendarAlt,
  FaRegHeart,
  FaRegMoneyBillAlt,
  FaSitemap,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
const ServiceDetails = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  const [favorite, setFavorite] = useState(false);
  const service = useLoaderData();
  const { id } = useParams();
  const serviceDetails = service.find((serviceId) => id.includes(serviceId.id));
  const {
    name,
    image,
    price,
    description,
    seatNumber,
    reviewRating,
    nextAvailability,
    reviews,
  } = serviceDetails;

  const breadCrumbs = (
    <>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>{name}</li>
    </>
  );
  const [booked, setBooked] = useState(false);
  const handleBookNowBtn = () => {
    if (booked) {
      Swal.fire({
        title: "Already Booked",
        text: "Thank You For The Booking!",
        icon: "warning",
        confirmButtonText: "Go Back",
        buttonsStyling: false,
      });
    } else {
      Swal.fire({
        title: "Successfully Booking Done",
        text: "Thank You For The Booking!",
        icon: "success",
        confirmButtonText: "Go Back",
        buttonsStyling: false,
      });
      setBooked(true);
    }
  };
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
            <p className="text-lg xl:text-xl mb-1">{description}</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg bg-corporate-lightColor p-4">
          <figure>
            <img
              className="rounded-lg"
              src="/images/event.png"
              alt="Event Image"
            />
          </figure>

          <p className="text-sm xl:text-base py-3">
            Streamline Your Corporate Event Booking. Effortlessly reserve the
            perfect venue, services, and logistics tailored to your business
            needs. Make your next corporate event a breeze with our
            user-friendly booking platform.
          </p>

          <figure>
            <img
              className="rounded-lg border-b pb-3 mb-3"
              src="/images/booked.png"
              alt="Event Image"
            />
          </figure>

          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="bg-corporate-color text-white p-1 rounded mr-2">
                {reviewRating}
              </span>
              <span className="text-base">{reviews}</span>
            </div>
            <div
              className="cursor-pointer rounded-full border inline-block p-1 text-xl"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? (
                <FaHeart className="text-corporate-color border-corporate-color" />
              ) : (
                <FaRegHeart />
              )}
            </div>
          </div>

          <p className="flex items-center gap-1 text-sm xl:text-lg mb-2 font-medium">
            <FaRegCalendarAlt /> Next Availablity:{" "}
            <span className="text-corporate-color font-bold ml-1">
              {nextAvailability}
            </span>
          </p>

          <p className=" flex items-center gap-1 text-sm xl:text-lg mb-2 font-medium">
            <FaSitemap /> Seat Available:{" "}
            <span className="text-corporate-color font-bold ml-1">
              {seatNumber}
            </span>
          </p>
          <p className="flex items-center gap-1 text-sm xl:text-lg font-medium">
            <FaRegMoneyBillAlt /> Price:{" "}
            <span className="text-corporate-color font-bold ml-1">{`${price}$`}</span>
          </p>

          <div className="border-t-2 pt-4 mt-4">
            <button
              onClick={handleBookNowBtn}
              className="w-full bg-corporate-color text-white font-medium text-xl hover:bg-black duration-300 py-4 rounded-lg"
            >
              Book Now
            </button>
          </div>
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

export default ServiceDetails;
