import React,{useEffect} from "react";
import "./main.css"
import img1 from "../../Media/img1.jpg";
import img2 from "../../Media/img2.jpg";
import img3 from "../../Media/img3.jpg";
import img4 from "../../Media/img4.jpg";
import img5 from "../../Media/img5.jpg";
import img6 from "../../Media/img6.jpg";
import img7 from "../../Media/img7.jpg";
import img8 from "../../Media/img8.jpeg";
import img9 from "../../Media/img9.jpg";
import {HiOutlineLocationMarker}  from "react-icons/hi";
import {HiOutlineClipboardCheck} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";


const data=[
    {
        id:1,
        imgSrc:img1,
        destTitle:"Bali Island",
        Location:"Indonesia",
        grade:"CULTURAL RELAX",
        fees:"₹40000",
        desc: "Bali, Indonesia’s most famous island, is located to the west of Java in the Lesser Sunda Islands. It is world-renowned for its scenic rice terraces, fragrant cuisine, stunning beaches and a galore of culture and tradition. With its elaborate temples, endless coastline, some of the world's best coral reefs, waterfalls and retreats, Bali combines leisure and adventure impeccably. "
    },
    {
        id:2,
        imgSrc:img2,
        destTitle:"Machu Picchu",
        Location:"Peru",
        grade:"CULTURAL RELAX",
        fees:"₹120000",
        desc: "Machu Picchu is an Inca site located in Peru and situated at the height of 7972 meters. It is located on the eastern slopes of the Andes and overlooks the Urubamba River. Machu Picchu has been designated as a world heritage site by UNESCO, and it has helped to attract tourists for the site.You will also admire the remarkable history of the Inca Civilization and the feat of what the people of the civilization achieved. "
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:"Taj Mahal",
        Location:"India",
        grade:"CULTURAL RELAX",
        fees:"₹18000",
        desc: "Taj Mahal is the epitome of grandeur and splendour, you cannot fathom the beauty of this white marbled monument unless you stand in front of it. As you approach Taj Mahal, it gradually becomes known to you that this is no ordinary monument, but a vision come to life! Moved by its beauty and the deep affection of Shah Jahan for Mumtaz.It is located on the bank of the Yamuna River and is counted among the most popular heritage monuments in India.",
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:"Paris",
        Location:"France",
        grade:"CULTURAL RELAX",
        fees:"₹170000",
        desc: "Paris is not just the capital of France; it’s the capital of fashion and the city of love. Located by the River Seine in the north of France, Paris is reputed for being the most beautiful and romantic city in the world. It is overwhelmed with culture, history, iconic architecture, arty treasures, delicious food and exciting fashion.Paris is known for its many monuments, especially the Eiffel Tower, Notre-Dame Cathedral, Arc de Triomphe, Opéra Garnier, Les Invalides,etc.Whether you’re a first-timer or regular visitor, Paris always seems magical "
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:"London",
        Location:"England",
        grade:"CULTURAL RELAX",
        fees:"₹240000",
        desc: "London remains a city that fascinates and attracts millions of visitors each year. And for good reason. It is one of those great 'world cities' cosmopolitan centers that offer the visitor not just an unparalleled choice of museums and monuments, but also an unforgettable experience and a change of scenery . London is London , and no other city in the world is like it.Its attractions and places of interest are countless and cater for all tastes and all ages; its shops - small and large - are often unforgettable; its culture - theatres and museums combined - in a class of its own."
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:"New York City",
        Location:"United States Of America",
        grade:"CULTURAL RELAX",
        fees:"₹350000",
        desc: "An iconic global centre that has inspired the world with its brilliant architecture, movies, and art.New York is well-known for its magnificent skyscrapers, Broadway shows and beautiful landmarks, making it the perfect destination for travellers from all over.From the flashy neon lights, the beautiful chaos of Times Square, the skyscrapers of Wall Street and the verdant ways of Central Park, New York City amazes with its energy and vibrancy. World-class exhibition halls and exceptional world heritage sites like the Statue of Liberty are simply captivating and mesmerising"
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:"Dubai",
        Location:"UAE",
        grade:"CULTURAL RELAX",
        fees:"₹110000",
        desc: "Dubai has grown to be one of the most recognisable destinations worldwide with its lavish architecture, incredible skylines and giant shopping malls.Dubai is also the home to Burj Khalifa, the tallest human-made building globally.It is filled with shimmering skyscrapers, fancy hotels, shopping malls and restaurants. Dubai Fountain, with jets and lights choreographed to music, Atlantis, the Palm and an aquarium resort are among the top tourist destinations in Dubai."
    },
    {
        id:8,
        imgSrc:img8,
        destTitle:"Bangkok",
        Location:"Thailand",
        grade:"CULTURAL RELAX",
        fees:"₹35000",
        desc: "A city that never sleeps, Bangkok, the capital of Thailand is a modern-day melting pot of contrasting cultures and faiths. Here, towering skyscrapers stand in harmony next to temples and monasteries.Bangkok's multi-faceted sights, attractions and city life appeal to diverse groups of tourists.  The luxury malls and shopping centres compete with the street bazaars and floating markets. Cuisines - both Thai and from around the world are showcased in all their glory on the streets as well as in rooftop restaurants. "
    },
    {
        id:9,
        imgSrc:img9,
        destTitle:"Melbourne ",
        Location:"Australia",
        grade:"CULTURAL RELAX",
        fees:"₹150000",
        desc: "Second, only to Sydney in terms of population, Melbourne is a vibrant city in southern Australia, considered to be the cultural capital of the country.It is considered to be one the best cities in the world to live in.Melbourne is a melting pot of cultures and is famous for hosting major art and music festivals, and sporting events and is home to some of the country's best fine dining institutions. The city also offers a unique insight into the history and culture of the Aboriginal community, the original inhabitants of the vast island nation."
    }

];

function Main(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>
            
            <div className="secContent grid">
                {data.map((e)=>{
                    return (
                        <div data-aos="fade-up" key={e.id} className="singleDestination">
                            
                            <div className="imageDiv">
                                <img src={e.imgSrc} alt="" />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{e.destTitle}</h4>
                                <span className="continent flex"><HiOutlineLocationMarker className="icon"/> 
                                <span className="name">{e.Location}</span>
                                </span>
                            </div>

                            <div className="fees flex">
                                <div className="grade"> <span>{e.grade}<small>+1</small> </span>
                                </div>

                                <div className="price"><h5>{e.fees}</h5>
                                </div>
                            </div>

                            <div className="desc"><p>{e.desc}</p>
                            </div>

                            <button className="btn flex">
                                DETAILS <HiOutlineClipboardCheck className="icon"/>
                            </button>


                        </div>
                    )
                })}
            </div>

        </section>
    )
}
export default Main;