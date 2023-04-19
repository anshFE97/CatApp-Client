import CatPaw from "../assets/image 1.png";
import SleepyCat from "../assets/image 2.png";
import SpaceCat from "../assets/image 3.png";

const MoreDetails = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center py-10 px-2 lg:p-10 gap-8">
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <div>
          <div className="w-[60px] h-[6px] bg-[#4D270C] rounded-lg" />
          <h2 className="font-bold md:text-5xl md:leading-[59px] text-gray-900
           text-[40px] leading-[49px]
          ">
            Why should you have a cat?
          </h2>
          </div>
          <p className="md:font-medium md:text-lg md:leading-5 text-gray-900
          text-[18px] leading-[22px]
          ">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <span className="font-bold text-lg leading-5 opacity-[0.6]">READ MORE</span>
        </div>
      </div>

      <div className="md:w-1/2
      grid grid-cols-5 grid-rows-5 gap-4
      ">
        <div className="col-start-1 col-end-4 row-start-1 row-end-3">
        <img src={SleepyCat} alt="alal" />
        </div>
        <div className="col-start-2 col-end-4 row-start-3 row-end-6">
        <img src={CatPaw} alt="alal" />
        </div>
        <div className="col-start-4 col-end-6 row-start-2 row-end-6">
        <img src={SpaceCat} alt="alal" />
        </div>
      </div>
    </div>
    </div>
  );
};
export default MoreDetails;
