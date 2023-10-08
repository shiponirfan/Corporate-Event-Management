import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Swal from "sweetalert2";
import image from "/images/banner/banner4.jpg";
const Pricing = () => {
  const breadCrumbs = (
    <>
      <li>{"Pricing Plans"}</li>
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
      <Breadcrumbs
        image={image}
        name={"Pricing Plans"}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="container mx-auto pb-20">
        <div className="text-center w-1/2 mx-auto space-y-3 my-16">
          <h2 className="text-xl uppercase text-corporate-color font-medium">
            Pricing Plans
          </h2>
          <h2 className="text-5xl font-bold">Cost-Effective Pricing</h2>
          <p>
            At Corporate Event Management, we offer budget-friendly event
            planning. Our competitive pricing ensures quality without breaking
            the bank. Whether you are a startup or a corporation, our
            cost-effective solutions guarantee successful events within your
            budget.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="relative flex w-full flex-col rounded-xl bg-gradient-to-tr from-corporate-color to-blue-600 bg-clip-border p-8 text-white shadow-md shadow-blue-500/40">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                Basic Package
              </p>
              <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                <span className="mt-2 text-4xl">$</span>999
                <span className="self-end text-4xl">/an</span>
              </h1>
              <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased mt-5">
                Small businesses and startups
              </p>
            </div>
            <div className="p-0 grow">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Event consultation
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Venue selection assistance
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Basic event planning and coordination
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Vendor recommendations
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    On-site event management (up to 8 hours)
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Event timeline creation
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Email and phone support
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-0">
              <button
              onClick={handleBookNowBtn}
                className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-corporate-color shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Book Now
              </button>
            </div>
          </div>
          {/* Package 2 */}
          <div className="relative flex w-full flex-col rounded-xl bg-gradient-to-tr from-corporate-color to-blue-600 bg-clip-border p-8 text-white shadow-md shadow-blue-500/40">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                Standard Package
              </p>
              <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                <span className="mt-2 text-4xl">$</span>2,499
                <span className="self-end text-4xl">/an</span>
              </h1>
              <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased mt-5">
                Medium-sized companies
              </p>
            </div>
            <div className="p-0 grow">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Comprehensive event consultation
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Venue selection and negotiation
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Detailed event planning and coordination
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Vendor management and negotiations
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    On-site event management (up to 12 hours)
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Custom event timeline creation
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Guest list management
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Email and phone support
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Post-event evaluation and feedback session
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-0">
              <button
              onClick={handleBookNowBtn}
                className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-corporate-color shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Book Now
              </button>
            </div>
          </div>
          {/* Package 3 */}
          <div className="relative flex w-full flex-col rounded-xl bg-gradient-to-tr from-corporate-color to-blue-600 bg-clip-border p-8 text-white shadow-md shadow-blue-500/40">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                Premium Package
              </p>
              <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                <span className="mt-2 text-4xl">$</span>4,999
                <span className="self-end text-4xl">/an</span>
              </h1>
              <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased mt-5">
                Large corporations and high-profile events
              </p>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Extensive event consultation and strategy
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Premium venue selection and exclusive negotiations
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Full-service event planning and coordination
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Vendor management, contract negotiations, and premium vendor
                    recommendations
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    On-site event management (full day)
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Custom event timeline creation with advanced logistics
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Guest list management, including VIP handling
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Dedicated event manager
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    24/7 email and phone support
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Post-event evaluation, analytics, and recommendations
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    VIP experiences and perks
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-0">
              <button
              onClick={handleBookNowBtn}
                className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-corporate-color shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs></WhyChooseUs>
      <CallToAction></CallToAction>
      <MarqueeSlider></MarqueeSlider>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Pricing;
