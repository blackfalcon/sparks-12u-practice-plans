import React, { useState, Fragment } from 'react';
import { NavLink } from "react-router-dom";

export default function SideNav(props) {

  const [siteNav, setNav] = useState([
    {
      items: [
        { linkTitle: "Practice warm-ups", route: "/blog/warmups", parent: true },
        { linkTitle: "Pre-game warm-ups", route: "/gamewarmups", parent: true },
      ]
    },
    {
      header: "Practice plans",
      items: [
        { linkTitle: "006: 10.16", route: "/blog/practice006", parent: true },
        { linkTitle: "005: 10.8", route: "/blog/practice005", parent: true },
        { linkTitle: "004: 10.2", route: "/blog/practice004", parent: true },
        { linkTitle: "003: 9.18", route: "/blog/practice003", parent: true },
        { linkTitle: "002: 9.11", route: "/blog/practice002", parent: true },
      ]
    },
    {
      header: "Throwing",
      items: [
        { linkTitle: "Breakdown", route: "/properthrowing", parent: true },
        { linkTitle: "Progression", route: "/throwingprogression", parent: true },
        { linkTitle: "Warm-ups", route: "/throwingwarmups", parent: true },
      ]
    },
    {
      header: "Hitting",
      items: [
        { linkTitle: "Breakdown", route: "/properhitting", parent: true },
      ]
    },
    {
      header: "At-home drills",
      items: [
        { linkTitle: "Catching", route: "/catchingdrills", parent: true },
        { linkTitle: "Fielding", route: "/fieldingdrills", parent: true },
      ]
    },
    // {
    //   header: "Games",
    //   items: [
    //     { linkTitle: "09.16.22 Fury Red", route: "/blog/game091622", parent: true },
    //   ]
    // },
    // {
    //   header: "Other things",
    //   items: [
    //     { linkTitle: "About me", route: "/about", parent: true },
    //   ]
    // }
  ]);

  return (
    <nav className="sidenav">
      {siteNav.map(navBlock => (
        <Fragment key={Math.random()}>

          <section>
            {/* heading for nav block, uses first title in the object */}
            <p className="isHeading auro_heading auro_heading--500" key={navBlock.header}>{navBlock.header}</p>

            <p className="auro_heading auro_heading--300" key={navBlock.title}>{navBlock.title}</p>


              {/* TODO: Toggle HIDDEN attr on click to hide/show nav items within a block */}
              <div className="navBlock">
                {navBlock.items.map(link => (
                  <NavLink exact key={link.route} to={link.route} activeClassName="is-active"

                    className={`auro_hyperlink auro_hyperlink--nav ${link.active ? 'auro_hyperlink--active': ''} ${link.subNav ? 'auro_hyperlink--subNav': ''} ${link.parent ? 'auro_hyperlink--parent': ''}`}>

                    {/* onClick event that sets nav item state to isActive */}
                    <span
                      onClick={() => {
                        siteNav.forEach(navBlock => navBlock.items.forEach(link => link.active = false));
                        link.active = true;
                        setNav([...siteNav]);
                      }}>

                      {link.linkTitle}
                    </span>
                  </NavLink>
                ))}
              </div>
            </section>
        </Fragment>
      ))}

      <p className="auro_heading auro_heading--500" style={{"margin-top": "30px"}}>YouTube</p>
      <auro-hyperlink href="https://www.youtube.com/c/MegRemSoftball/videos" nav target="_blank">MegRem Softball</auro-hyperlink><br/>
      <auro-hyperlink href="https://www.youtube.com/c/ZONEDSportsAcademy/videos" nav target="_blank">ZONEDSportsAcademy</auro-hyperlink>

      <p className="auro_heading auro_heading--300" style={{"margin-top": "100px"}}>Coaching resources</p>
      <auro-hyperlink href="https://forms.gle/Mx3miX4xVKAuSihB7" nav target="_blank">Player evaluation</auro-hyperlink>





      {/* <p className="auro_heading auro_heading--500">Feedback</p>
      <small>Have feedback on a post?<br/>Ideas for a new post?</small>
      <auro-hyperlink href="https://github.com/blackfalcon/another-ui-blog/issues" nav target="_blank">Send me an issue</auro-hyperlink> */}
    </nav>
  )
}
