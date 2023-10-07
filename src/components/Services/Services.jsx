import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="lg:py-24 py-10 px-6 md:px-8 container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Discover Our Premier{" "}
          <span className="text-corporate-color">Event Services</span>
        </h2>
        <p className="2xl:w-1/2 md:px-10 mx-auto">
        Unleash Unforgettable Events with Our Premier Services. Elevate Your Experiences with Expertise and Precision. From Grand Conferences to Intimate Gatherings, We Craft Exceptional Moments. Discover Excellence.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {
            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
