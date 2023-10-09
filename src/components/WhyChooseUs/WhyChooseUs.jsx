const WhyChooseUs = () => {
  return (
    <div className="pb-16 xl:pb-24 pt-10 px-6 md:px-8 container mx-auto">
      <div className="text-center mb-14">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-4">
          Why
          <span className="text-corporate-color"> Choose Us</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="500">Discover the Reasons to Partner with Our Event Services</p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div data-aos="flip-left" data-aos-duration="1000" className="card hover:bg-corporate-color hover:text-white duration-300 card-side bg-base-100 p-8 border-2 rounded-lg">
          <div className="">
            <span className="text-xl font-medium border-2 border-white bg-corporate-color  w-10 h-10 flex justify-center items-center text-white  rounded-full">
              01
            </span>
          </div>
          <div className="pl-8">
            <h2 className="font-bold text-xl">Multiple Events</h2>
            <p>
              Seamlessly manage and host multiple events under one platform,
              streamlining your event organization.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="card hover:bg-corporate-color hover:text-white duration-300 card-side bg-base-100 p-8 border-2 rounded-lg">
          <div className="">
            <span className="text-xl border-2 border-white font-medium bg-corporate-color  w-10 h-10 flex justify-center items-center text-white  rounded-full">
              02
            </span>
          </div>
          <div className="pl-8">
            <h2 className="font-bold text-xl">Event Management</h2>
            <p>
              Take control of every aspect of your event, from planning to
              execution, with our comprehensive event management tools.
            </p>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="200" className="card hover:bg-corporate-color hover:text-white duration-300 card-side bg-base-100 p-8 border-2 rounded-lg">
          <div className="">
            <span className="text-xl border-2 border-white font-medium bg-corporate-color  w-10 h-10 flex justify-center items-center text-white  rounded-full">
              03
            </span>
          </div>
          <div className="pl-8">
            <h2 className="font-bold text-xl">Credit Card Payment</h2>
            <p>
              Offer convenient payment options with secure credit card
              processing, making registration and ticketing hassle-free.
            </p>
          </div>
        </div>
        <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="300" className="card hover:bg-corporate-color hover:text-white duration-300 card-side bg-base-100 p-8 border-2 rounded-lg">
          <div className="">
            <span className="text-xl border-2 border-white font-medium bg-corporate-color  w-10 h-10 flex justify-center items-center text-white  rounded-full">
              04
            </span>
          </div>
          <div className="pl-8">
            <h2 className="font-bold text-xl">Venue Management</h2>
            <p>
              Effortlessly handle venue logistics, ensuring that your events run
              smoothly in the perfect location.
            </p>
          </div>
        </div>
        <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="400" className="card hover:bg-corporate-color hover:text-white duration-300 card-side bg-base-100 p-8 border-2 rounded-lg">
          <div className="">
            <span className="text-xl border-2 border-white font-medium bg-corporate-color  w-10 h-10 flex justify-center items-center text-white  rounded-full">
              05
            </span>
          </div>
          <div className="pl-8">
            <h2 className="font-bold text-xl">Free Registration Management</h2>
            <p>
              Simplify the process of handling registrations, whether they{`'`}
              re free or paid, with our user-friendly tools.
            </p>
          </div>
        </div>
        <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="500" className="card hover:bg-corporate-color hover:text-white duration-300 card-side bg-base-100 p-8 border-2 rounded-lg">
          <div className="">
            <span className="text-xl border-2 border-white font-medium bg-corporate-color  w-10 h-10 flex justify-center items-center text-white  rounded-full">
              06
            </span>
          </div>
          <div className="pl-8">
            <h2 className="font-bold text-xl">Easy To Use</h2>
            <p>
              Our platform is designed for simplicity, making it easy for both
              organizers and attendees to navigate and use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
