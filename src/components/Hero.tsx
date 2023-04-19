import { useState } from "react";
import CatLogo from "../assets/CatwikiLogoWhite.svg";
import HeroImg from "../assets/HeroImagelg.png";
import Suggestions from "./Suggestions";
import { Link } from "react-router-dom";
import RandomCats from "./RandomCats";
import {IoSearchSharp} from 'react-icons/io5'

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggest, setSuggest] = useState(false)

  return (
    <div className="rounded-3xl" onClick={() => setSuggest(false)}>
      <div className=" relative flex">
        <div className="absolute -z-10 h-[25vh] sm:h-[40vh] md:h-[50vh] lg:h-[85vh]">
          <img
            src={HeroImg}
            alt="Cat-look"
            className="object-cover h-full w-full rounded-t-3xl"
          />
        </div>
        <div
          className="flex text-white w-1/2 justify-center px-6
        items-center h-[25vh] sm:h-[40vh] md:h-[50vh] lg:h-[85vh]"
        >
          <div className="flex flex-col gap-0 sm:gap-4">
            <div className="w-[180px] sm:w-[220px] md:w-[320px] lg:w-[420px]">
              <img src={CatLogo} alt="cat-logo" className="sm:w-[80%]" />
              <div className="lg:text-2xl md:text-lg sm:text-sm text-xs font-medium leading-7 tracking-normal text-left">
                Get to know more about your cat breed
              </div>
            </div>

            <div className="mt-4 flex flex-col justify-center" onClick={(e) =>{ e.stopPropagation(), setSuggest(true)}}>
              <div className="flex justify-center items-center bg-white rounded-3xl px-2 mb-2">
              <input
                placeholder="Enter the cat breed"
                type="text"
                className="
                outline-none
                w-full h-[50px] 
                rounded-3xl
                placeholder:font-semibold
                px-2
                text-black
                "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <IoSearchSharp size={28} className="text-black h-[50px]" />
              </div>
              {suggest && <Suggestions inputValue={inputValue} />}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E3E1DC] p-6 sm:p-8 md:p-12 lg:p-20  w-full rounded-b-3xl flex flex-col gap-12">
        <div>
          <h4
            className="
        font-medium text-lg leading-5
        "
          >
            Most Searched Breeds
          </h4>
          <div className="w-[60px] h-[5px] bg-[#4D270C] rounded-lg" />
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold text-5xl w-1/2 leading-10 text-gray-900">
            66+ Breeds For you to discover
          </h2>
          <Link to="/topbreed">
            <span className="font w-1/2-bold text-sm md:text-md lg:text-lg leading-5 text-right text-gray-900">
              SEE MORE
            </span>
          </Link>
        </div>

        <RandomCats />
      </div>
    </div>
  );
};
export default Hero;
