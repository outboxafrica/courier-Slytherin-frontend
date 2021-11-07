import React, { useEffect, useState } from "react";
import "../Styles/components/Navbar.css";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
const Navbar = () => {
  const [showHam, setshowHam] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768 && setshowHam(false);
    });
  }, []);

  return (
    <nav className="smallNav">
      {showHam ? (
        <HamburgerMenu setshowHam={setshowHam} />
      ) : (
        <>
          <ul className="navleft">
            <li className="navLink ham2">Home</li>
            <li className="navLink ham2">About</li>
            <li className="navLink ham2">Shop</li>
            <div className="navIcon ham" onClick={() => setshowHam(true)}>
              <RiMenu4Line />
            </div>
          </ul>
          <div className="logo">EduMat</div>
          <div className="navRight">
            <div className="navIcon ham2">
              <IoSearchOutline />
            </div>
            <div className="navIcon">
              <IoCartOutline />
            </div>
            <li className="navLink ham2">Login</li>
          </div>
        </>
      )}
    </nav>
  );
};

const HamburgerMenu = ({ setshowHam }) => {
  return (
    <div className="hamMenu">
      <div className="closebtnNv">
        <button className="closeButtonNav" onClick={() => setshowHam(false)}>
          <div class="bar"></div>
          <div class="bar2"></div>
        </button>
      </div>
      <li className="navLink hamb ">Home</li>
      <li className="navLink hamb">About</li>
      <li className="navLink hamb">Shop</li>
      <li className="navLink hamb">Cart</li>
      <li className="navLink hamb">Account</li>
      <div className="Navsocials">
        <div className="bannerSocialIcon">
          <GrInstagram />
        </div>
        <div className="bannerSocialIcon">
          <FaPinterest />
        </div>
        <div className="bannerSocialIcon">
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
