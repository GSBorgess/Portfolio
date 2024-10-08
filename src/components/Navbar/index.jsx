import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".navbar__container",
        {
          y: -250,
          width: "100%",
        },
        {
          y: 0,
          top: 0,
          zIndex: 100,
        }
      );
      return;
    }
  }, [visible]);

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      timeline.from(".tab__item", { opacity: 0, stagger: 0.5 });
    },
    { scope: container }
  );

  return (
    <nav
      className={`navbar__container ${visible ? "visible" : ""}`}
      ref={container}
    >
      {showSidebar ? (
        <div
          className="overlay"
          onClick={() => setShowSidebar(!showSidebar)}
        ></div>
      ) : (
        ""
      )}

      <div
        className="logo__container"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <SiWebmoney />
      </div>
      <div className={`tab__group ${showSidebar ? "show" : ""}`}>
        <span
          className="icon__container close__btn"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaTimes />
        </span>
        {menu.map((list, index) => (
          <Link
            activeClass="active"
            className="tab__item name"
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className="column nav__buttons__group">
        <button className="btn btn__primary">
          <a href="https://wa.me/5551994207862">
            Contato <FaArrowUpRightFromSquare />
          </a>
        </button>
        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
