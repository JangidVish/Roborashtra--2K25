
import EventMenu from "@/components/Menu/EventMenu";
import React from "react";
import "./event.css";
import Nav from "@/components/Nav/Nav";
import ImageLoader from "@/components/loader/Loader";
import Cursor from "@/components/Cursor/cursor";
export const metadata = {
  title: "Roborashtra",
  description:
    "Experience the thrill of Roborashtra, an inter-college robotics extravaganza organized by Pimpri Chinchwad College of Engineering and Research (PCCOER). Compete in exciting events like YantraUtsav and Reqlympic for a chance to win prizes worth 2 lakh rupees. Don't miss the opportunity to showcase your innovation and engineering skills. ",
};

export default function EventLayout({ children }) {
  return (
    <ImageLoader>
      <Cursor />
    <div >
      <div>

      <Nav />
      </div>
      <div className="Event_wrapper">
        <div className="event_menu">
          <EventMenu />
        </div>
        <div>{children}</div>
      </div>
    </div>
    </ImageLoader>
  );
}
