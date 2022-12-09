import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FcConferenceCall,FcInTransit,FcGlobe,FcReading} from "react-icons/fc";

function Counter() {

    const [countOn,setcountOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setcountOn(true)} onExit={() => setcountOn(false)}>
    <h2>Counter System</h2>
      <div className="counter_div">
        <p>
        <FcConferenceCall size={46} className="counter_icons"/>
        {countOn && <CountUp start={0} end={100} duration={2} delay={0} /> }+
        </p>
        <p>
        <FcReading size={46} className="counter_icons"/>
        {countOn && <CountUp start={0} end={200} duration={2} delay={0} /> }+
        </p>
        <p>
        <FcInTransit size={46} className="counter_icons"/>
        {countOn && <CountUp start={0} end={400} duration={2} delay={0} /> }+
        </p>
        <p>
        <FcGlobe size={46} className="counter_icons"/>
        {countOn && <CountUp start={0} end={1000} duration={2} delay={0} /> }+
        </p>
      </div>
    </ScrollTrigger>
  );
}

export default Counter;
