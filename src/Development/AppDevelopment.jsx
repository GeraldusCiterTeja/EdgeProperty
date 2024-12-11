import React from "react";
import DevelopmentBeranda from "./DevelopmentBeranda";
import DevApp1 from "./DevApp1";
import DevApp2 from "./DevApp2";
import DevApp3 from "./DevApp3";
import DevApp4 from "./DevApp4";

function AppDevelopment(){
  return(
    <div className="appDevelopment">
      <DevelopmentBeranda />
      <div className="containerDev">
        <DevApp1 />
        <DevApp2 />
        <DevApp3 />
        <DevApp4 />
      </div>
    </div>
  )
}

export default AppDevelopment;