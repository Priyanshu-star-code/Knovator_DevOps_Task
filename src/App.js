import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Fade-in animation observer
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    // Hero parallax effect
    const parallax = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".hero");
      if (hero) hero.style.transform = `translateY(${scrolled * -0.5}px)`;
    };
    window.addEventListener("scroll", parallax);

    // Dynamic gradient animation
    let gradientAngle = 0;
    const interval = setInterval(() => {
      gradientAngle += 1;
      const hero = document.querySelector(".hero");
      if (hero)
        hero.style.background = `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 100%)`;
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", parallax);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <nav id="navbar">
        <div className="nav-container">
          <div className="logo">Wander Travel</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
 {/* Hero Section */}
<section id="home" className="hero">
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1>Discover Incredible India</h1>
    <p>Explore culture, heritage, and breathtaking destinations across India</p>
    <a href="#destinations" className="cta-button">Start Exploring</a>
  </div>
</section>



      {/* Destinations */}
     <div className="destinations-grid">
  <div className="destination-card fade-in">
    <img src="https://images.unsplash.com/photo-1727882825675-72f3e004669d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" alt="Taj Mahal" />
    <h3>Taj Mahal</h3>
    <p>A UNESCO wonder symbolizing eternal love in Agra.</p>
  </div>
  <div className="destination-card fade-in">
    <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFpcHVyfGVufDB8fDB8fHww" alt="Jaipur" />
    <h3>Jaipur</h3>
    <p>The Pink City, famous for palaces and forts.</p>
  </div>
  <div className="destination-card fade-in">
    <img src="https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kerala" />
    <h3>Kerala</h3>
    <p>Backwaters, beaches, and lush green landscapes.</p>
  </div>
  <div className="destination-card fade-in">
    <img src="https://images.unsplash.com/photo-1565354785692-9e7523e5a87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFZhcmFuYXNpfGVufDB8fDB8fHww" alt="Varanasi" />
    <h3>Varanasi</h3>
    <p>Experience spirituality at the ghats of the Ganges.</p>
  </div>
  <div className="destination-card fade-in">
    <img src="https://images.unsplash.com/photo-1617380613434-7495e9b45dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhpbWFsYXlhc3xlbnwwfHwwfHx8MA%3D%3D" alt="Himalayas" />
    <h3>Himalayas</h3>
    <p>Trekking, snow peaks, and adventure in North India.</p>
  </div>
  <div className="destination-card fade-in">
    <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww" alt="Goa" />
    <h3>Goa</h3>
    <p>Beaches, nightlife, and Portuguese heritage.</p>
  </div>
</div>


      {/* Features */}
      <section id="features" className="features">
        <div className="section-title fade-in">
          <h2>Why Choose WanderLux</h2>
          <p>Premium travel experiences crafted just for you</p>
        </div>
        <div className="features-grid">
          <div className="feature-card fade-in"><span className="feature-icon">✈️</span><h3>Expert Planning</h3><p>Personalized itineraries crafted by experts.</p></div>
          <div className="feature-card fade-in"><span className="feature-icon">🛡️</span><h3>Safety First</h3><p>24/7 support & comprehensive travel insurance.</p></div>
          <div className="feature-card fade-in"><span className="feature-icon">💎</span><h3>Luxury Accommodations</h3><p>Stay in luxury hotels and resorts.</p></div>
          <div className="feature-card fade-in"><span className="feature-icon">🌟</span><h3>Unique Experiences</h3><p>Access hidden gems and exclusive activities.</p></div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@wanderltravel.com</p>
            <p>📍 123 Travel Street, Adventure City</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Stay connected for travel inspiration</p>
            <div className="social-links">
             
              <a href=" ">📷  Glaray Photo</a>
              <a href="">🐦 Instagram</a>
              <a href="YouTube">📺 YouTube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 WanderLux. All rights reserved. | Crafted with ❤️ for travelers</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
