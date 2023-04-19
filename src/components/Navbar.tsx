import CatLogo from "../assets/CatwikiLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="flex h-[40px]">
        <img src={CatLogo} alt="cat-logo" />
      </div>
    </Link>
  );
};
export default Navbar;
