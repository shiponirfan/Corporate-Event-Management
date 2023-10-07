import {
  BsPeopleFill,
  BsFillCalendarDateFill,
  BsFillCalendar2WeekFill,
} from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div className="bg-cta-bg bg-cover bg-no-repeat bg-center">
      <div className="hero-overlay bg-opacity-80 py-12 text-white">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4">
          <div className=" text-center mb-10 lg:mb-0">
            <BsPeopleFill className="mx-auto text-5xl" />
            <h5 className="my-2 text-6xl font-bold">10+</h5>
            <p className="text-xl font-medium">Best Speaker</p>
          </div>
          <div className=" text-center mb-10 lg:mb-0">
            <BsFillCalendar2WeekFill className="mx-auto text-5xl" />
            <h5 className="my-2 text-6xl font-bold">40+</h5>
            <p className="text-xl font-medium">Ideal Event</p>
          </div>
          <div className=" text-center mb-10 lg:mb-0">
            <BsFillCalendarDateFill className="mx-auto text-5xl" />
            <h5 className="my-2 text-6xl font-bold">13+</h5>
            <p className="text-xl font-medium">New Schedule</p>
          </div>
          <div className=" text-center">
            <FaPeopleGroup className="mx-auto text-5xl" />
            <h5 className="my-2 text-6xl font-bold">19+</h5>
            <p className="text-xl font-medium">Participants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
