import React from "react";
import Image from "next/image";
import "./sponsors.css";
import RoyalEnfield from "./img/Royal_Enfield_Logo.png"
import Unstop from "./img/unstop-icon-800x800.png"








  export default function Sponsors(){
   
    return(

      <>
      <div className="sponsor" style={{ }}>
      <div className="sponsor_wrapper">
<h3>Powered By</h3>
         <Image src={Unstop} alt="" srcset="" />
         <h3>Associative Sponsor</h3> 
         <Image src={RoyalEnfield} alt="" srcset="" /> 
        </div>
  </div>
      </>
//     <div className="sponsor" style={{ }}>
//        <div className="sponsor_wrapper">
//          <h3>Technical Collaboration</h3>
//          <Image src={drdo} alt="" srcset="" />

//          <h3>Powered By</h3>
//          <Image src={unstop} alt="" srcset="" />
// {/* 
//          <h3>Drone Partner</h3>
//         <div className="dronePartner">
//          <Image src={insidefpv} alt="" srcset=""  />
//          </div> */}

//           <h3>Associative Sponsor</h3>
//          <div className="Imgcontent">
//           <Image src={imperial} alt="" srcset="" />
//           <Image src={cogna} alt="" srcset="" />
//            <Image src={powerPlanner} alt="" srcset="" />
//           <Image src={mitu} alt="" srcset="" />

//          </div> 
         
//        </div>
//       </div> 


    );
}

