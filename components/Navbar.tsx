import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState,useEffect, useRef } from "react";

function useOutsideAlerter(ref:any, cb : Function) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          cb()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null)
    useOutsideAlerter(ref, ()=>setIsOpen(false));

  function handleClick() {
    setIsOpen(!isOpen);
  }
  const menus =
      [<a href="#info" className={style.navbarMenu}>
        Home
      </a>,
      <a href="#about" className={style.navbarMenu}>
        About
      </a>,
      <a href="#portfolio" className={style.navbarMenu}>
        Portfolio
      </a>,
      <a href="#contact" className={style.navbarMenu}>
        Contact
      </a>]
  ;
  return (
    <nav className={style.navbar}>
      <div className={style.hidden} ref = {ref}>
        <a onClick={handleClick}>
          <GiHamburgerMenu size="30px" color="#FFFFFF" style={{marginTop : '5px'}}/>
        </a>
        {isOpen ? menus : null}
      </div>
      {menus}
    </nav>
  );
}
