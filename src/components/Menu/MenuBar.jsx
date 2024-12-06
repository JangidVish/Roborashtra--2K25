import React from "react";
import Link from "next/link";
import Button from "../Buttons/Btn1";
import "./EventMenu.css"

const options = [
  { text: "EVENTS", link: "/menu" },

  { text: "Glimpse", link: "/menu/Glimpse" },
  { text: "Sponsors", link: "/menu/sponsors" },
  { text: "Our Team", link: "/menu/teams" },
  { text: "Our Clan", link: "/menu/clan" },
  { text: "Contact", link: "/menu/Contact" },
  { text: "Past Participant", link: "/menu/Past" }
];

const MenuBar = () => {
  return (
    <div className="sideMenu">
      {options.map((option, index) => (
        <Link href={option.link} key={index}>
          <Button
            style={{ margin: "1rem" }}
            text={option.text}
            link={option.link}
          />
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;