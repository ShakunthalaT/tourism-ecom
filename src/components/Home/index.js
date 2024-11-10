import {Link} from "react-router-dom"
import Header from '../Header'
import Footer from '../Footer'
import { FaWifi } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { IoBicycleOutline } from "react-icons/io5";
import { BsFlagFill } from "react-icons/bs";
import { IoMdBook } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoMdCamera } from "react-icons/io";
import './index.css' 

const renderDiscover = () =>(
    <>
    <div className='discover'>
    <h1>Discover</h1>
    <div className='cards-container'>
       <div className='item-1'>
         <div className="profile-container">
            <img src="https://res.cloudinary.com/drz669sta/image/upload/a_hflip/v1731222552/Section_1-030_rnnwwc.jpg" alt="profile" className="profile"/>
            <div>
                <h1>Arjun Raghav</h1>
            </div>
         </div>
         <p>
            I am writing this after reflecting on my one
            month stay with Bricabin in Ladakh. Right
            from picking us up at the airport to dropping
            us back there after a month, Urgan was very
            responsible and took good care of my friends
            and me.
        </p>
       </div>
       <div className='item-1'>
         <div className="profile-container">
            <img src="https://res.cloudinary.com/drz669sta/image/upload/v1731222562/Section_1-042_mcjfvu.jpg" alt="profile-url" className="thumbnail-img"/>
            <div>
                <img src="https://res.cloudinary.com/drz669sta/image/upload/a_hflip/v1731222552/Section_1-030_rnnwwc.jpg" alt="profile" className="profile"/>
                <h1>Anand Solanki</h1>
            </div>
         </div>
         <p>
            I am writing this after reflecting on my one
            month stay with Bricabin in Ladakh. Right
            from picking us up at the airport to dropping
            us back there after a month, Urgan was very
            responsible and took good care of my friends
            and me.
        </p>
       </div>
       <div className='item-1'>
         <div className="profile-container">
            <img src="https://res.cloudinary.com/drz669sta/image/upload/a_hflip/v1731222552/Section_1-030_rnnwwc.jpg" alt="profile" className="profile"/>
            <div>
                <h1>Arjun Raghav</h1>
            </div>
         </div>
         <p>
            I am writing this after reflecting on my one
            month stay with Bricabin in Ladakh. Right
            from picking us up at the airport to dropping
            us back there after a month, Urgan was very
            responsible and took good care of my friends
            and me.
        </p>
       </div>
       <div className='item-1'>
         <div className="profile-container">
            <img src="https://res.cloudinary.com/drz669sta/image/upload/a_hflip/v1731222552/Section_1-030_rnnwwc.jpg" alt="profile" className="profile"/>
            <div>
                <h1>Arjun Raghav</h1>
            </div>
         </div>
         <p>
            I am writing this after reflecting on my one
            month stay with Bricabin in Ladakh. Right
            from picking us up at the airport to dropping
            us back there after a month, Urgan was very
            responsible and took good care of my friends
            and me.
        </p>
       </div>
    </div>
    </div>
    </>
)
 
const renderServices = () =>(
    <>
    <div className='services'>
    <h1>Services</h1>
    <div className="services-container">
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <FaWifi size="45"/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <MdFastfood size={45}/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <MdHomeFilled size={45}/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <FaCar size="45"/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <IoBicycleOutline size="55"/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <IoMdBook size="45"/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <BsFlagFill size="45"/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <FaCar size="45"/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
          <div className="service-card-1">
           <h1>High Speed Internet</h1>
           <IoMdCart size="45"/>
           <p>Optical fiber connections provided in
                not only in your cabins but rather to
                all of the BriSphere scenic working
                spaces and dinning areas.
            </p>
          </div>
    </div>
    </div>
    </>
)

const renderTourism = () =>(
    <>
    <div className='tourism-card-view'>
        <div className='work-container'> 
            <div>
            <h1>Work from Ladakh</h1>
            <p>India’s first true digital tourism ecosystem</p>
            <div>
            <FaFacebook size={48}/>
            <IoMdCamera size={50}/>
            </div> 
            </div>
            <img src="https://res.cloudinary.com/drz669sta/image/upload/v1731222547/Section_1-000_bywwbi.jpg" alt="tourism" className='main-img'/>
        </div>
      <div className="check-in-book-card">
    <div className='check'>
        <p>CHECK-IN</p>
        <input type="date" className='date'/>
    </div>
   <hr/>
   <div className='check'>
        <p>CHECK-OUT</p>
        <input type="date" className='date'/>
    </div>
    <hr/>
    <div className="room">
    <div className="room-container-text">
        <p>ROOMS</p>
        <div className='count'>
            <button type="button" className='in-btn'>+</button>
            <p>1</p>
            <button type="button" className='de-btn'>-</button>
        </div>
    </div>
      <div className="book-container">
        <Link to="/booking">
         <button type="button" className='book-btn'>Book</button>
        </Link>
        
        </div>
    </div>
  </div>
    </div>
    </>
)

const Home = () =>(
    <>
    <Header/>
    <div className="home-container">
        {renderTourism()}
       
        {renderDiscover()}
        {renderServices()}
        
        
    </div>
    <Footer/>
    </>
)

 export default Home