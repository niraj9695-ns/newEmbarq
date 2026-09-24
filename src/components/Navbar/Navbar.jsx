import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import playIcon from "../../assets/navbar/DropdownArrow.png";
import EnquiryPopup from "../../pages/EnquiryPopup";
import { motion, AnimatePresence } from "framer-motion";
import navcar from "../../assets/svg/navcar.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  const handleOpenEnquiry = () => {
    setEnquiryOpen(true);
    setOpen(false);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
  };

  // ✅ SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Add this above return
  const expeditionList = [
    // { name: "K2K2026", slug: "k2k2026" },
    // { name: "Scotland", slug: "scotland" },
    // { name: "Georgia", slug: "georgia" },
    
    
    // { name: "Romania 2026", slug: "romania" },
    // { name: "Punjab & Himachal 2026", slug: "punjabandhimachal" },
    // { name: "Kyrgyzstan 2026", slug: "kyrgyzstan" },
    { name: "Mizoram 2026", slug: "mizoram" },
     { name: "Dubai 2026", slug: "dubaiweekenddrive" },
     { name: "South Korea 2026", slug: "southkorea" },
     { name: "Kyrgyzstan Snow Drive 2026", slug: "kyrgyzstansnowdrive" },
    { name: "New Zealand 2026", slug: "newzealand" },
    { name: "Russia Snow Drive 2027", slug: "russiasnowdrive" },
    { name: "Kashmir to Kanyakumari 2027", slug: "kashmirtokanyakumari" },
    
    { name: "Peru 2027", slug: "offbeatperu" },
    {name : "Scotland 2027", slug: "scotlandnorthcoast500"}, 

    // { name: "Finland 2026", slug: "finland" },
   
    
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  // const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* LOGO */}
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Embarq" className="logo" />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="nav-right">
          <nav className="nav-links">
            <Link to="/about">About</Link>
            <div
              className="dropdown-wrapper"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link to="/expeditions" className="dropdown-title">
                Expeditions
              </Link>
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {expeditionList.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/expedition/${item.slug}`}
                        className="dropdown-item"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/gallery">Gallery</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/media">In the Media</Link>
          </nav>

          {/* <a href="tel:8867809433" className="call-btn">
  <PhoneCall size={16} />
  Call
</a> */}

          <button className="book-btn" onClick={handleOpenEnquiry}>
            <img src={navcar} alt="car icon" className="navcar-icon" />
            Book a Trip
          </button>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={closeMenu}></div>}

      {/* MOBILE MENU */}
      <div ref={menuRef} className={`mobile-menu ${open ? "show" : ""}`}>
        {/* ✅ TOP HEADER */}
        <div className="mobile-menu-header">
          <img src={logo} alt="Embarq" className="mobile-logo" />
        </div>

        {/* MENU ITEMS */}
        <div className="mobile-menu-content">
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-header"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Expeditions
              <img
                src={playIcon}
                alt="arrow"
                className={`dropdown-arrow ${mobileDropdownOpen ? "rotate" : ""}`}
              />
            </div>

            {mobileDropdownOpen && (
              <div className="mobile-dropdown-content">
                {expeditionList.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/expedition/${item.slug}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/testimonials" onClick={closeMenu}>
            Testimonials
          </Link>
          <Link to="/media" onClick={closeMenu}>
            In the Media
          </Link>

          <button
            className="book-btn mobile-book-btn"
            onClick={handleOpenEnquiry}
          >
            <img src={navcar} alt="car icon" className="navcar-icon" />
            Book a Trip
          </button>
        </div>
      </div>

      <EnquiryPopup open={enquiryOpen} handleClose={handleCloseEnquiry} />
    </header>
  );
}

export default Navbar;
