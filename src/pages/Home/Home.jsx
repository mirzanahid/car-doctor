import Banner from "../../components/Banner/Banner";
import personImg from "../../assets/images/about_us/person.jpg";
import partsImg from "../../assets/images/about_us/parts.jpg";
import SecHeading from "../../components/SecHeading/SecHeading";
import Button from "../../components/Button/Button";
import serviceImg1 from "../../assets/images/services/1.jpg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import calnderImg from '../../assets/icons/calender.svg';
import phoneImg from '../../assets/icons/phone.svg';
import locationImg from '../../assets/icons/location.svg';
import ProductCard from "../../components/ProductCard/ProductCard";
import productImg1 from '../../assets/images/products/1.png'



const Home = () => {

  const services = {
    title: "Electrical System",
    img: {serviceImg1},
    price: "20.00"
  }

  const products = {
    title: "Car Engine Plug",
    img: {productImg1},
    price: "20.00"
  }

  return (
    <div className="container ">
      <Banner></Banner>
      <div className="my-130">
        <div className="flex  gap-130">
          <div className="relative w-[460px] h-[473px]">
            <img className="w-full h-full  rounded-md" src={personImg} alt="" />
            <div className="w-[327px] h-[332px] absolute bottom-[-80px] right-[-50px] border-[10px] border-white rounded-md">
              <img className="w-full h-full " src={partsImg} alt="" />
            </div>
          </div>

          <div className="pt-15">
            <SecHeading
              subHeading={"About Us"}
              heading={"We are qualified & of experience in this field"}
              headingWidth={"w-[376px]"}
            ></SecHeading>
            <p className="font-inter text-p1 text-dark3 w-[489px] mt-30">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>

            <p className="font-inter text-p1 text-dark3 w-[489px] mt-20">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <Button
              className={
                "font-inter text-sub4 text-white border bg-primary border-primary rounded-sm py-15 px-30 hover:bg-transparent hover:border-white hover:text-white duration-300 mt-30"
              }
              label={"Get More Info"}
            ></Button>
          </div>
        </div>
      </div>

      <div className="mb-130">
        <SecHeading
          subHeading={"Services"}
          heading={"Our Service Area"}
          paraHeading={
            "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
          }
          paraClass={"w-[717px] text-center"}
          className={"flex items-center justify-center flex-col"}
        ></SecHeading>

        <div className="grid grid-cols-3 gap-24 mt-50">
          <ServiceCard services={services}></ServiceCard>
          <ServiceCard services={services}></ServiceCard>
          <ServiceCard services={services}></ServiceCard>
          <ServiceCard services={services}></ServiceCard>
          <ServiceCard services={services}></ServiceCard>
          <ServiceCard services={services}></ServiceCard>
        </div>
        <div className="flex justify-center mt-50">
        <Button className={'font-inter text-sub4 text-primary border border-primary rounded-sm py-15 px-30 hover:bg-primary hover:text-white duration-300'} label={'More Services'}></Button>
        </div>
      </div>

      <div className="bg-dark1 py-100 px-75 rounded-md flex justify-between  items-start mb-130">
        <div className="flex items-center gap-20">
          <img className="w-40 h-40" src={calnderImg} alt="" />
          <div>
            <p className="font-inter text-p3 text-white">We are open monday-friday</p>
            <h4 className="font-inter text-sub2 text-white mt-10">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <img className="w-40 h-40" src={phoneImg} alt="" />
          <div>
            <p className="font-inter text-p3 text-white">Have a question?</p>
            <h4 className="font-inter text-sub2 text-white mt-10">+2546 251 2658</h4>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <img className="w-40 h-40" src={locationImg} alt="" />
          <div>
            <p className="font-inter text-p3 text-white">Need a repair? our address</p>
            <h4 className="font-inter text-sub2 text-white mt-10">Liza Street, New York</h4>
          </div>
        </div>
      </div>

      <div className="mb-130">
      <SecHeading
          subHeading={"Popular Products"}
          heading={"Browse Our Products"}
          paraHeading={
            "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  "
          }
          paraClass={"w-[715px] text-center"}
          className={"flex items-center justify-center flex-col"}
        ></SecHeading>


        <div className="grid grid-cols-3 gap-24">
          <ProductCard products={products}></ProductCard>
          <ProductCard products={products}></ProductCard>
          <ProductCard products={products}></ProductCard>
          <ProductCard products={products}></ProductCard>
          <ProductCard products={products}></ProductCard>
          <ProductCard products={products}></ProductCard>
        </div>
        <div className="flex justify-center mt-50">
        <Button className={'font-inter text-sub4 text-primary border border-primary rounded-sm py-15 px-30 hover:bg-primary hover:text-white duration-300'} label={'More Products'}></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
