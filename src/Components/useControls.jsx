import { useEffect, useState } from "react";

import { Howl} from "howler";

import highoffsound from "../engines/1/high_off.mp3";
import highonsound from "../engines/1/high_on.mp3";
import mediumoffsound from "../engines/1/med_off.mp3";
import mediumonsound from "../engines/1/med_on.mp3";
import lowoffsound from "../engines/1/low_off.mp3";
import lowonsound from "../engines/1/low_on.mp3";
import idlesound from "../engines/1/idle.mp3";
import maxrpmsound from "../engines/1/maxRPM.mp3";

const sounds = {
  highoff: new Howl({ src: highoffsound }, { loop: true }),
  highon: new Howl({ src: highonsound }, { loop: true }),
  mediumoff: new Howl({ src: mediumoffsound }, { loop: true }),
  mediumon: new Howl({ src: mediumonsound }, { loop: true }),
  lowoff: new Howl({ src: lowoffsound }, { loop: true }),
  lowon: new Howl({ src: lowonsound }, { loop: true }),
  idle: new Howl({ src: idlesound }, { loop: true }),
  maxrpm: new Howl({ src: maxrpmsound }, { loop: true }),
};

Object.values(sounds).forEach((sound) => {
  sound.volume(0.1);
});

export const useControls = (vehicleApi, chassisApi) => {
  let [controls, setControls] = useState({});
  
  
  useEffect(() => {
    const keyDownPressHandler = (e) => {
      setControls((controls) => ({ ...controls, [e.key.toLowerCase()]: true }));
    };

    const keyUpPressHandler = (e) => {
      setControls((controls) => ({
        ...controls,
        [e.key.toLowerCase()]: false,
      }));
    };

    window.addEventListener("keydown", keyDownPressHandler);
    window.addEventListener("keyup", keyUpPressHandler);
    return () => {
      window.removeEventListener("keydown", keyDownPressHandler);
      window.removeEventListener("keyup", keyUpPressHandler);
    };
  }, []);

  useEffect(() => {
    if (!vehicleApi || !chassisApi) return;
    if(!sounds.idle.playing()){
      //sounds.idle.play();
    }

    if (controls.w) {
      vehicleApi.applyEngineForce(150, 2);
      vehicleApi.applyEngineForce(150, 3);
      
    } else if (controls.s) {
      
      vehicleApi.applyEngineForce(-150, 2);
      vehicleApi.applyEngineForce(-150, 3);
    } else {
      
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
    }

    

    if (controls.a) {
      vehicleApi.setSteeringValue(0.35, 2);
      vehicleApi.setSteeringValue(0.35, 3);
      vehicleApi.setSteeringValue(-0.1, 0);
      vehicleApi.setSteeringValue(-0.1, 1);
    } else if (controls.d) {
      vehicleApi.setSteeringValue(-0.35, 2);
      vehicleApi.setSteeringValue(-0.35, 3);
      vehicleApi.setSteeringValue(0.1, 0);
      vehicleApi.setSteeringValue(0.1, 1);
    } else {
      for (let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }

    if (controls.arrowdown)
      chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, +1]);
    if (controls.arrowup) chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, -1]);
    if (controls.arrowleft)
      chassisApi.applyLocalImpulse([0, -5, 0], [-0.5, 0, 0]);
    if (controls.arrowright)
      chassisApi.applyLocalImpulse([0, -5, 0], [+0.5, 0, 0]);

    if (controls.r) {
      chassisApi.position.set(-1.5, 0.5, 3);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      chassisApi.rotation.set(0, 0, 0);
    }
  }, [controls, vehicleApi, chassisApi]);

  return controls;
};
