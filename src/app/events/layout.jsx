import EventMenu from "@/components/Menu/EventMenu";
import "./event.css";
import Nav from "@/components/Nav/Nav";
import ImageLoader from "@/components/loader/Loader";
export const metadata = {
  title: "Roborastra",
  description:
    "Experience the thrill of Roborashtra, an inter-college robotics extravaganza organized by Pimpri Chinchwad College of Engineering and Research (PCCOER). Compete in exciting events like Robowar and Cam Warrior for a chance to win prizes worth 2 lakh rupees. Don't miss the opportunity to showcase your innovation and engineering skills. ",
};

export default function EventLayout({ children }) {
  return (
    
    <ImageLoader>
      <div id="canvas"></div>
    <div>
      <Nav />
      <div className="Event_wrapper">
        <div>
          <EventMenu />
        </div>
        <div>{children}</div>
      </div>
    </div>
    </ImageLoader>
  );
}
