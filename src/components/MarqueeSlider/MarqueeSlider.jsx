import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa";
const MarqueeSlider = () => {
  return (
    <div className="bg-corporate-color text-white text-3xl font-bold">
      <Marquee>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Conferences and Seminars</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Trade Shows and Expos</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Team Building Workshops</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Product Launches</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Corporate Meetings</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Award Ceremonies</span>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
