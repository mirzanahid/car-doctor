import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import SecHeading from "../../../components/SecHeading/SecHeading";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  return (
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
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center mt-50">
        <Button
          className={
            "font-inter text-sub4 text-primary border border-primary rounded-sm py-15 px-30 hover:bg-primary hover:text-white duration-300"
          }
          label={"More Services"}
        ></Button>
      </div>
    </div>
  );
};

export default Services;
