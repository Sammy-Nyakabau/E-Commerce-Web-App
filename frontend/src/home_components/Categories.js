import React from "react";
import "./Categories.css";
import Block from "./Block";
import Block__reverse from "./Block__reverse";
import Scrollspy from 'react-scrollspy';

function Categories() {
  return (
    <div className="Categories">
      <div className="heading">
        
        <Scrollspy
            items={[
              "Helicpters",
              "Aircraft",
              "Unmanned Aerial Systems",
              "Airborne Systems",
            ]}
            currentClassName="is-current"
          >
            <ul>
            <li>
              <a href="#Helicpters">Helicopters</a>
            </li>
            <li>
              <a href="#Aircraft">Aircraft</a>
            </li>
            <li>
              <a href="#Unmanned Aerial Systems">Unmanned Aerial Systems</a>
            </li>
            <li>
              <a href="#Airborne Systems">Airborne Systems</a>
            </li>
            </ul>
          </Scrollspy>
        
      </div>
      <div className="categories">
        {/* i have made 2 blocks(Block & Block__reverse) to get the mirror image effect on the home page */}
        <section id="Helicpters">
          <Block
            imgUrl="https://www.leonardocompany.com/o/adaptive-media/image/5736210/h_695/Mastering%20the%20present%20OLD.jpg?t=1553250316526"
            Name="Helicopters"
            description="We deliver best-in-class helicopters and services. Thanks to our expertise we manage all stages of research, design, development,production, customer support and training of an extensive range of modern helicopters for commercial, public services, security and defence applications."
          />
        </section>
        <section id="Aircraft">
          <Block__reverse
            imgUrl="https://www.leonardocompany.com/o/adaptive-media/image/5155277/h_695/Aircraft%20-%20LPP_foto01%20%281%29.jpg?t=1550740767380"
            Name="Aircraft"
            description="Multi-mission, tactical transport, combat, trainers. Our aircraft combine operational flexibility with the ruggedness needed to accomplish military missions. Covering the entire pilot training syllabus, we offer ground and air training and on demand service."
          />
        </section>
        <section id="Unmanned Aerial Systems">
          <Block
            imgUrl="https://www.leonardocompany.com/o/adaptive-media/image/5647280/w_720/AW_HERO_II%20%281%29.jpg?t=1553074627220"
            Name="Unmanned Aerial Systems"
            description="We deliver full end-to-end UAS solutions - embracing platforms, sensors, mission system and ground control - for tactical ISTAR applications. Our portfolio includes tactical rotary and fixed wing UAS, optionally piloted helicopter, fully equipped with sensors and networked capability."
          />
        </section>
        <section id="Airborne Systems">
          <Block__reverse
            imgUrl="https://www.leonardocompany.com/o/adaptive-media/image/854015/w_720/captor-e-aesa-radar--photo%203.jpg?t=1541596109540"
            Name="Airborne Systems"
            description="We provide airborne solutions that range from components through to full ISR/ISTAR, airborne sensors and effectors that operate across the full electromagnetic spectrum. Our solutions leverage proprietary sensor technology, driven by constant innovation."
          />
        </section>
      </div>
</div>
  );
}

export default Categories;