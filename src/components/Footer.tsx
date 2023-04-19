import CatLogo from "../assets/CatwikiLogoWhite.svg";

const Footer = () => {
  return (
    <div className=" bg-black rounded-t-3xl px-4">
      <div className="flex justify-between text-white p-4 items-center">
      <img src={CatLogo} alt="cat-logo" className="h-[30px]" />
        <span className="text-white">github - @anshFE97</span>
      </div>
    </div>
  );
};
export default Footer;
