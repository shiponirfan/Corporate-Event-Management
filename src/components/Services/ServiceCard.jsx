import PropTypes from "prop-types";
import { useState } from "react";
import {
  FaHeart,
  FaRegCalendarAlt,
  FaRegHeart,
  FaRegMoneyBillAlt,
  FaSitemap,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    id,
    name,
    image,
    price,
    description,
    seatNumber,
    reviewRating,
    nextAvailability,
    reviews,
  } = service;
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={`image of ${name}`} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
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
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-base mb-1">{`${description.slice(0, 150)}...`}</p>
        <p className="flex items-center gap-1 text-lg font-medium">
          <FaRegCalendarAlt /> Next Availablity:{" "}
          <span className="text-corporate-color font-bold ml-1">
            {nextAvailability}
          </span>
        </p>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-1 text-lg font-medium">
            <FaRegMoneyBillAlt /> Price:{" "}
            <span className="text-corporate-color font-bold ml-1">{`${price}$`}</span>
          </p>
          <p className=" flex items-center justify-end gap-1 text-lg font-medium">
            <FaSitemap /> Seat Available:{" "}
            <span className="text-corporate-color font-bold ml-1">
              {seatNumber}
            </span>
          </p>
        </div>
        <div className="border-t-2 pt-4 mt-4">
          <Link to={`/service/${id}`}>
            <button className="w-full bg-corporate-color text-white font-medium text-xl hover:bg-black duration-300 py-4 rounded-lg">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
