import { FaStar } from "react-icons/fa";

const ProductCard = ({ products }) => {
  const { title,img, price } = products;
  return (
    <div className="border border-dark6 rounded-md p-20 w-[364px]">
      <div className="bg-dark7 w-full h-[215px] flex justify-center items-center">
      <img className="w-[196px] h-[147px]" src={img} alt="" />
      </div>
      <div className="mt-20 text-center">
        <div className="text-25 text-yellow flex items-center  justify-center">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
        <h3 className="font-inter text-sub2 text-dark2 my-20">{title}</h3>
        <p className="font-inter text-sub3 text-primary">Price : ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
