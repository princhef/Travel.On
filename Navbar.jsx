import React,{useState} from "react";
import "./navbar.css";
import {MdOutlineTravelExplore} from "react-icons/md"; 
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";

function Navbar(){
    const[active,setactive]=useState("navBar");

    return (
        <section className="navBarSection">
            <header className="header flex">
                
                <div className="logoDiv">
                    <a href="" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon"/>Travel.On</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={()=>{
                        setactive("navBar")
                    }} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div className="toggleNavbar" onClick={()=>{
                     setactive("navBar navBarOn");
                }} >
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>

    )
}
export default Navbar;


