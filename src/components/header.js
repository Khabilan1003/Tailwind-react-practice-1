import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = function () {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrollY > 100
          ? "bg-color-primary-dark border-2 border-color-primary-light"
          : ""
      } fixed top-0 left-0 right-0 z-50`}
    >
      <nav className="container mx-auto py-5 px-5 md:px-20 flex justify-between items-center">
        <div className="text-3xl font-bold text-color-secondary">
          <a href="#home">
            <span className="text-color-white">Light</span>
            Code.
          </a>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-6">
            <li className="hover:text-color-secondary ease-in duration-200">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-color-secondary ease-in duration-200">
              <a href="features">Features</a>
            </li>
            <li className="hover:text-color-secondary ease-in duration-200">
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="hover:text-color-secondary ease-in duration-200">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="hover:text-color-secondary ease-in duration-200">
              <a href="#blog">Blog</a>
            </li>
            <li className="hover:text-color-secondary ease-in duration-200">
              <a href="#contact">Contact</a>
            </li>

            <li>
              <button className="bg-color-secondary px-9 py-3 rounded-md font-bold capitalize hover:opacity-80 ease-in duration-200">
                Free Trail
              </button>
            </li>
          </ul>
        </div>
        {isMenuOpen ? (
          <IoCloseSharp
            className="block lg:hidden z-50"
            onClick={toggleMenu}
            size={28}
          />
        ) : (
          <GiHamburgerMenu
            className="block lg:hidden"
            onClick={toggleMenu}
            size={28}
          />
        )}
        {isMenuOpen ? (
          <div className="bg-color-primary-dark h-[100vh] absolute inset-0 z-40">
            <ul className="h-full grid place-items-center py-20">
              <li className="hover:text-color-secondary ease-in duration-200">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-color-secondary ease-in duration-200">
                <a href="features">Features</a>
              </li>
              <li className="hover:text-color-secondary ease-in duration-200">
                <a href="#testimonial">Testimonial</a>
              </li>
              <li className="hover:text-color-secondary ease-in duration-200">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="hover:text-color-secondary ease-in duration-200">
                <a href="#blog">Blog</a>
              </li>
              <li className="hover:text-color-secondary ease-in duration-200">
                <a href="#contact">Contact</a>
              </li>

              <li>
                <button className="bg-color-secondary px-9 py-3 rounded-md font-bold capitalize hover:opacity-80 ease-in duration-200">
                  Free Trail
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}
