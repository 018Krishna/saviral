import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    navbar: {
      display: showNavbar ? "flex" : "none", // Show or hide based on state
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "10px 20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "display 0.3s ease-in-out", // Smooth transition
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#4caf50",
      marginRight: "15px",
    },
    searchBarContainer: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      maxWidth: "500px",
    },
    searchInput: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px 0 0 5px",
    },
    searchButton: {
      padding: "10px 20px",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "0 5px 5px 0",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      margin: "0 10px",
      color: "#fff",
      textDecoration: "none",
      fontSize: "14px",
    },
    blackBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "right",
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px 20px",
    },
    categoriesButton: {
      backgroundColor: "#5a5c5a",
      padding: "10px 15px",
      color: "#fff",
      border: "none",
      height: "100%",
      borderRadius: "px",
      cursor: "pointer",
    },
    customerService: {
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
    },
    icons: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    icon: {
      color: "#fff",
      fontSize: "20px",
      cursor: "pointer",
    },
  };

  return (
    <div>
      {/* Top Navbar */}
      <div style={styles.navbar}>
        <div style={styles.logoSection}>
          <img
            src="https://via.placeholder.com/50"
            alt="Shopery Logo"
            style={{ marginRight: "10px" }}
          />
          <h1 style={styles.logo}>Shopery</h1>
        </div>
        <div style={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="Search"
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>Search</button>
        </div>
        <div style={styles.customerService}>
          <i className="fas fa-phone" style={{ marginRight: "8px" }}></i>
          <span>Customer Service: (219) 555-0114</span>
        </div>
      </div>

      {/* Black Bar */}
      <div style={styles.blackBar}>
        <button style={styles.categoriesButton}>All Categories</button>
        <div style={styles.navLinks}>
          <a href="/src/pages/Homepage" style={styles.link}>
            Home
          </a>
          <a href="/shop" style={styles.link}>
            Shop
          </a>
          <a href="/pages" style={styles.link}>
            Pages
          </a>
          <a href="/blog" style={styles.link}>
            Blog
          </a>
          <a href="/about" style={styles.link}>
            About Us
          </a>
          <a href="/contact" style={styles.link}>
            Contact Us
          </a>
        </div>
        <div style={styles.icons}>
          <i className="fas fa-heart" style={styles.icon}></i>
          <i className="fas fa-shopping-cart" style={styles.icon}></i>
          <i className="fas fa-user" style={styles.icon}></i>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
