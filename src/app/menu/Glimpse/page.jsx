
import React from 'react';
import "./glimpse.css";
import Image from "next/image";
import GlimpseCard from '@/components/glimpseCard/glimpseCard';

// Importing images
import glimpse1 from "../../../images/BlazeTrophy.png";
import glimpse7 from "../../../images/glimpse1.png";
import glimpse2 from "@/images/Team.png";
import glimpse3 from "@/images/blazeTeam.png";
import glimpse4 from "@/images/Trophy.png";
import glimpse5 from "@/images/ResqBot.png";
import glimpse6 from "@/images/resqArena.png";
import glimpse8 from "@/images/Glimpse/Audience.png";
import glimpse9 from "@/images/Glimpse/Evaluation2.png";
import glimpse10 from "@/images/Glimpse/Evalution1.png";
import glimpse11 from "@/images/Glimpse/Guest.png";
import glimpse12 from "@/images/Glimpse/Inaguration.png";
import glimpse13 from "@/images/Glimpse/Lead.png";
import glimpse14 from "@/images/Glimpse/PrincipalMam.png";
import glimpse15 from "@/images/Glimpse/PrizeDistribution1.png";
import glimpse16 from "@/images/Glimpse/Prizedistribution2.png";
import glimpse17 from "@/images/Glimpse/Prizesholding.png";
import glimpse18 from "@/images/Glimpse/Ribbin.png";
import glimpse19 from "@/images/Glimpse/check.png";

// Reusable component for winner section
const WinnerSection = ({ title, winners }) => (
  <div>
    <h3>{title}</h3>
    <div className='imgcam'>
      {winners.map((winner, index) => (
        <div key={index} className='flex flex-col justify-center items-center '>
          <GlimpseCard imgUrl={glimpse7} />
          <p className='text-center font-[aroma]'>Position: {winner.position}</p>
          <p className='text-center font-[aroma] '>Team: {winner.team}</p>
        </div>
      ))}
    </div>
  </div>
);



const Gallery = () => {
  // const institute = [
  //   { instituteName: "Pimpri Chinchwad College of Engineering and Research" },
  //   { instituteName: "Pimpri Chinchwad College of Engineering" },
  //   { instituteName: "AISSMS College of Engineering" },
  //   { instituteName: "Sinhgad College of Engineering" },
  //   { instituteName: "MIT College of Engineering" },
  // ]
  const institute = [
    { instituteName: "Pimpri Chinchwad College of Engineering and Research" },
    { instituteName: "Pimpri Chinchwad College of Engineering" },
    { instituteName: "AISSMS College of Engineering" },
    { instituteName: "Sinhgad College of Engineering" },
    { instituteName: "MIT College of Engineering" },
    // { instituteName: "Pimpri Chinchwad College Of Engineering and Research (PCCOER), Pune" },
    { instituteName: "Pimpri Chinchwad Education Trust (PCET), Pune" },
    { instituteName: "Indira College of Engineering and Management (ICEM), Maharashtra" },
    { instituteName: "National Institute of Technology (NIT), Trichy" },
    { instituteName: "Dr. D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune" },
    { instituteName: "Army Institute of Technology (AIT), Pune" },
    { instituteName: "SND College of Engineering & Research Center (SNDCOER), Nashik, Maharashtra" },
    { instituteName: "Sandip Foundation" },
    { instituteName: "Vidyavardhaka College of Engineering, Mysore" },
    { instituteName: "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune" },
    { instituteName: "Vivekanand Education Society's Institute Of Technology (VESIT), Mumbai" },
    { instituteName: "Pimpri Chinchwad University" },
    { instituteName: "MIT World Peace University, Pune, Maharashtra" },
    { instituteName: "Savitribai Phule Pune University (SPPU), Pune" },
    { instituteName: "COEP Technological University, Pune, Maharashtra" },
    { instituteName: "College of Engineering (COEP), Pune" },
    { instituteName: "Veermata Jijabai Technological Institute (VJTI), Mumbai" },
    { instituteName: "PCET's Nutan College of Engineering and Research, Pune, Maharashtra" },
    { instituteName: "PCET's Nutan Maharashtra Institute of Engineering and Technology (PNMIET), Talegaon Dabhade, Maharashtra" },
    { instituteName: "Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune" },
   
    { instituteName: "JSPM Rajarshi Shahu College of Engineering, Tathawade, Pimpri-Chinchwad, Maharashtra" },
    { instituteName: "JSPM's Rajarshi Shahu College of Engineering (JSPMRSCOE), Pune" },
    { instituteName: "Smt Kashibai Navale College of Engineering (SKNCE), Pune" },
    { instituteName: "Vishwakarma Institute of Technology, Pune, Maharashtra" },
    { instituteName: "Novel International School" },
    { instituteName: "P K Technical Campus (PKTC), Pune, Maharashtra" }
  ];
  

  const instituteList = institute.map((eachinstitute, index) =>
    <div className='list-container bg-zinc-800 hover:bg-zinc-600 rounded-lg font-semibold' key={index}>{eachinstitute.instituteName}</div>

  )
  
  return (
    <div className='gallery_wrapper'>
      {/* <h1 className='justify-center text-center mt-[50px]'>Past Winner</h1>
      
      <WinnerSection
        title="Cam Warrior"
        winners={[
          { position: "First Winner", team: "PHOENIX" },
          { position: "Second Winner", team: "JMJM" },
          { position: "Third Winner", team: "Vamrone" },
        ]}
      />
      
      <WinnerSection
        title="Blaze Maze"
        winners={[
          { position: "First Winner", team: "Vijay27" },
          { position: "Second Winner", team: "Deepak Avhad" },
          { position: "Third Winner", team: "Ranveer Rajput" },
        ]}
      />
      
      <WinnerSection
        title="ResQlympic"
        winners={[
          { position: "First Winner", team: "Incronous" },
          { position: "Second Winner", team: "DRAIC" },
          { position: "Third Winner", team: "DRAIC-1" },
        ]}
      />
      
    
      
      */}
      <br></br>
      <br></br>

      <h1>Our Gallery</h1>
      <div className="imgs">
        {[glimpse7, glimpse2, glimpse3, glimpse1, glimpse4, glimpse5, glimpse6, glimpse8, glimpse9, glimpse10, glimpse11, glimpse12, glimpse13, glimpse14, glimpse15, glimpse16, glimpse17, glimpse18, glimpse19].map((imgUrl, index) => (
          <GlimpseCard key={index} imgUrl={imgUrl} />
        ))}
      </div>
      <div className='main-container '>
      <div className='past-winner-container mt-[100px]'>
      {/* <h1 className='institute-winner text-center font-bold p-[20px]'>Past Winner</h1> */}
      <div className=' '  >
      
      </div>

      </div>


      <div className='past-institute-container'>
      <h1 className='institute-winner text-center font-bold'>Past Institutes participated</h1>
      <div className='inner-container-list'>
        {instituteList}
      </div>

      </div>
     

    </div>
    </div>
  );
};

export default Gallery;
