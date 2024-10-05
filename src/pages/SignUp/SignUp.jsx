import { Link } from "react-router-dom";
import authImg from "../../assets/images/login/login.svg";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "../../context/AuthProvider/AuthProvider";

const SignUp = () => {

  const {createUser} = useContext(authContext)

  const handleForSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const con_password = form.get("conPassword");

    console.log(name, email, password, con_password);

    createUser(email,password)
    .then(result =>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })

  };

  return (
    <div className="container flex justify-between  items-center gap-75 pb-130">
      <div>
        <img className="w-[460px] h=[502px]" src={authImg} alt="" />
      </div>
      <div className="w-[620px] bg-white border border-dark5 rounded-md p-75">
        <h3 className="font-inter text-h3 text-dark2 text-center">Sign Up</h3>
        <form onSubmit={handleForSignUp}>
          <InputField
            label={"Name"}
            placeholder={"Enter Your Name"}
            type="text"
            name={"name"}
            className={"font-inter text-sub4 text-dark2 mb-30"}
            classNameInput={
              "border border-dark6 rounded-md py-15 px-24 bg-white w-full mt-20"
            }
          ></InputField>
          <InputField
            label={"Email"}
            placeholder={"Enter Your Email"}
            type="email"
            name={"email"}
            className={"font-inter text-sub4 text-dark2 mb-30"}
            classNameInput={
              "border border-dark6 rounded-md py-15 px-24 bg-white w-full mt-20"
            }
          ></InputField>
          <InputField
            label={"Password"}
            placeholder={"Enter Your Password"}
            type="password"
            name={"password"}
            className={"font-inter text-sub4 text-dark2 mb-30"}
            classNameInput={
              "border border-dark6 rounded-md py-15 px-24 bg-white w-full mt-20"
            }
          ></InputField>
          <InputField
            label={"Confirm Password"}
            placeholder={"Enter Your Password"}
            type="password"
            name={"conPassword"}
            className={"font-inter text-sub4 text-dark2 mb-30"}
            classNameInput={
              "border border-dark6 rounded-md py-15 px-24 bg-white w-full mt-20"
            }
          ></InputField>

          <Button
          type="submit"
            className={
              "font-inter text-sub4 bg-primary text-white border border-primary rounded-sm py-15 px-30 duration-300 w-full"
            }
            label={"Sign Up"}
          ></Button>

          <div className="flex flex-col items-center">
            <p className="font-inter text-p4 text-dark2 my-30">Or Login with</p>

            <div className="flex gap-15">
              <Link className="bg-dark8 rounded-full w-[55px] h-[55px] flex items-center justify-center">
                <FaFacebookF className="text-xl text-skyBlue"></FaFacebookF>
              </Link>
              <Link className="bg-dark8 rounded-full w-[55px] h-[55px] flex items-center justify-center">
                <FaLinkedinIn className="text-xl text-blue"></FaLinkedinIn>
              </Link>
              <Link className="bg-dark8 rounded-full w-[55px] h-[55px] flex items-center justify-center">
                <FcGoogle className="text-xl"></FcGoogle>
              </Link>
            </div>
            <p className="font-inter text-p2 text-dark3 mt-50">
              Already have an account?{" "}
              <Link to={"/login"} className="text-sub4 text-primary">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
