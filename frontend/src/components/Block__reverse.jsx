/* eslint-disable */
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/Block__reverse.css"

function Block__reverse(props) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div data-aos="fade-left" className="block__reverse">
      <img src={props.imgUrl} />
      <div className="block__description">
        <h1 className="block__name">{props.Name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Block__reverse;
