import MenuBar from "@/components/Menu/MenuBar";
import "./menu.css";
import Nav from "@/components/Nav/Nav";
import ImageLoader from "@/components/loader/Loader";
import Cursor from "@/components/Cursor/cursor";

export const metadata = {
  title: "Roborashtra",
  description:
    "Experience the thrill of Roborashtra, an inter-college robotics extravaganza organized by Pimpri Chinchwad College of Engineering and Research (PCCOER). Compete in exciting events like YantraUtsav and Reqlympic for a chance to win prizes worth 2 lakh rupees. Don't miss the opportunity to showcase your innovation and engineering skills.  ",
};

export default function MenuLayout({ children }) {
  return (
    <ImageLoader>
      <Cursor />
    <div className="menu_mob">
      <div className="menu_nav">
    <Nav />
    </div>
      <div className="Menu_wrapper">
        <div>{children}</div>
        <div className="Menu_bar">
          <MenuBar />
        </div>
      </div>
    </div>
    </ImageLoader>
  );
}
