import { NavbarLanding } from "../../components/NavbarLanding";
import { Footer } from "../../components/Footer";
import { Loader } from "../../components/Loader";
import { useState } from "react";
import { useEffect } from "react";

export const About = () => {
  const [about, setAbout] = useState("");

  const [loader, setLoader] = useState(false);
  const [aboutText] = about;
  useEffect(() => {
    async function fetchAbout() {
      try {
        setLoader(true);
        const res = await fetch("http://localhost:6600/about");
        const data = await res.json();
        setAbout(data);
        setLoader(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAbout();
  }, []);

  console.log("about", about);
  return (
    <>
      <NavbarLanding />
      {loader ? (
        <Loader />
      ) : (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                About Us
              </h1>
              <p className="font-normal  text-xl 	 leading-10 text-gray-600 ">
                {aboutText?.text}
              </p>
            </div>
            <div className="w-full lg:w-8/12 ">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
