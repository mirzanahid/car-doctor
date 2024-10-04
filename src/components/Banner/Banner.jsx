import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";
import banner6 from "../../assets/images/banner/6.jpg";

import "swiper/css";
import 'swiper/css/navigation';

import { Autoplay, Navigation } from "swiper/modules";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        infinity={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-[600px] w-full rounded-md"
      >
        <SwiperSlide>
          <div className="relative h-[600px]">
            <img className="w-full h-full absolute top-0 left-0 object-fill" src={banner1} alt="" />
            <div className="bg-dark-gradient w-full h-full absolute top-0 left-0 pt-100 pl-100">
                <h1 className="font-inter text-h1 text-white w-[463px] mb-30">Affordable Price For Car Servicing</h1>
                <p className="font-inter text-p2 text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-20 mt-30">
                <Button className={'font-inter text-sub4 text-white border bg-primary border-primary rounded-sm py-15 px-30 hover:bg-transparent hover:border-white hover:text-white duration-300'} label={'Discover More'}></Button>

                <Button className={'font-inter text-sub4 text-white border border-white rounded-sm py-15 px-30 hover:bg-primary hover:border-primary hover:text-white duration-300'} label={'Latest Project'}></Button>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-[600px]">
            <img className="w-full h-full absolute top-0 left-0 object-fill" src={banner2} alt="" />
            <div className="bg-dark-gradient w-full h-full absolute top-0 left-0 pt-100 pl-100">
                <h1 className="font-inter text-h1 text-white w-[463px] mb-30">Affordable Price For Car Servicing</h1>
                <p className="font-inter text-p2 text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-20 mt-30">
                <Button className={'font-inter text-sub4 text-white border bg-primary border-primary rounded-sm py-15 px-30 hover:bg-transparent hover:border-white hover:text-white duration-300'} label={'Discover More'}></Button>

                <Button className={'font-inter text-sub4 text-white border border-white rounded-sm py-15 px-30 hover:bg-primary hover:border-primary hover:text-white duration-300'} label={'Latest Project'}></Button>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-[600px]">
            <img className="w-full h-full absolute top-0 left-0 object-fill" src={banner3} alt="" />
            <div className="bg-dark-gradient w-full h-full absolute top-0 left-0 pt-100 pl-100">
                <h1 className="font-inter text-h1 text-white w-[463px] mb-30">Affordable Price For Car Servicing</h1>
                <p className="font-inter text-p2 text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-20 mt-30">
                <Button className={'font-inter text-sub4 text-white border bg-primary border-primary rounded-sm py-15 px-30 hover:bg-transparent hover:border-white hover:text-white duration-300'} label={'Discover More'}></Button>

                <Button className={'font-inter text-sub4 text-white border border-white rounded-sm py-15 px-30 hover:bg-primary hover:border-primary hover:text-white duration-300'} label={'Latest Project'}></Button>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-[600px]">
            <img className="w-full h-full absolute top-0 left-0 object-fill" src={banner4} alt="" />
            <div className="bg-dark-gradient w-full h-full absolute top-0 left-0 pt-100 pl-100">
                <h1 className="font-inter text-h1 text-white w-[463px] mb-30">Affordable Price For Car Servicing</h1>
                <p className="font-inter text-p2 text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-20 mt-30">
                <Button className={'font-inter text-sub4 text-white border bg-primary border-primary rounded-sm py-15 px-30 hover:bg-transparent hover:border-white hover:text-white duration-300'} label={'Discover More'}></Button>

                <Button className={'font-inter text-sub4 text-white border border-white rounded-sm py-15 px-30 hover:bg-primary hover:border-primary hover:text-white duration-300'} label={'Latest Project'}></Button>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-[600px]">
            <img className="w-full h-full absolute top-0 left-0 object-fill" src={banner5} alt="" />
            <div className="bg-dark-gradient w-full h-full absolute top-0 left-0 pt-100 pl-100">
                <h1 className="font-inter text-h1 text-white w-[463px] mb-30">Affordable Price For Car Servicing</h1>
                <p className="font-inter text-p2 text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-20 mt-30">
                <Button className={'font-inter text-sub4 text-white border bg-primary border-primary rounded-sm py-15 px-30 hover:bg-transparent hover:border-white hover:text-white duration-300'} label={'Discover More'}></Button>

                <Button className={'font-inter text-sub4 text-white border border-white rounded-sm py-15 px-30 hover:bg-primary hover:border-primary hover:text-white duration-300'} label={'Latest Project'}></Button>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative h-[600px]">
            <img className="w-full h-full absolute top-0 left-0 object-fill" src={banner6} alt="" />
            <div className="bg-dark-gradient w-full h-full absolute top-0 left-0 pt-100 pl-100">
                <h1 className="font-inter text-h1 text-white w-[463px] mb-30">Affordable Price For Car Servicing</h1>
                <p className="font-inter text-p2 text-white w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-20 mt-30">
                <Button className={'font-inter text-sub4 text-white border bg-primary border-primary rounded-sm py-15 px-30 hover:bg-transparent hover:border-white hover:text-white duration-300'} label={'Discover More'}></Button>

                <Button className={'font-inter text-sub4 text-white border border-white rounded-sm py-15 px-30 hover:bg-primary hover:border-primary hover:text-white duration-300'} label={'Latest Project'}></Button>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
