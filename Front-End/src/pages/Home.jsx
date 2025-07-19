import "./Home.css"
import imag1 from "../assets/5387.jpg"
import img2 from "../assets/african-child-says-stop-racism-600nw-490141447.jpg"

const Home = () => {
  return (
    <div className="home_main_container">
      <h1 className="main_header">Give Hope. Change Lives.</h1>
      <div className="header_img">
        <img src={img2} className="real_img"/>
      </div>

      
      <p className="subHeaderLine">
        Menna is a nonprofit organization dedicated to uplifting orphans and elderly individuals who lack support. 
        We provide care, connection, and opportunities for a brighter future.
      </p>

      <div className="donate_btn">
        <a href="/donate">Donate Now</a>
      </div>
    </div>
  );
}

export default Home;
