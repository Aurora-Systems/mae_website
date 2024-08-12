import { bg_img } from "./components/css_functions"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import autoparts from "./data/autoparts.json"
import fourbyfour from "./data/4x4.json"
import Marquee from "react-fast-marquee"

function Site() {
  return (
    <div className="min-vh-100">
      <div className="sticky-top">
        <div className="p_bg pe-5 ps-5 pt-1 pb-1 d-flex justify-content-between">
          <div className="d-flex flex-row gap-2">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61563816516498"><i className="bi bi-facebook text-white"></i></a>
            <a target="_blank" href="https://www.linkedin.com/company/mae-parts-distributors/?viewAsMember=true"><i className="bi bi-linkedin text-white"></i></a>
            <a target="_blank" href="mailto:info@maepartsdistributors.co.zw"><i className="bi bi-envelope-at-fill text-white"></i></a>
          </div>
          <div>
            <span className="text-white">+263 78 225 5545</span>
          </div>
        </div>
        <div className="bg-black d-flex justify-content-between align-items-center pe-5 ps-4">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img src="https://ngratesc.sirv.com/mae_website/menu_logo.png"  className="img-fluid"/>
            </div>
            <div>
              <nav className="d-flex gap-2 align-items-center text-white">
                <a className="text-white" href="#auto_parts">Auto Parts</a>
                <a className="text-white" href="#4x4">4X4</a>
                <a className="text-white" href="#about">About</a>
                <a className="text-white" href="#contact_us">Contact Us</a>
              </nav>
            </div>
          </div>
          <div>
            <a href="tel:+263782255545">
            <button className="p_btn">
              Call Us
            </button>
            </a>
          </div>
        </div>
        <div className="p_bg text-white fw-bold">
        <Marquee>
          <span className="me-5">ENGINE PARTS</span>
          <span className="me-5">SUSPENSION</span>
          <span className="me-5">SERVICE KITS</span>
          <span className="me-5">BATTERIES</span>
          <span className="me-5">CLUTCH KITS</span>
          <span className="me-5">SPOILERS</span>
          <span className="me-5">BULL BARS</span>
          <span className="me-5">MAG RIMS</span>
          <span className="me-5">BODY KITS</span>
          <span className="me-5 ">STYLING PARTS</span>
        </Marquee>
      </div>
      </div>
      <div className="d-flex align-items-center" style={bg_img('https://ngratesc.sirv.com/mae_website/home_bg.png')}>
        <div className="p-5">
          <h1 className="display-1 fw-bold p_txt">
            <span className="text-white">MAE</span><br/> PARTS<br/> DISTRIBUTORS
          </h1>
          <p className="fw-bold text-white">SUPPLIERS OF GENUINE DEPENDABLE AUTO PARTS FOR GERMAN AND 4X4 VEHICLES</p>
          <a href="tel:+263782255545">
            <button className="p_btn">
              Call Us
            </button>
            </a>
        </div>
      </div>
     
      <div className="d-flex flex-row border-bottom p-2 border-black border-4">
       <Marquee className="gap-3">
          <img src="https://ngratesc.sirv.com/mae_website/Audi_logo_PNG2%20(1)%202.png" className="img-fluid me-5" width={100} alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/BMW_logo_PNG1%202.png" className="img-fluid me-5" width={100}  alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/Honda_logo_PNG2%201.png" className="img-fluid me-5" width={100} alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/Mercedes_logo_PNG3%201.png"className="img-fluid me-5" width={100}  alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/Toyota_logo_PNG14%201.png" className="img-fluid me-5" width={100}  alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/Audi_logo_PNG2%20(1)%202.png" className="img-fluid me-5" width={100}  alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/BMW_logo_PNG1%202.png" className="img-fluid me-5" width={100}  alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/Honda_logo_PNG2%201.png" className="img-fluid me-5" width={100}  alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/Mercedes_logo_PNG3%201.png" className="img-fluid me-5" width={100}  alt="car logo"/>
          <img src="https://ngratesc.sirv.com/mae_website/Toyota_logo_PNG14%201.png" className="img-fluid" width={50} alt="car logo"/>
       </Marquee>
      </div>
      <div id="auto_parts" className="mt-3">
          <div className="text-center">
            <h1 className="text-black display-1 fw-bold">AUTO <span className="p_txt">PARTS</span></h1>
          </div>
          <div className="container">
            <div className="row row-cols-2 ">
              {
                autoparts.map((i,index)=>{
                  return(
                    <div className="col-4" key={index}>
                      <img src={i.image} className="img-fluid"  alt=""  />
                      <div className="bg-black d-flex flex-row justify-content-between p-2 rounded">
                        <span className="text-white">{i.name}</span>
                        <a href="https://wa.me/263782255545" target="blank"><span className="p_txt">Enquire</span></a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="text-center mt-5 mb-5">
              <a href="https://wa.me/c/263782255545"><button className="p_btn">View Auto Catalogue</button></a>
            </div>
          </div>
      </div>
      <div className="bg-black  ">
        <div className="row m-2 d-flex align-items-center  min-vh-100">
        <div className="col-sm ps-5 text-white">
              <p>Get Up To<br/><span className="p_txt">20% OFF</span></p>
              <h1 className="display-1 fw-bold">BODY PARTS<br/>FOR YOUR<br/>GERMAN<br/><span className="p_txt">VEHICLE</span></h1>
              <a href="https://wa.me/c/263782255545"><button className="p_btn">Shop Now</button></a>
          </div>
          <div className="col-sm text-center" >
              <img className="img-fluid "  src="https://ngratesc.sirv.com/mae_website/Z86i0EXCzjS84AgyusLPH-transformed.png"/>
          </div>
        </div>
         
      </div>
      <div id="4x4" className="mt-3">
          <div className="text-center">
            <h1 className="text-black display-1 fw-bold">4<span className="p_txt">X</span>4</h1>
          </div>
          <div className="container">
            <div className="row row-cols-2 ">
              {
                fourbyfour.map((i,index)=>{
                  return(
                    <div className="col-4" key={index}>
                      <img src={i.image} className="img-fluid"  alt=""  />
                      <div className="bg-black d-flex flex-row justify-content-between p-2 rounded">
                        <span className="text-white">{i.name}</span>
                        <a href="https://wa.me/263782255545" target="blank"><span className="p_txt">Enquire</span></a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="text-center mt-5 mb-5">
              <a href="https://wa.me/c/263782255545"><button className="p_btn">View Auto Catalogue</button></a>
            </div>
          </div>
      </div>
      <div className="p_bg  ">
        <div className="row m-2 d-flex align-items-center  min-vh-100">
        <div className="col-sm ps-5 text-white">
              <p className="fw-bold">Best <span className="text-black">Engines</span></p>
              <h1 className="display-1 fw-bold">UNLEASH<br/>YOUR TRUE<br/><span className="text-black">POTENTIAL</span></h1>
              <a href="https://wa.me/c/263782255545"><button className="p_btn text-black">Shop Now</button></a>
          </div>
          <div className="col-sm text-center" >
              <img className="img-fluid "  src="https://ngratesc.sirv.com/mae_website/engine.png"/>
          </div>
        </div>
       
         
      </div>
      <div className="text-center mt-5 container" id="about">
        <h1 className="fw-bold display-1 text-black">ABOUT <span className="p_txt">US</span></h1>
        <p>At MAE Parts Distributors, we are committed to keeping your vehicles running smoothly with our high-quality auto parts. Specializing in genuine, dependable parts for German and 4x4 vehicles, we understand the importance of reliability and performance. Our extensive inventory ensures that you find the exact components you need, whether you’re maintaining a luxury German sedan or a rugged 4x4.</p>
        <p>With years of experience in the industry, our knowledgeable team is dedicated to providing exceptional service and expert advice. We source only the finest parts directly from trusted manufacturers, guaranteeing that every product meets the highest standards of quality and durability. When you choose MAE Parts Distributors, you're choosing a partner who values your vehicle's performance as much as you do.</p>
        <p>Our mission is simple: to supply you with the best parts available so you can drive with confidence, knowing your vehicle is equipped to handle whatever the road throws its way.</p>
              <img className="img-fluid" src="https://ngratesc.sirv.com/mae_website/5%201.png"/>
      </div>
      <div className="w-100">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1898.6879251290416!2d31.05505612674863!3d-17.867870689700823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a360a453952b%3A0x89822745aa2a5194!2s1st%20St%2C%20Harare!5e0!3m2!1sen!2szw!4v1723475226355!5m2!1sen!2szw" className="w-100" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="p_bg text-center text-white fw-bold p-2" id="contact_us">
          <p>info@maepartsdistributors.co.zw</p>
          <p>1 Edison ST Graniteside Harare</p>
          <p>+263782255545</p>
          <p>Made By <a href="https://aurorasystems.co.zw" className="text-black" target="_blank">Aurora</a></p>
        </div>

      <FloatingWhatsApp accountName="MAE Parts Distributors" phoneNumber="+263782255545" avatar="https://ngratesc.sirv.com/mae_website/menu_logo.png"/>
    </div>
  )
}

export default Site
