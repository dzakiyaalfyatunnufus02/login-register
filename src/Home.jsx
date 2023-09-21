// import React from "react";
// import "../src/Home.css";
import Swal from "sweetalert2";
import React from "react";
import "./Home.css"; // Import your custom CSS file for styling
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  const handleLogout = () => {
    // Hapus data autentikasi dari localStorage atau sesuai dengan kebutuhan aplikasi Anda
    localStorage.clear();
    navigate("/");
    

    // Tampilkan pesan sukses atau tindakan lainnya
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Logout berhasil',
      showConfirmButton: false,
      timer: 2500
    });
  };
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to My Aesthetic Home</h1>
      </header>

      <main className="main-content">
        <section className="featured-section">
          <div className="featured-image">
            {/* Add your featured image here */}
            <img src="your-image-url.jpg" alt="Featured" />
          </div>
          <div className="featured-text">
            <h2>Explore the Beauty</h2>
            <p>Discover the world of aesthetics.</p>
            <button className="explore-button">Explore</button>
          </div>
        </section>

        <section className="content-section">
          <h2>Featured Content</h2>
          {/* Add your featured content here */}
        </section>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </main>

      <footer className="footer">
        <p>&copy; 2023 My Aesthetic Home</p>
      </footer>
    </div>
  );
};




export default Home;
