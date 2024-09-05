import { Link } from "react-router-dom";
import HookLogo from "@/assets/images/hook.png";


const HeaderItems = () => {
  return (
    <>
      <Link to="/" className="text-decoration-none text-white align-middle">
        <img src={HookLogo} alt="ReactHooks" width="50" height="50" />
      </Link>
      <Link
        to="/"
        className="mx-1 text-decoration-none text-white align-middle"
      >
        <span>React Hooks Guide</span>
      </Link>
    </>
  );
};

export default HeaderItems;
