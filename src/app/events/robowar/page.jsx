import React from "react";
import Image from "next/image";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";
const CamWarrior = () => {
  // const EventChar = "https://drive.google.com/uc?export=download&id=14eBTQOgsIRHHEb11rUoIUWkkHW6HU261"
  return (
    <ImageLoader>
      <div className="Event">
        <div className="Event-content robowar">
          <h1 className="EventTitle">YantraUtsav</h1>
          <p>
          🎉 Welcome to Yantrautsav - Unleash Your Robotics Genius! 🤖🚀<br />

Join Yantrautsav, where aspiring innovators showcase their creativity and robotics skills! Whether you are a beginner or a pro, this is your chance to bring your bold ideas to life. <br />

✨ Why Attend?<br />

Show off your creations and compete with the best. <br />
Learn and inspire alongside passionate tech minds. <br />
Open to all: No matter your experience, students of all ages are welcome! <br />
Do not miss this thrilling event - register now and make your mark in the world of robotics! <br />
            <h2 className="headContact">For any event related query <br />Contact Atharva(Problem Statement Head) : 8767835399</h2>
            <span className="text-red-500 font-bold">NO Refund available</span>
          </p>
          <a href="http://wa.me/+919307727077" rel="noopener noreferrer" target="_blank">
            <button className="whatsapp">Contact Us On Whatsapp</button>
          </a>
          <div className="action_btn ml-[20px]">
          <Btn2 link={"/YantrautsavRuleBook25.pdf"} />
            <Btn1 text={"Register (Junior)"} link={"https://forms.gle/oXU5L4F3Vqev29rE6"} />

            <Btn1 text={"Register (Senior)"} link={"https://unstop.com/p/yantrautsav-senior-category-roborashtra-2k25-pimpri-chinchwad-college-of-engineering-and-researchpccoer-pune-1172914"} />
          </div>
        </div>
        {/* <Image src="/" alt="robowar" width={500} height={400} /> */}
      </div>
    </ImageLoader>
  );
};

export default CamWarrior;
