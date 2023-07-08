import React,{useEffect} from "react";
import "./footer.css";
import Vid_2 from "../../Media/Vid_2.mp4";
import {FiChevronRight, FiSend} from "react-icons/fi";
import{MdOutlineTravelExplore} from "react-icons/md";
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";
import{FaTripadvisor} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <section className="footer"> 
            
            <div className="videoDiv">
            <video src={Vid_2} muted autoPlay loop></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel With Us</h2>
                    </div>

                    <div data-aos="fade-up" className="inputDiv flex">
                        <input  type="text" placeholder="Enter Email Id"/>
                        <button className="btn flex" type="submit">SEND<FiSend className="icon"/> </button>
                    </div>
                    </div>

                    <div className="footerCard flex">
                        
                        <div className="footerIntro flex">
                            
                            <div className="logoDiv">
                                <a href="" className="logo flex"> <MdOutlineTravelExplore className="icon"/>Travel.On</a>
                            </div>
                            
                            <div data-aos="fade-up" className="footerParagraph">
                                We offer the best services at the most affordable rates.So what are you waiting for? Click to Book Now or Drop us a Mail. See you soon at your DREAM DESTINATION.
                            </div>
                            
                            <div data-aos="fade-up" className="footerSocials flex">
                                <AiOutlineTwitter className="icon"/>
                                <AiFillYoutube className="icon"/>
                                <AiFillInstagram className="icon"/>
                                <FaTripadvisor className="icon"/>

                            </div>
                        </div>

                        <div data-aos="fade-up" className="footerLinks grid">
                            {/*GROUP 1 */}
                            <div className="linkGroup">
                                <span className="groupTitle"> OUR AGENCY</span>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Services
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Insurance
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Agency
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Tourism
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Payment
                                </li>

                            </div>
                             {/*GROUP 2 */}
                            <div className="linkGroup">
                                <span className="groupTitle">PARTNERS</span>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Bookings
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Rentcars
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>HostelWorld
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Trivago
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>TripAdvisor
                                </li>

                            </div>
                             {/*GROUP 3 */}
                            <div className="linkGroup">
                                <span className="groupTitle">LAST MINUTE</span>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>London
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>California
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Indonesia
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Europe
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>Ocenia
                                </li>

                            </div>
                        </div>

                        <div className="footerDiv flex">
                            <small>BEST TRAVEL WEBSITE THEME</small>
                            <small>© COPYRIGHTS RESERVED PSD PRODUCTIONS-2023</small>
                        </div>
                    </div>

                
            </div>
        </section>
    )
}
export default Footer;