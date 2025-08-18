import { Link } from "react-router-dom";
import { useLogin } from "../context/contextApi";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { isLogin, setIsLogin } = useLogin();
  const [navShow, setNavShow] = useState(false);

  useEffect(() => {
    if (navShow) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navShow]);

  return (
    <div className="bg-white py-6 max-xl:px-4 shadow-md relative">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold">shop</h2>
          {isLogin ? (
            <div className="flex gap-4">
              <p className="text-xl mt-1 font-bold">{isLogin.userName}</p>
              <button
                className="text-lg mt-1 cursor-pointer"
                onClick={() => setIsLogin(null)}
              >
                log out
              </button>
            </div>
          ) : (
            <Link
              to={"/form/signup"}
              className="text-xl mt-1 cursor-pointer font-bold"
            >
              Login
            </Link>
          )}
        </div>

        <ul className="hidden sm:flex gap-6 text-xl">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={"/"}>home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={"/shop"}>shop</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={"/buying"}>buying</Link>
          </li>
        </ul>

        <div className="sm:hidden">
          <button onClick={() => setNavShow(!navShow)}>
            {navShow ? (
              <FontAwesomeIcon icon={faXmark} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="xl" />
            )}
          </button>
        </div>
      </div>

      {navShow && (
        <div
          onClick={() => setNavShow(false)}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-2/3 max-w-xs h-screen bg-white shadow-lg flex flex-col gap-6 text-xl pt-12 px-6 z-50 transform transition-transform duration-300 ease-in-out
        ${navShow ? "translate-x-0" : "translate-x-full"}`}
      >
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to={"/"} onClick={() => setNavShow(false)}>
            home
          </Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to={"/shop"} onClick={() => setNavShow(false)}>
            shop
          </Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to={"/buying"} onClick={() => setNavShow(false)}>
            buying
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
