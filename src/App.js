import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Slidshow from "./components/Slidshow/Slidshow";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slidshow />
      <Header/>
      <Content/>
      <div className="contact">
        <div className="container">
          <h2 className="contact-txt" id="tt">CONTACT</h2>
          <p className="par"><i>Fan? Drop a note!</i></p>
          <div className="contnt">
            <div className="content-left">
              <i class="fa-solid fa-location-dot"></i>
              Chicago, US
              <br />
              <i class="fa-solid fa-phone"></i>
              Phone: +00 151515
              <br />
              <i class="fa-solid fa-envelope"></i>
              Email: mail@mail.com
            </div>
            <div className="content-rigth">
              <div className="contnt-name">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email"/>
              </div>
              <div className="content-message">
                <input type="text" placeholder="Message"/>
                <div className="btn-card">
                    <button>
                        <a href="/">SEND</a>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <div className="overlay"></div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="icons">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-snapchat-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="link">
            <p>Powered by <a href="/"> HenniDjalel.css</a></p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
