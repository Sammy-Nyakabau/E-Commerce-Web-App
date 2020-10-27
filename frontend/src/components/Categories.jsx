/* eslint-disable */
import React from "react";
import Scrollspy from 'react-scrollspy';
import Block from "./Block";
import Block__reverse from "./Block__reverse";
import "../styles/Categories.css";

function Categories() {
  return (
    <div className="Categories">
      <div className="heading">
        
        <Scrollspy
            items={[
              "Helicpters",
              "Aircraft",
              "Unmanned Aerial Systems",
              "Jet Liners",
            ]}
            currentClassName="is-current"
          >
            <ul>
            <li>
              <a href="#Helicopters">Helicopters</a>
            </li>
            <li>
              <a href="#Aircraft">Aircraft</a>
            </li>
            <li>
              <a href="#Unmanned Aerial Systems">Unmanned Aerial Systems</a>
            </li>
            <li>
              <a href="#Jet Liners">Jet Liners</a>
            </li>
            </ul>
          </Scrollspy>
        
      </div>
      <div className="categories">
        {/* i have made 2 blocks(Block & Block__reverse) to get the mirror image effect on the home page */}
        <section id="Helicopters">
          <Block
            imgUrl="https://i.ibb.co/j4cBxxv/Helicopters.jpg"
            Name="Helicopters"
            description="We deliver best-in-class helicopters and services. Thanks to our expertise we manage all stages of research, design, development,production, customer support and training of an extensive range of modern helicopters for commercial, public services, security and defence applications."
          />
        </section>
        <section id="Aircraft">
          <Block__reverse
            imgUrl="https://i.ibb.co/pwV1WYV/Aircraft.jpg"
            Name="Aircraft"
            description="Multi-mission, tactical transport, combat, trainers. Our aircraft combine operational flexibility with the ruggedness needed to accomplish military missions. Covering the entire pilot training syllabus, we offer ground and air training and on demand service."
          />
        </section>
        <section id="Unmanned Aerial Systems">
          <Block
            imgUrl="https://i.ibb.co/qxx07cR/Unmanned-Aerial-Systems.jpg"
            Name="Unmanned Aerial Systems"
            description="We deliver full end-to-end UAS solutions - embracing platforms, sensors, mission system and ground control - for tactical ISTAR applications. Our portfolio includes tactical rotary and fixed wing UAS, optionally piloted helicopter, fully equipped with sensors and networked capability."
          />
        </section>
        <section id="Jet Liners">
          <Block__reverse
            imgUrl="https://i.ibb.co/0n3b5n6/Jet-Liners.jpg"
            Name="Jet Liners"
            description="We deliver the best in class private jet liners thanks to our collabarations with major firms like Boeing, Airbus, Finmeccanica, Augusta Westland. Our aircraft include the best in safety and leisure features ensuring an impeccable experience. "
          />
        </section>
      </div>
</div>
  );
}

export default Categories;