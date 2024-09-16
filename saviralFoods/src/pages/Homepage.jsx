import  { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

// Reusable PromoCard Component
const PromoCard = ({ title, price, description, backgroundImage, background, buttonText }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    color: background === '#000' ? '#fff' : '#000',
    backgroundSize: "cover", // Adjusting text color based on background
    padding: '20px',
    width: '300px',
    margin: '10px',
    display: 'inline-block',
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const priceStyle = {
    fontSize: '22px',
    margin: '5px 0',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    color: '#fff',
    backgroundColor: '#000',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>{title}</div>
      {price && <div style={priceStyle}>{price}</div>}
      <div>{description}</div>
      <button style={buttonStyle}>{buttonText}</button>
    </div>
  );
};

function Homepage() {
  const [activeItem, setActiveItem] = useState("Vegetables"); // Default active item
  const [currentSlide, setCurrentSlide] = useState(0); // For carousel

  const navigate = useNavigate();

  const handleClick = (product) => {
    // Navigate to the product page with the product ID and pass the product data as state
    navigate(`/product/${product.id}`, { state: { product } });
  };

  
  // For carousel

  // Carousel data
  const slides = [
    {
      title: "Fresh & Healthy Organic Food",
      subText: "Sale up to 48% OFF",
      image: "/src/images/h1.jpg",
    },
    {
      title: "Get Fresh Fruits & Vegetables",
      subText: "Discounts available",
      image: "/src/images/h2.jpg", // Replace with actual image paths
    },
    {
      title: "Seasonal Produce Now Available",
      subText: "Up to 35% OFF",
      image: "/src/images/h3.jpg", // Replace with actual image paths
    },
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      fontFamily: "'Arial', sans-serif",
    },
    sidebar: {
      width: "20%",
      padding: "10px",
    },
    sidebarItem: {
      padding: "10px 0",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: "#333",
      fontSize: "16px",
    },
    sidebarActive: {
      padding: "10px 0",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      backgroundColor: "#4caf50",
      borderRadius: "5px",
    },
    sidebarIcon: {
      marginRight: "10px",
      color: "#4caf50",
    },
    activeIcon: {
      marginRight: "10px",
      color: "#fff",
    },
    mainContent: {
      width: "100%",
      padding: "0 px",
    },
    banner: {
      backgroundSize: "cover", // Ensures the image covers the entire banner
      backgroundPosition: "center", // Centers the image
      padding: "120px",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "background-image 1s ease-in-out", // Smooth transition between slides
    },
    bannerText: {
      maxWidth: "60%",
    },
    bannerTitle: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    bannerSubText: {
      fontSize: "18px",
      marginBottom: "20px",
    },
    shopButton: {
      padding: "10px 20px",
      backgroundColor: "#4caf50",
      color: "#fff",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
    },
    carouselControls: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    controlButton: {
      cursor: "pointer",
      padding: "10px",
      margin: "0 5px",
      borderRadius: "50%",
      backgroundColor: "#ddd",
    },
    activeControlButton: {
      backgroundColor: "#4caf50",
    },
    infoSection: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
      width: "100%",
    },
    infoItem: {
      width: "23%",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    infoIcon: {
      fontSize: "30px",
      marginBottom: "10px",
      color: "#4caf50",
    },
    infoText: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    infoSubText: {
      fontSize: "12px",
      color: "#777",
    },
    promoSection: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "40px",
      height: "350px",
      
    },
    containers: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center',
      fontFamily: "'Arial', sans-serif",
    },
    titles: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    subtitles: {
      fontSize: '16px',
      color: '#4caf50',
      marginBottom: '20px',
    },
    grids: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },
    categoryCards: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: '#fff',
      transition: 'transform 0.3s',
      cursor: 'pointer',
    },
    categoryCardHover: {
      transform: 'scale(1.05)',
    },
    images: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      marginBottom: '10px',
      borderRadius: '8px',
    },
    categoryNames: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    },
    activeCategorys: {
      borderColor: '#4caf50',
    },
    containerss: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '50px 0',
      fontFamily: 'Arial, sans-serif',
    },
    titless: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
      textAlign: 'center',
    },
    subTitless: {
      fontSize: '14px',
      color: '#7BB241',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    productGridss: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    productCardss: {
      width: '180px',
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      transition: 'box-shadow 0.3s ease',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      cursor: 'pointer',
    },
    productImagess: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    productNamess: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      margin: '10px 0',
    },
    productPricess: {
      fontSize: '14px',
      color: '#7a7a7a',
    },
    productButtonss: {
      backgroundColor: '#7BB241',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    contain: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '50px 0',
      fontFamily: 'Arial, sans-serif',
    },
    titl: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
      textAlign: 'center',
    },
    subTitl: {
      fontSize: '14px',
      color: '#7BB241',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    memberGri: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    memberCar: {
      width: '200px',
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      transition: 'box-shadow 0.3s ease',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    memberImageContaine: {
      position: 'relative',
    },
    memberImag: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    socialIcon: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      display: 'flex',
      gap: '10px',
    },
    ico: {
      width: '24px',
      height: '24px',
      backgroundColor: '#fff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    memberNam: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      margin: '10px 0',
    },
    memberRol: {
      fontSize: '14px',
      color: '#7a7a7a',
    },

    cont: {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      margin: '50px 0',
      padding: '0 20px',
    },
    subTit: {
      color: '#7BB241',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '10px',
    },
    tit: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '40px',
    },
    testimonialContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    card: {
      width: '300px',
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    quoteIcon: {
      fontSize: '30px',
      color: '#7BB241',
      marginBottom: '10px',
    },
    quoteText: {
      fontSize: '14px',
      color: '#7a7a7a',
      marginBottom: '20px',
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    name: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    },
    role: {
      fontSize: '12px',
      color: '#7a7a7a',
    },
    rating: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '10px',
    },
    star: {
      color: '#FFD700',
      marginRight: '5px',
    },
  };
  const categories = [
    { names: 'Fresh Fruit', images: '/src/images/fresh.jpeg' },
    { names: 'Fresh Vegetables', images: 'src/images/vege.jpeg' },
    { names: 'Meat & Fish', images: 'src/images/meet.webp' },
    { names: 'Snacks', images: 'src/images/snacks.jpeg' },
    { names: 'Beverages', images: 'src/images/bev.jpeg' },
    { names: 'Bread & Bakery', images: 'src/images/bread.jpeg' },
    { names: 'Cooking', images: 'src/images/cooking.webp' },
    { names: 'Diabetic Food', images: 'src/images/diabetics.jpeg' },
    { names: 'Dish Detergents', images: 'src/images/det.jpeg' },
    { names: 'Oil', images: 'src/images/oil.jpeg' },
  ];
  const items = [
    { name: "Vegetables", icon: "fas fa-leaf" },
    { name: "Fresh Fruit", icon: "fas fa-apple-alt" },
    { name: "River Fish", icon: "fas fa-fish" },
    { name: "Chicken & Meat", icon: "fas fa-drumstick-bite" },
    { name: "Drink & Water", icon: "fas fa-water" },
    { name: "Yogurt & Ice Cream", icon: "fas fa-ice-cream" },
    { name: "Cake & Bread", icon: "fas fa-bread-slice" },
    { name: "Butter & Cream", icon: "fas fa-butter" },
    { name: "Cooking", icon: "fas fa-utensils" },
    { name: "View all Category", icon: "fas fa-ellipsis-h" },
  ];
  const product = [
    { id:1, namess: 'Chinese Cabbage', pricess: '$11.00', img: '/src/images/cabbage.jpg' },
    { id:2, namess: 'Green Lettuce', pricess: '$11.00', img: 'https://via.placeholder.com/150/4' },
    { id:3, namess: 'Green Chili', pricess: '$11.00', img: 'https://via.placeholder.com/150/5' },
    { id:4, namess: 'Corn', pricess: '$11.00', img: 'https://via.placeholder.com/150/6' },
    { id:5, namess: 'Pea', pricess: '$11.00', img: 'https://via.placeholder.com/150/6' },
    { id:6, namess: 'Brinjal', pricess: '$11.00', img: 'https://via.placeholder.com/150/6' },
    
  ];
  const member = [
    {
      nam: 'Jenny Wilson',
      rol: 'CEO & Founder',
      img: 'https://via.placeholder.com/150/1',
      social: ['facebook', 'twitter'],
    },
    {
      nam: 'Jane Cooper',
      rol: 'Worker',
      img: 'https://via.placeholder.com/150/2',
      social: [],
    },
    {
      nam: 'Cody Fisher',
      rol: 'Security Guard',
      img: 'https://via.placeholder.com/150/3',
      social: [],
    },
    {
      nam: 'Robert Fox',
      rol: 'Senior Farmer Manager',
      img: 'https://via.placeholder.com/150/4',
      social: [],
    },
  ];

  const testimonials = [
    {
      name: 'Robert Fox',
      role: 'Customer',
      img: 'https://via.placeholder.com/50',
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet...',
      rating: 5,
    },
    {
      name: 'Dianne Russell',
      role: 'Customer',
      img: 'https://via.placeholder.com/50/1',
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet...',
      rating: 5,
    },
    {
      name: 'Eleanor Pena',
      role: 'Customer',
      img: 'https://via.placeholder.com/50/2',
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet...',
      rating: 5,
    },
  ];

  

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Navbar />
      </div>

      <div style={{ marginTop: "150px", flexGrow: 1, paddingTop: "10px" }}>
        <div style={styles.container}>
          {/* Sidebar */}
          <div style={styles.sidebar}>
            {items.map((item) => (
              <div
                key={item.name}
                style={activeItem === item.name ? styles.sidebarActive : styles.sidebarItem}
                onClick={() => setActiveItem(item.name)} // Set the active item on click
              >
                <i
                  className={item.icon}
                  style={activeItem === item.name ? styles.activeIcon : styles.sidebarIcon}
                ></i>
                {item.name}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div style={styles.mainContent}>
            {/* Carousel */}
            <div
              style={{
                ...styles.banner,
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            >
              <div style={styles.bannerText}>
                <h1 style={styles.bannerTitle}>{slides[currentSlide].title}</h1>
                <p style={styles.bannerSubText}>{slides[currentSlide].subText}</p>
                <button style={styles.shopButton}>Shop now</button>
              </div>
            </div>

            {/* Carousel Controls */}
            <div style={styles.carouselControls}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.controlButton,
                    ...(index === currentSlide ? styles.activeControlButton : {}),
                  }}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

           
            

            
            
          </div>
        </div>
         {/* Info Section */}
        <div style={styles.infoSection}>
              <div style={styles.infoItem}>
                <i className="fas fa-shipping-fast" style={styles.infoIcon}></i>
                <p style={styles.infoText}>Free Shipping</p>
                <p style={styles.infoSubText}>Free shipping with discount</p>
              </div>
              <div style={styles.infoItem}>
                <i className="fas fa-dollar-sign" style={styles.infoIcon}></i>
                <p style={styles.infoText}>Secure Payment</p>
                <p style={styles.infoSubText}>Secure payment options</p>
              </div>
              <div style={styles.infoItem}>
                <i className="fas fa-sync" style={styles.infoIcon}></i>
                <p style={styles.infoText}>Easy Return</p>
                <p style={styles.infoSubText}>Hassle-free returns</p>
              </div>
              <div style={styles.infoItem}>
                <i className="fas fa-headset" style={styles.infoIcon}></i>
                <p style={styles.infoText}>24/7 Support</p>
                <p style={styles.infoSubText}>We are here to help</p>
              </div>
            </div>
            {/* Promo Section */}
            <div style={styles.promoSection}>
              <PromoCard
                title="Special Offer"
                price="$29.99"
                description="Get organic produce at great prices!"
                backgroundImage="/src/images/ve.jpg"
                buttonText="Shop Now"
              />
              <PromoCard
                title="Low Fat Meet"
                description="Save big on fresh fruits and vegetables."
                backgroundImage="/src/images/goat.jpg"
                buttonText="Check it out"
              />
              <PromoCard
                title="Seasonal Produce"
                price="$19.99"
                description="Fresh seasonal items just arrived!"
                backgroundImage="/src/images/fruit.jpg"
                buttonText="Buy Now"
              />
            </div>
            <div style={styles.containers}>
      <p style={styles.subtitles}>CATEGORY</p>
      <h2 style={styles.titles}>Shop by Top Categories</h2>
      <div style={styles.grids}>
        {categories.map((category) => (
          <div
            key={category.names}
            style={{
              ...styles.categoryCards,
              ...(category.name === 'Fresh Vegetables' && styles.activeCategorys),
            }}
          >
            <img src={category.images} alt={category.names} style={styles.images} />
            <p style={styles.categoryNames}>{category.names}</p>
          </div>
        ))}
      </div>


      <div style={styles.containerss}>
  <div style={styles.subTitless}>Products</div>
  <div style={styles.titless}>Our Featured Products</div>
  <div style={styles.productGridss}>
    {product.map((product, index) => {
      // Ensure price is defined and is a number
      const price = typeof product.pricess === 'number' ? product.pricess.toFixed(2) : 'N/A';

      return (
        <div key={index} style={styles.productCardss} onClick={() => handleClick(product)}>
        <img src={product.img} alt={product.namess} style={styles.productImagess} />
        <div style={styles.productNamess}>{product.namess}</div>
        <div style={styles.productPricess}>${price}</div> {/* Use product.price instead of price */}
      </div>
      
      );
    })}
  </div>
</div>
    <div style={styles.contain}>
      <div style={styles.subTitl}>Team</div>
      <div style={styles.titl}>Our Professional Members</div>
      <div style={styles.memberGri}>
        {member.map((member, index) => (
          <div key={index} style={styles.memberCar}>
            <div style={styles.memberImageContaine}>
              <img
                src={member.img}
                alt={member.nam}
                style={styles.memberImag}
              />
              {member.social.length > 0 && (
                <div style={styles.socialIcon}>
                  {member.social.includes('facebook') && (
                    <div style={styles.ico}>
                      <img
                        src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
                        alt="Facebook"
                        width="16"
                        height="16"
                      />
                    </div>
                  )}
                  {member.social.includes('twitter') && (
                    <div style={styles.ico}>
                      <img
                        src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                        alt="Twitter"
                        width="16"
                        height="16"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div style={styles.memberNam}>{member.nam}</div>
            <div style={styles.memberRol}>{member.rol}</div>
          </div>
        ))}
      </div>
      <div style={styles.cont}>
      <div style={styles.subTit}>Client Testimonial</div>
      <div style={styles.tit}>What our Client Says</div>
      <div style={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.quoteIcon}>“</div>
            <div style={styles.quoteText}>{testimonial.text}</div>
            <div style={styles.profile}>
              <img
                src={testimonial.img}
                alt={testimonial.name}
                style={styles.avatar}
              />
              <div>
                <div style={styles.name}>{testimonial.name}</div>
                <div style={styles.role}>{testimonial.role}</div>
              </div>
            </div>
            <div style={styles.rating}>
              {Array(testimonial.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} style={styles.star}>★</span>
                ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
   
    </div>
    <Footer />
    </div>
      </div>
    </div>
  );
}

export default Homepage;
