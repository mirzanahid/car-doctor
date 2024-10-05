import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.svg";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark1">
      <footer className="footer container text-base-content py-130">
        <aside>
          <img className="w-[80px] h-[64px] mb-15" src={logo} alt="" />
          <p className="font-inter text-p1 text-dark6 w-[283px]">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="flex items-center gap-2 mt-20">
            <Link className="w-[36px] h-[36px] rounded-full bg-grey flex items-center justify-center hover:bg-primary duration-500">
              <FaGoogle className="text-[14px] text-white" />
            </Link>
            <Link className="w-[36px] h-[36px] rounded-full bg-grey flex items-center justify-center hover:bg-primary duration-500">
              <FaInstagram className="text-[14px] text-white"/>
            </Link>
            <Link className="w-[36px] h-[36px] rounded-full bg-grey flex items-center justify-center hover:bg-primary duration-500">
              <FaTwitter className="text-[14px] text-white"/>
            </Link>
            <Link className="w-[36px] h-[36px] rounded-full bg-grey flex items-center justify-center hover:bg-primary duration-500">
              <FaLinkedinIn className="text-[14px] text-white"/>
            </Link>
          </div>
        </aside>
        <nav>
          <h6 className=" font-inter text-sub5 text-white mb-40">About</h6>
          <div className="font-inter text-p1 text-dark7 flex flex-col">
          <Link className="link link-hover mb-15">Home</Link>
          <Link className="link link-hover  mb-15">Service</Link>
          <Link className="link link-hover">Contact</Link>
          </div>
        </nav>
        <nav>
          <h6 className=" font-inter text-sub5 text-white mb-40">Company</h6>
          <div className="font-inter text-p1 text-dark7 flex flex-col">
          <Link className="link link-hover  mb-15"> Why Car Doctor </Link>
          <Link className="link link-hover">About</Link>
          </div>
        </nav>
         
        <nav>
          <h6 className=" font-inter text-sub5 text-white mb-40">Support</h6>
          <div className="font-inter text-p1 text-dark7 flex flex-col">
          <Link className="link link-hover  mb-15">Support Center</Link>
          <Link className="link link-hover mb-15">Feedback</Link>
          <Link className="link link-hover">Accesbility</Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
