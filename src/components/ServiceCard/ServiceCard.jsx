import { Link } from "react-router-dom";
import { MdOutlineArrowForward } from "react-icons/md";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="p-24 border border-dark6 rounded-md w-[364px]">
      <img className="w-full h-[208px] rounded-md" src={img} alt="" />
      <div>
        <h3 className="font-inter text-sub2 text-dark2 my-20">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="font-inter text-sub3 text-primary">Price : ${price}</p>
          <Link className="inline-block">
            <MdOutlineArrowForward className="w-20 text-primary"></MdOutlineArrowForward>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
