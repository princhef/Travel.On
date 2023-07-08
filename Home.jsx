import React,{useEffect} from "react";
import "./home.css";
import Vid_1 from "../../Media/Vid_1.mp4"
import {GrLocation} from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {SiTripadvisor} from "react-icons/si"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"
import Aos from "aos";
import "aos/dist/aos.css";

function Home(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])

    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={Vid_1} muted autoPlay loop></video>

            <div className="homeContent container">
                <div data-aos="fade-up" className="textDiv">
                    <span  className="smallText">OUR PACKAGES</span>
                    <h1 className="homeTitle">
                        SEARCH YOUR HOLIDAY
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">

                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter Name Here...." />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Search your date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">$5000</h3>
                            </div>
                            <div className="input flex">
                                <input type="range" min="1000" max="5000"/>
                            
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>

                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <SiTripadvisor className="icon"/>
                    </div>
                    <div className="leftIcons">
                    <BsListTask className="icon"/>
                    <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;