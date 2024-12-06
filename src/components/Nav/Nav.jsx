"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import "./Nav.css";
import Link from "next/link";
import smallLogo from "@/images/loaderLogo.png";
import { Play } from "next/font/google";
import { Ri4KFill, RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Navcard from "../NavCard/navcard";
import HomeNav from "../NavCard/images/Home.png";
import Eventnav from "../NavCard/images/Eventnav.png";
import Teamnav from "../NavCard/images/Teamnav.jpg";
import Sponsornav from "../NavCard/images/Sponsornav.png";
import Clannav from "../NavCard/images/Clannav.png";
import Contactnav from "../NavCard/images/contact.jpg"
import glimpsenav from "@/components/NavCard/images/glimpsenav.png";
import Past from "../NavCard/images/Ourclanlogo.jpg"
// import Unstop from "./images/Unstop.jpg"; // Assuming the correct path


const play = Play({ subsets: ["latin"], weight: ["400"] });

const options = [
  {
    opt: "Home",
    link: "/",
    img: HomeNav
  },
  {
    opt: "Event",
    link: "/menu",
    img:Eventnav
  },
  {
    opt: "Team",
    link: "/menu/teams",
    img:Teamnav
  },
  {
    opt: "Sponsors",
    link: "/menu/sponsors",
    img:Sponsornav
  },
  {
    opt: "Clan",
    link: "/menu/clan",
    img:Clannav
  },
  {
    opt: "Glimpse",
    link: "/menu/Glimpse",
    img:glimpsenav
  },
  {
    opt: "Contact Us",
    link: "/menu/Contact",
    img:Contactnav
  },
  
];

const Nav = () => {
  const [menu, setMenu] = useState(false);
  let menustyle = menu ? { left: "0%" } : { left: "-110%" };
  return (
    <div className="navresponsive">
      <nav >
        <Link href="/" className="Nav">
         
          <Image src={smallLogo} width={50} height={50} alt="" srcset=""  id="smallLogo"/>
          <Image src={logo} width={275} height={100} alt="logo" id="logo"/>
        </Link>

       {/* <p>Powered By</p> */}
       {/* <Image src={Unstop} width={50} height={50} alt="" srcset="" id="unstop"/>   */}

        <div className="HamMenuBar absolute top-4 right-3 text-4xl cursor-pointer"  onClick={()=>{
          setMenu((prev)=> !prev)
         }}>
          <RiMenu4Fill className="HamMenuIcon"/>
       
      
       </div>
         <ul className="desktop-links" style={menustyle}>
          <div className="link-shelf">
          {options.map((option, index) => {
            return (
              <>              <li key={option.opt}>
                <Link
                  className={play.className}
                  href={option.link}
                  onClick={() => setMenu((prev) => !prev)}
                >
                  <Navcard name={option.opt} index={index} imgSrc={option.img} />
                </Link>
              </li>
              <RxCross2 className="absolute top-8 right-4 text-4xl text-white cursor-pointer" onClick={() => setMenu((prev) => !prev)} />
              </>

            );
          })}
          </div>
        </ul> 
        

      </nav>

     
    </div>


  );
};

export default Nav;
