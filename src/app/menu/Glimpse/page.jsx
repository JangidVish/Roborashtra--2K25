
"use client"
import React, { useState } from 'react';
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div className='gallery_wrapper'>
      <h1>Our Gallery</h1>
      <div className="imgs">
        {[glimpse7, glimpse2, glimpse3, glimpse1, glimpse4, glimpse5, glimpse6, glimpse8, glimpse9, glimpse10, glimpse11, glimpse12, glimpse13, glimpse14, glimpse15, glimpse16, glimpse17, glimpse18, glimpse19].map((imgUrl, index) => (
          <div key={index} className="image-container" onClick={() => handleImageClick(imgUrl)}>
            <GlimpseCard imgUrl={imgUrl} />
          </div>
        ))}
      </div>

      {/* Overlay for enlarged image */}
      {selectedImage && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeOverlay}>×</button>
            <Image src={selectedImage} alt="Enlarged view" layout="intrinsic" width={800} height={600} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
