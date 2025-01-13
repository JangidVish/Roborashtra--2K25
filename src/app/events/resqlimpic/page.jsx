import React from "react";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";
const CamWarrior = () => {
  const EventChar = "https://drive.google.com/uc?export=download&id=1jL-8j78OoS_rveAEXH4Gq4TTwdlzounB"
  return (
    <ImageLoader>
    <div className="Event">
      <div className="Event-content resq">
      <h1 className="EventTitle">ResQlympic</h1>
        <p className="Content">
        🚨 Welcome to ResQlympic – The Ultimate Robotics Rescue Challenge! 🤖🛠️ <br />

Get ready for ResQlympic, where manual-operated robots with in-built cameras navigate a challenging arena filled with obstacles to rescue hostages and bring them to safety! <br />

🏁 How It Works: <br />

One thrilling round: Operate your robot remotely from a separate room using a live camera feed. <br />
Navigate obstacles: Steer through the arena to reach and rescue hostages, delivering them to the safe zone. <br />
Put your skills to the test and become the ResQlympic champion! <br />
        <h2 className="headContact">For any event related query <br />Contact Atharva(Problem Statement Head) : 8767835399</h2>
        <div className="wpYoutube">
                  <a href="http://wa.me/+919307727077" rel="noopener noreferrer" target="_blank">
        <button className="whatsapp">Contact Us On Whatsapp</button>
        </a>
        
        {/* <a href="https://youtu.be/I1SMKisHUbM?si=OSec1umXgSNuwO0O" rel="noopener noreferrer" target="_blank">
        <button className="youtube" disabled>Tutorial Video</button>
        </a> */}
        <a
  href="https://youtu.be/I1SMKisHUbM?si=OSec1umXgSNuwO0O"
  className="youtube"
  target="_blank"
  rel="noopener noreferrer"
  aria-disabled="true"

>
  Tutorial Video 
</a>

        
        </div>
        </p>
        <div className="action_btn">
          <Btn2 link={"/ResqlympicRuleBook25.pdf"} />
          <Btn1 text={"Register"} link={"https://unstop.com/p/resqlympics-pimpri-chinchwad-college-of-engineering-and-researchpccoer-pune-1172927"} />
        </div>
      </div>
      {/* <Image src={EventChar} alt="robowar" width={400} height={200} /> */}
    </div>
    </ImageLoader>
  );
};

export default CamWarrior;
